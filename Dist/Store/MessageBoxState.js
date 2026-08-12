import { observable } from "mobx";
import { RunInAction, DeepEquals } from "../General.js";
import { store } from "../Store.js";
export class MessageBoxState {
    constructor(initialData) {
        Object.assign(this, initialData);
    }
    //id: number;
    @observable
    accessor updateCallCount = 0;
    options;
    controller;
}
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