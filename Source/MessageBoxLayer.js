var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
let MessageBoxLayer = (() => {
    let _classDecorators = [observer];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseComponent;
    var MessageBoxLayer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MessageBoxLayer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        ComponentWillMount() {
            AddGlobalKeyListener();
        }
        render() {
            let openBoxIDs = Object.keys(store.openBoxStates).map(idStr => Number(idStr));
            return (<>
				{openBoxIDs.map(id => {
                    return <MessageBoxUI key={id} id={id}/>;
                })}
			</>);
        }
    };
    return MessageBoxLayer = _classThis;
})();
export { MessageBoxLayer };
