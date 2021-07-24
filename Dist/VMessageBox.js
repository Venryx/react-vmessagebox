import { E, RunInAction } from "./General.js";
import { store } from "./Store.js";
import { BoxController, MessageBoxOptions, MessageBoxState } from "./Store/MessageBoxState.js";
export function ShowMessageBox_Base(options) {
    let boxID = store.lastBoxID + 1;
    let controller = new BoxController(options, boxID);
    // wait a tick before adding message-box entry to store; this allows caller to assign to a "boxController" variable prior to message-box-ui rendering (which may try to access that "boxController" var)
    setTimeout(() => {
        RunInAction("ShowMessageBox_Base", () => {
            store.openBoxStates[boxID] = new MessageBoxState({ options, controller });
            store.lastBoxID = boxID;
        });
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