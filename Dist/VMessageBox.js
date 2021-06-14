import { E } from "./General.js";
import { store } from "./Store.js";
import { runInAction } from "mobx";
import { MessageBoxState, MessageBoxOptions, BoxController } from "./Store/MessageBoxState.js";
var React = require("react");
export function ShowMessageBox_Base(options) {
    let boxID = store.lastBoxID + 1;
    let controller = new BoxController(options, boxID);
    runInAction("ShowMessageBox_Base", () => {
        store.openBoxStates[boxID] = new MessageBoxState({ options, controller });
        store.lastBoxID = boxID;
    });
    return controller;
}
//export function ShowMessageBox(options: Partial<MessageBoxOptions>) {
export function ShowMessageBox(options) {
    let options_final = E(new MessageBoxOptions(), options);
    var boxController = ShowMessageBox_Base(options_final);
    return boxController;
}
//# sourceMappingURL=VMessageBox.js.map