import {runInAction} from "mobx";
import {E} from "./General.js";
import {store} from "./Store.js";
import {BoxController, MessageBoxOptions, MessageBoxState} from "./Store/MessageBoxState.js";

export function ShowMessageBox_Base(options: MessageBoxOptions) {
	let boxID = store.lastBoxID + 1;
	let controller = new BoxController(options, boxID);
	runInAction("ShowMessageBox_Base", ()=> {
		store.openBoxStates[boxID] = new MessageBoxState({options, controller});
		store.lastBoxID = boxID;
	});
	return controller;
}
//export function ShowMessageBox(options: Partial<MessageBoxOptions>) {
export function ShowMessageBox(options: {[P in keyof MessageBoxOptions]?: MessageBoxOptions[P]}) { // do it this way, so the options are shown
	let options_final = E(new MessageBoxOptions(), options) as MessageBoxOptions;
	var boxController = ShowMessageBox_Base(options_final);
	return boxController;
}