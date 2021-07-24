var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { observer } from "mobx-react";
import Modal from "react-modal";
import { Button } from "react-vcomponents";
import { BaseComponentPlus } from "react-vextensions";
import { E } from "./General.js";
import { store } from "./Store.js";
let styles = {
    overlay: {
        position: "fixed", left: -1000, right: -1000, top: -1000, bottom: -1000,
        display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,.5)",
    },
    container: {
        //overflow: "auto",
        overflow: "visible",
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
let MessageBoxUI = class MessageBoxUI extends BaseComponentPlus({}, { offset: { x: 0, y: 0 } }) {
    constructor() {
        super(...arguments);
        //lastInnerUIResult;
        Object.defineProperty(this, "moveBar_drag_origOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moveBar_drag_mouseDownPos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moveBar_drag_mouseMoveListener", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moveBar_drag_mouseUpListener", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    render() {
        let { id } = this.props;
        let boxState = store.openBoxStates[id];
        //if (boxState == null) return null;
        boxState.updateCallCount; // just access (used to trigger update, when val changed)
        let { options: o, controller } = boxState;
        let { offset } = this.state;
        return (React.createElement(Modal, { isOpen: true, contentLabel: "", ariaHideApp: false, style: {
                overlay: E(styles.overlay, o.overlayStyle),
                content: E(styles.container, { marginLeft: offset.x * 2, marginTop: offset.y * 2 }, // apply offset*2, because container's flex-based centering considers margins part of the size
                o.containerStyle),
            }, shouldCloseOnOverlayClick: o.cancelOnOverlayClick, onRequestClose: () => {
                if (o.onCancel && o.onCancel() === false)
                    return;
                //RunInAction("MessageBoxUI.onClose", ()=>store.openBoxID = null);
                controller.Close();
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
                        React.createElement(Button, Object.assign({ text: "OK" }, o.okButtonProps, { onClick: () => {
                                if (o.onOK && o.onOK() === false)
                                    return;
                                controller.Close();
                            } })),
                    o.cancelButton &&
                        React.createElement(Button, Object.assign({ text: "Cancel", ml: o.okButton ? 10 : 0 }, o.cancelButtonProps, { onClick: () => {
                                if (o.onCancel && o.onCancel() === false)
                                    return;
                                controller.Close();
                            } })),
                    o.extraButtons && o.extraButtons())));
    }
};
MessageBoxUI = __decorate([
    observer
], MessageBoxUI);
export { MessageBoxUI };
//# sourceMappingURL=MessageBoxUI.js.map