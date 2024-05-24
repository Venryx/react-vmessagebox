import { observer } from "mobx-react";
import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import { Button } from "react-vcomponents";
import { E } from "./General.js";
import { store } from "./Store.js";
export const MessageBoxUI_styles = {
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
        border: "solid rgba(255,255,255,.1)", borderWidth: "0 0 1px 0",
        // we don't want dialog titles to change the sizing of the dialog, so use absolute positioning (and cut off overflow)
        position: "absolute", width: "100%", overflow: "hidden",
    },
    message: {
        marginTop: 32,
        padding: "10px 20px",
    },
    buttonBar: { marginLeft: 20, marginBottom: 20, marginRight: 20 },
};
let styles = MessageBoxUI_styles; // local alias
export const MessageBoxUI = observer((props) => {
    var _a;
    let { id } = props;
    let boxState = store.openBoxStates[id];
    //if (boxState == null) return null;
    let updateCallCount = boxState.updateCallCount; // just access (used to trigger update, when val changed)
    let { options: o, controller } = boxState;
    let [offset, setOffset] = useState({ x: 0, y: 0 });
    (_a = o.preRender) === null || _a === void 0 ? void 0 : _a.call(o, updateCallCount);
    // cache these, until the caller manually calls boxController.Update()
    /*let TitleAsReactRenderFunc = useMemo(()=>{
        return typeof o.title == "string" ? ()=><>{o.title}</> :
            typeof o.title == "function" ? o.title :
            ()=><></>;
    }, [updateCallCount]);
    let MessageAsReactRenderFunc = useMemo(()=>{
        return typeof o.message == "string" ? ()=><>{o.message}</> :
            typeof o.message == "function" ? o.message :
            ()=><></>;
    }, [updateCallCount]);*/
    // cache these, until the caller manually calls boxController.Update()
    let TitleAsReactFunctionComp = useMemo(() => {
        var _a;
        return typeof o.title == "string" ? () => React.createElement(React.Fragment, null, o.title) :
            (typeof o.title == "function" || typeof ((_a = o.title) === null || _a === void 0 ? void 0 : _a["type"]) == "function") ? o.title :
                () => React.createElement(React.Fragment, null);
    }, [o.message]);
    let MessageAsReactFunctionComp = useMemo(() => {
        var _a;
        return typeof o.message == "string" ? () => React.createElement(React.Fragment, null, o.message) :
            (typeof o.message == "function" || typeof ((_a = o.message) === null || _a === void 0 ? void 0 : _a["type"]) == "function") ? o.message :
                () => React.createElement(React.Fragment, null);
    }, [o.message]);
    // cache these, until the caller manually calls boxController.Update()
    /*let TitleAsReactElements = useMemo(()=>{
        return typeof o.title == "string" ? <>{o.title}</> :
            (typeof o.title == "function" || typeof o.title?.["type"] == "function") ? o.title({updateCallCount}) :
            <></>
    }, [o.message, updateCallCount]);
    let MessageAsReactElements = useMemo(()=>{
        return typeof o.message == "string" ? <>{o.message}</> :
            (typeof o.message == "function" || typeof o.message?.["type"] == "function") ? o.message({updateCallCount}) :
            <></>;
    }, [o.message, updateCallCount]);*/
    //lastInnerUIResult;
    let data = useMemo(() => ({
        //lastInnerUIResult: null;
        moveBar_drag_origOffset: null,
        moveBar_drag_mouseDownPos: null,
        moveBar_drag_mouseMoveListener: null,
        moveBar_drag_mouseUpListener: null,
    }), []);
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
                    data.moveBar_drag_origOffset = offset;
                    data.moveBar_drag_mouseDownPos = { x: e.pageX, y: e.pageY };
                    document.addEventListener("mousemove", data.moveBar_drag_mouseMoveListener = (e) => {
                        if (data.moveBar_drag_mouseDownPos == null)
                            return;
                        let diffFromDragPoint = { x: e.pageX - data.moveBar_drag_mouseDownPos.x, y: e.pageY - data.moveBar_drag_mouseDownPos.y };
                        setOffset({
                            x: data.moveBar_drag_origOffset.x + diffFromDragPoint.x,
                            y: data.moveBar_drag_origOffset.y + diffFromDragPoint.y,
                        });
                    });
                    document.addEventListener("mouseup", data.moveBar_drag_mouseUpListener = (e) => {
                        data.moveBar_drag_origOffset = null;
                        data.moveBar_drag_mouseDownPos = null;
                        document.removeEventListener("mousemove", data.moveBar_drag_mouseMoveListener);
                        data.moveBar_drag_mouseMoveListener = null;
                        document.removeEventListener("mouseup", data.moveBar_drag_mouseUpListener);
                        data.moveBar_drag_mouseUpListener = null;
                    });
                } },
                React.createElement(TitleAsReactFunctionComp, Object.assign({}, { updateCallCount }))),
        o.message != null &&
            React.createElement("div", { style: E(styles.message, typeof o.message == "string" && { whiteSpace: "pre-wrap" }, o.messageStyle) },
                React.createElement(MessageAsReactFunctionComp, Object.assign({}, { updateCallCount }))),
        (o.okButton || o.cancelButton || o.extraButtons) &&
            React.createElement("div", { style: E(styles.buttonBar, o.buttonBarStyle) },
                o.okButton &&
                    React.createElement(Button, Object.assign({ text: "OK" }, o.okButtonProps, { onClick: () => {
                            controller.PressOK();
                        } })),
                o.cancelButton &&
                    React.createElement(Button, Object.assign({ text: "Cancel", ml: o.okButton ? 10 : 0 }, o.cancelButtonProps, { onClick: () => {
                            controller.PressCancel();
                        } })),
                o.extraButtons != null &&
                    React.createElement(o.extraButtons, Object.assign({}, { updateCallCount })))));
});
//# sourceMappingURL=MessageBoxUI.js.map