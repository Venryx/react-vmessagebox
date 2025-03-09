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
        makeObservable(this);
        Object.assign(this, initialData);
    }
    //id: number;
    updateCallCount = 0;
    options;
    controller;
}
__decorate([
    observable
], MessageBoxState.prototype, "updateCallCount", void 0);
export class MessageBoxOptions {
    overlayStyle;
    containerStyle;
    preRender;
    title;
    titleStyle;
    message;
    messageStyle;
    okButton = true;
    okButtonProps;
    okOnEnterKey = true;
    onOK;
    cancelButton = false;
    cancelButtonProps;
    cancelOnEscapeKey = false;
    cancelOnOverlayClick = false;
    onCancel;
    extraButtons;
    buttonBarStyle;
}
export class BoxController {
    constructor(options, boxID) {
        this.options = options;
        this.boxID = boxID;
    }
    options;
    boxID;
    UpdateUI() {
        RunInAction("BoxController.UpdateUI", () => store.openBoxStates[this.boxID].updateCallCount++);
    }
    /** Options are checked for changes "deeply", ie. newOpts is shallow-merged into a new (interim) value, then deep-compared with old value. */
    UpdateOptions(newOpts, updateUIIfChanged = true) {
        /*const changed = Object.keys(newOpts).some(key=>ShallowChanged(this.options[key], newOpts[key]));
        Object.assign(this.options, newOpts);*/
        const oldOptions = { ...this.options };
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