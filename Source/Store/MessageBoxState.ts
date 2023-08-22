import {observable, runInAction, makeObservable} from "mobx";
import {FunctionComponent} from "react";
import {ButtonProps} from "react-vcomponents";
import {voidy, RunInAction} from "../General.js";
import {store} from "../Store.js";

export class MessageBoxState {
	constructor(initialData: Partial<MessageBoxState>) {
		makeObservable(this);
		Object.assign(this, initialData);
	}
	//id: number;
	@observable updateCallCount = 0;
	options: MessageBoxOptions;
	controller: BoxController;
}

type n = null;
export class MessageBoxOptions {
	overlayStyle?: any|n;
	containerStyle?: any|n;

	preRender?: (updateCallCount: number)=>any;
	
	title?: string | FunctionComponent<{updateCallCount: number}> |n;
	titleStyle?: any;

	message?: string | FunctionComponent<{updateCallCount: number}> |n;
	messageStyle?: any;

	okButton = true;
	okButtonProps?: ButtonProps;
	okOnEnterKey = true;
	onOK?: (()=>boolean | voidy)|n;

	cancelButton = false;
	cancelButtonProps?: ButtonProps|n;
	cancelOnEscapeKey = false;
	cancelOnOverlayClick = false;
	onCancel?: (()=>boolean | voidy)|n;

	extraButtons?: FunctionComponent;
	buttonBarStyle?: any;
}

export class BoxController {
	constructor(options: MessageBoxOptions, boxID: number) {
		this.options = options;
		this.boxID = boxID;
	}
	options: MessageBoxOptions;
	boxID: number;

	UpdateUI() { //updateInnerUI = true) {
		RunInAction("BoxController.UpdateUI", ()=>store.openBoxStates[this.boxID].updateCallCount++);
	}
	Close() {
		RunInAction("BoxController.Close", ()=>delete store.openBoxStates[this.boxID]);
	}

	PressOK() {
		if (this.options.onOK && this.options.onOK() === false) return;
		this.Close();
	}
	PressCancel() {
		if (this.options.onCancel && this.options.onCancel() === false) return;
		this.Close();
	}
}