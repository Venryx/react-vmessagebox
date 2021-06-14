import {BaseComponent, AddGlobalStyle, BaseComponentPlus} from "react-vextensions";
import Modal from "react-modal";
import {Button} from "react-vcomponents";
import { voidy, E } from "./General.js";
import {store} from "./Store.js";
//import React from "react";
import {observer} from "mobx-react";
import {runInAction} from "mobx";
import {MessageBoxState, MessageBoxOptions, BoxController} from "./Store/MessageBoxState.js";

declare var require;
var React = require("react");

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