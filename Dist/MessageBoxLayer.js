import { observer } from "mobx-react";
import React from "react";
import { AddGlobalStyle, BaseComponent } from "react-vextensions";
import { MessageBoxUI } from "./MessageBoxUI.js";
import { store } from "./Store.js";
AddGlobalStyle(`
.ReactModal__Overlay { z-index: 1; }
`);
function GetParents(self, topDown = false) {
    const result = [];
    let currentParent = self.parentElement;
    while (currentParent) {
        result.push(currentParent);
        currentParent = currentParent.parentElement;
    }
    if (topDown)
        result.reverse();
    return result;
}
export function AddGlobalKeyListener() {
    document.addEventListener("keydown", e => {
        let openBoxIDs = Object.keys(store.openBoxStates).map(idStr => Number(idStr));
        const topDialogID = openBoxIDs.length ? openBoxIDs[openBoxIDs.length - 1] : null;
        const topDialogState = topDialogID ? store.openBoxStates[topDialogID] : null;
        if (topDialogState == null)
            return;
        if (e.key == "Enter") {
            if (topDialogState.options.okButton && topDialogState.options.okOnEnterKey) {
                // if the focused element is in one of the message-boxes/dialogs, call `blur()` on it, so it saves its state before the dialog's `onOK` event triggers
                let activeEl = document.activeElement;
                if (activeEl && activeEl instanceof HTMLElement && GetParents(activeEl).find(a => a.classList.contains("ReactModal__Content"))) {
                    activeEl.blur();
                }
                topDialogState.controller.PressOK();
            }
        }
        else if (e.key == "Escape") {
            if (topDialogState.options.cancelButton && topDialogState.options.cancelOnEscapeKey) {
                topDialogState.controller.PressCancel();
            }
        }
    });
}
@observer
export class MessageBoxLayer extends BaseComponent {
    ComponentWillMount() {
        AddGlobalKeyListener();
    }
    render() {
        let openBoxIDs = Object.keys(store.openBoxStates).map(idStr => Number(idStr));
        return (React.createElement(React.Fragment, null, openBoxIDs.map(id => {
            return React.createElement(MessageBoxUI, { key: id, id: id });
        })));
    }
}
//# sourceMappingURL=MessageBoxLayer.js.map