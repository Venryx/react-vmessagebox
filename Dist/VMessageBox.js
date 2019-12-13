import { BaseComponent, AddGlobalStyle } from "react-vextensions";
import Modal from "react-modal";
import { Button } from "react-vcomponents";
import { E } from "./General";
import { MessageBoxOptions, BoxController } from "./Structures";
import { store } from "./Store";
var React = require("react");
let lastBoxID = -1;
let boxInfo = {};
export function ShowMessageBox_Base(options) {
    let boxID = ++lastBoxID;
    let controller = new BoxController(options, boxID);
    // store options in extra storage, because ui-functions in it get ruined when put in Redux store // todo: now that using mobx, maybe move it back
    boxInfo[boxID] = { id: boxID, options, controller };
    store.openBoxID = boxID;
    return controller;
}
//export function ShowMessageBox(options: Partial<MessageBoxOptions>) {
export function ShowMessageBox(options) {
    let options_final = E(new MessageBoxOptions(), options);
    var boxController = ShowMessageBox_Base(options_final);
    return boxController;
}
AddGlobalStyle(`
.ReactModal__Overlay { z-index: 1; }
`);
let styles = {
    overlay: {
        position: "fixed", left: -1000, right: -1000, top: -1000, bottom: -1000,
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
    message: { padding: "10px 20px", whiteSpace: "pre" },
    buttonBar: { marginLeft: 20, marginBottom: 20, marginRight: 20 },
};
export class MessageBoxUI extends BaseComponent {
    ComponentWillReceiveProps(props) {
        // if open-box-id changing, clear dialog position/offset
        if (props.openBoxID != this.props.openBoxID) {
            this.SetState({ offset: { x: 0, y: 0 } });
        }
    }
    render() {
        if (store.openBoxID == null)
            return React.createElement("div", null);
        store.updateCallCount; // just access (used to trigger update, when val changed)
        let info = boxInfo[store.openBoxID]; // get orig-options rather than options-in-store, because in-store version gets messed up
        let { options: o, controller } = info;
        let { offset } = this.state;
        return (React.createElement(Modal, { isOpen: true, contentLabel: "", ariaHideApp: false, style: {
                overlay: E(styles.overlay, o.overlayStyle),
                content: E(styles.container, { marginLeft: offset.x * 2, marginTop: offset.y * 2 }, // apply offset*2, because container's flex-based centering considers margins part of the size
                o.containerStyle),
            }, shouldCloseOnOverlayClick: o.cancelOnOverlayClick, onRequestClose: () => {
                if (o.onCancel && o.onCancel() === false)
                    return;
                store.openBoxID = null;
            } },
            o.title != null &&
                React.createElement("div", { style: E(styles.title, o.titleStyle), onMouseDown: e => {
                        this.moveBar_drag_origOffset = offset;
                        this.moveBar_drag_mouseDownPos = { x: e.pageX, y: e.pageY };
                        document.addEventListener("mousemove", this.moveBar_drag_mouseMoveListener = (e) => {
                            if (this.moveBar_drag_mouseDownPos == null)
                                return;
                            let diffFromDragPoint = { x: e.pageX - this.moveBar_drag_mouseDownPos.x, y: e.pageY - this.moveBar_drag_mouseDownPos.y };
                            this.SetState({ offset: { x: this.moveBar_drag_origOffset.x + diffFromDragPoint.x, y: this.moveBar_drag_origOffset.y + diffFromDragPoint.y } });
                        });
                        document.addEventListener("mouseup", this.moveBar_drag_mouseUpListener = (e) => {
                            this.moveBar_drag_origOffset = null;
                            this.moveBar_drag_mouseDownPos = null;
                            document.removeEventListener("mousemove", this.moveBar_drag_mouseMoveListener);
                            this.moveBar_drag_mouseMoveListener = null;
                            document.removeEventListener("mouseup", this.moveBar_drag_mouseUpListener);
                            this.moveBar_drag_mouseUpListener = null;
                        });
                    } }, typeof o.title == "string" ? o.title : o.title()),
            o.message != null &&
                React.createElement("div", { style: E(styles.message, o.messageStyle) }, typeof o.message == "string" ? o.message : o.message()),
            (o.okButton || o.cancelButton || o.extraButtons) &&
                React.createElement("div", { style: E(styles.buttonBar, o.buttonBarStyle) },
                    o.okButton &&
                        React.createElement(Button, { text: "OK", enabled: o.okButtonClickable, onClick: () => {
                                if (o.onOK && o.onOK() === false)
                                    return;
                                controller.Close();
                            } }),
                    o.cancelButton &&
                        React.createElement(Button, { text: "Cancel", ml: o.okButton ? 10 : 0, onClick: () => {
                                if (o.onCancel && o.onCancel() === false)
                                    return;
                                controller.Close();
                            } }),
                    o.extraButtons && o.extraButtons())));
    }
}
MessageBoxUI.defaultState = { offset: { x: 0, y: 0 } };
//# sourceMappingURL=VMessageBox.js.map