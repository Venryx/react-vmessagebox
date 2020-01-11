import React from "react";
import {runInAction} from "mobx";
import {observer} from "mobx-react";
import Modal from "react-modal";
import {Button} from "react-vcomponents";
import {BaseComponentPlus} from "react-vextensions";
import {E} from "./General";
import {store} from "./Store";

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

@observer
export class MessageBoxUI extends BaseComponentPlus({} as {id: number}, {offset: {x: 0, y: 0}}) {
	//lastInnerUIResult;
	moveBar_drag_origOffset: {x: number, y: number};
	moveBar_drag_mouseDownPos: {x: number, y: number};
	moveBar_drag_mouseMoveListener: EventListener;
	moveBar_drag_mouseUpListener: EventListener;
	render() {
		let {id} = this.props;
		let boxState = store.openBoxStates[id];
		//if (boxState == null) return null;
		boxState.updateCallCount; // just access (used to trigger update, when val changed)

		let {options: o, controller} = boxState;
		let {offset} = this.state;

		return (
			<Modal isOpen={true} contentLabel={""} ariaHideApp={false}
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
						//runInAction("MessageBoxUI.onClose", ()=>store.openBoxID = null);
						controller.Close();
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
				{(o.okButton || o.cancelButton || o.extraButtons) &&
					<div style={E(styles.buttonBar, o.buttonBarStyle)}>
						{o.okButton &&
							<Button text="OK" {...o.okButtonProps}
								onClick={()=> {
									if (o.onOK && o.onOK() === false) return;
									controller.Close();
								}}/>}
						{o.cancelButton &&
							<Button text="Cancel" ml={o.okButton ? 10 : 0} {...o.cancelButtonProps} onClick={()=> {
								if (o.onCancel && o.onCancel() === false) return;
								controller.Close();
							}}/>}
						{o.extraButtons && o.extraButtons()}
					</div>}
			</Modal>
		);
	}
}