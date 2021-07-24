import {observable, runInAction, makeObservable} from "mobx";
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
	
	title?: string | (()=>JSX.Element)|n;
	titleStyle?: any;

	message?: string | (()=>JSX.Element)|n;
	messageStyle?: any;

	okButton = true;
	okButtonProps?: ButtonProps;
	onOK?: (()=>boolean | voidy)|n;

	cancelButton = false;
	cancelButtonProps?: ButtonProps|n;
	cancelOnOverlayClick = false;
	onCancel?: (()=>boolean | voidy)|n;

	extraButtons: (()=>JSX.Element);
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
}