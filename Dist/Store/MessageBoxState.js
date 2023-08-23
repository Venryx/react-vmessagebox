var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, makeObservable } from "mobx";
import { RunInAction, DeepEquals } from "../General.js";
import { store } from "../Store.js";
export class MessageBoxState {
    constructor(initialData) {
        //id: number;
        Object.defineProperty(this, "updateCallCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "controller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        makeObservable(this);
        Object.assign(this, initialData);
    }
}
__decorate([
    observable
], MessageBoxState.prototype, "updateCallCount", void 0);
export class MessageBoxOptions {
    constructor() {
        Object.defineProperty(this, "overlayStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "containerStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "preRender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "titleStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "messageStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "okButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "okButtonProps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "okOnEnterKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "onOK", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cancelButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "cancelButtonProps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cancelOnEscapeKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "cancelOnOverlayClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "onCancel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "extraButtons", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "buttonBarStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
export class BoxController {
    constructor(options, boxID) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boxID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.options = options;
        this.boxID = boxID;
    }
    UpdateUI() {
        RunInAction("BoxController.UpdateUI", () => store.openBoxStates[this.boxID].updateCallCount++);
    }
    /** Options are checked for changes "deeply", ie. newOpts is shallow-merged into a new (interim) value, then deep-compared with old value. */
    UpdateOptions(newOpts, updateUIIfChanged = true) {
        /*const changed = Object.keys(newOpts).some(key=>ShallowChanged(this.options[key], newOpts[key]));
        Object.assign(this.options, newOpts);*/
        const oldOptions = Object.assign({}, this.options);
        Object.assign(this.options, newOpts);
        const changed = !DeepEquals(oldOptions, this.options);
        if (updateUIIfChanged && changed) {
            // wait a moment before calling update, so we don't get a mobx/react warning about updating state during render
            setTimeout(() => this.UpdateUI(), 0);
        }
    }
    Close() {
        RunInAction("BoxController.Close", () => delete store.openBoxStates[this.boxID]);
    }
    PressOK() {
        if (this.options.onOK && this.options.onOK() === false)
            return;
        this.Close();
    }
    PressCancel() {
        if (this.options.onCancel && this.options.onCancel() === false)
            return;
        this.Close();
    }
}
//# sourceMappingURL=MessageBoxState.js.map