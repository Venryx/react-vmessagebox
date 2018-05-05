import {BaseComponent, AddGlobalStyle} from "react-vextensions";
import Modal from "react-modal";
import {connect} from "react-redux";
import {Button} from "react-vcomponents";
import { voidy } from "./General";
import Action from "./Action";
//import React from "react";

declare var require;
var React = require("react");

declare var store;

export class MessageBoxOptions {
	overlayStyle?: any;
	containerStyle?: any;
	
	title?: string | (()=>JSX.Element);
	titleStyle?: any;

	message?: string | (()=>JSX.Element);
	messageStyle?: any;

	okButton = true;
	okButtonClickable = true;
	onOK?: ()=>boolean | voidy;

	cancelButton = false;
	cancelOnOverlayClick = false;
	onCancel?: ()=>boolean | voidy;

	buttonBarStyle?: any;
}
export class ACTMessageBoxShow extends Action<{boxID: number}> {}
export class ACTMessageBoxUpdate extends Action<{boxID: number, updateInnerUI: boolean}> {}

export class BoxController {
	constructor(options: MessageBoxOptions, boxID: number) {
		this.options = options;
		this.boxID = boxID;
	}
	options: MessageBoxOptions;
	boxID: number;

	UpdateUI(updateInnerUI = true) {
		store.dispatch(new ACTMessageBoxUpdate({boxID: this.boxID, updateInnerUI}));
	}
	Close() {
		store.dispatch(new ACTMessageBoxShow({boxID: null}));
	}
}

export type BoxInfo = {
	id: number;
	options: MessageBoxOptions;
	controller: BoxController;
};

let lastBoxID = -1;
let boxInfo = {} as {[key: number]: BoxInfo};
export function ShowMessageBox_Base(options: MessageBoxOptions) {
	let boxID = ++lastBoxID;
	let controller = new BoxController(options, boxID);

	// store options in extra storage, because ui-functions in it get ruined when put in Redux store
	boxInfo[boxID] = {id: boxID, options, controller};

	store.dispatch(new ACTMessageBoxShow({boxID}));

	return controller;
}
//export function ShowMessageBox(options: Partial<MessageBoxOptions>) {
export function ShowMessageBox(options: {[P in keyof MessageBoxOptions]?: MessageBoxOptions[P]}) { // do it this way, so the options are shown
	let options_final = E(new MessageBoxOptions(), options) as MessageBoxOptions;
	var boxController = ShowMessageBox_Base(options_final);
	return boxController;
}

export class MessageBoxState {
	openBoxID: number;
	updateCallCount: number;
}
export function MessageBoxReducer(state = new MessageBoxState(), action: Action<any>) {
	if (action.type == "ACTMessageBoxShow") return {...state, openBoxID: action.payload.boxID};
	if (action.type == "ACTMessageBoxUpdate") return {...state, updateCallCount: (state.updateCallCount|0) + 1};
	return state;
}

AddGlobalStyle(`
.ReactModal__Overlay { z-index: 1; }
`);

let styles = {
	overlay: {
		position: "fixed", left: -1000, right: -1000, top: -1000, bottom: -1000, // add extra space, so that popup-content doesn't have scroll issue when clipping edges
		display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,.5)",
	},
	container: {
		overflow: "auto",
		//top: "40px", left: "40px", right: "40px", bottom: "40px",
		//left: "50%", right: "initial", top: "50%", bottom: "initial", transform: "translate(-50%, -50%)",
		position: "relative", left: "initial", right: "initial", top: "initial", bottom: "initial",
		background: "rgba(0,0,0,.75)", border: "1px solid #555", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: 0,
	},
	title: {
		padding: "5px 10px", background: "rgba(0,0,0,1)", cursor: "move", fontSize: "17px", fontWeight: "bold", whiteSpace: "pre",
		border: "solid rgba(255,255,255,.1)", borderWidth: "0 0 1px 0"
	},
	message: {padding: "10px 20px", whiteSpace: "pre"},
	buttonBar: {marginLeft: 20, marginBottom: 20, marginRight: 20},
};

@connect(state=>({
	openBoxID: store.getState().messageBox.openBoxID,
	updateCallCount: store.getState().messageBox.updateCallCount, // just used to trigger update
}))
export class MessageBoxUI extends BaseComponent<{} & Partial<{openBoxID: number, updateCallCount: number}>, {offset: {x: number, y: number}}> {
	static defaultState = {offset: {x: 0, y: 0}};

	//lastInnerUIResult;
	moveBar_drag_origOffset: {x: number, y: number};
	moveBar_drag_mouseDownPos: {x: number, y: number};
	moveBar_drag_mouseMoveListener: EventListener;
	moveBar_drag_mouseUpListener: EventListener;
	render() {
		let {openBoxID} = this.props;
		if (openBoxID == null) return <div/>;
		let info = boxInfo[openBoxID]; // get orig-options rather than options-in-store, because in-store version gets messed up
		let {options: o, controller} = info;
		let {offset} = this.state;

		return (
			<Modal isOpen={true} contentLabel={""}
					style={{
						overlay: E(styles.overlay, o.overlayStyle),
						content: E(
							styles.container,
							{marginLeft: offset.x * 2, marginTop: offset.y * 2}, // apply offset*2, because container's flex-based centering considers margins part of the size
							o.containerStyle
						),
					}}
					shouldCloseOnOverlayClick={o.cancelOnOverlayClick}
					onRequestClose={()=> {
						if (o.onCancel && o.onCancel() === false) return;
						store.dispatch(new ACTMessageBoxShow(null));
					}}>
				{o.title != null &&
					<div style={E(styles.title, o.titleStyle)}
						onMouseDown={e=> {
							this.moveBar_drag_origOffset = offset;
							this.moveBar_drag_mouseDownPos = {x: e.pageX, y: e.pageY};
							document.addEventListener("mousemove", this.moveBar_drag_mouseMoveListener = (e: MouseEvent)=> {
								if (this.moveBar_drag_mouseDownPos == null) return;
								let diffFromDragPoint = {x: e.pageX - this.moveBar_drag_mouseDownPos.x, y: e.pageY - this.moveBar_drag_mouseDownPos.y};
								this.SetState({offset: {x: this.moveBar_drag_origOffset.x + diffFromDragPoint.x, y: this.moveBar_drag_origOffset.y + diffFromDragPoint.y}});
							});
							document.addEventListener("mouseup", this.moveBar_drag_mouseUpListener = (e: MouseEvent)=> {
								this.moveBar_drag_origOffset = null;
								this.moveBar_drag_mouseDownPos = null;
								document.removeEventListener("mousemove", this.moveBar_drag_mouseMoveListener);
								this.moveBar_drag_mouseMoveListener = null;
								document.removeEventListener("mouseup", this.moveBar_drag_mouseUpListener);
								this.moveBar_drag_mouseUpListener = null;
							});
						}}>
						{typeof o.title == "string" ? o.title : o.title()}
					</div>}
				{o.message != null &&
					<div style={E(styles.message, o.messageStyle)}>
						{typeof o.message == "string" ? o.message : o.message()}
					</div>}
				{(o.okButton || o.cancelButton) &&
					<div style={E(styles.buttonBar, o.buttonBarStyle)}>
						{o.okButton &&
							<Button text="OK" enabled={o.okButtonClickable}
								onClick={()=> {
									if (o.onOK && o.onOK() === false) return;
									controller.Close();
								}}/>}
						{o.cancelButton &&
							<Button text="Cancel" ml={o.okButton ? 10 : 0} onClick={()=> {
								if (o.onCancel && o.onCancel() === false) return;
								controller.Close();
							}}/>}
					</div>}
			</Modal>
		);
	}
}