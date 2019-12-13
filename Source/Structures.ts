import {voidy} from "./General";

import {store} from "./Store";
import {runInAction} from "mobx";

export class MessageBoxOptions {
	overlayStyle?: any;
	containerStyle?: any;
	
	title?: string | (()=>JSX.Element);
	titleStyle?: any;

	message?: string | (()=>JSX.Element);
	messageStyle?: any;

	okButton = true;
	okButtonClickable = true;
	onOK?: ()=>boolean | voidy;

	cancelButton = false;
	cancelOnOverlayClick = false;
	onCancel?: ()=>boolean | voidy;

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
		runInAction("BoxController.UpdateUI", ()=>store.updateCallCount++);
	}
	Close() {
		runInAction("BoxController.Close", ()=>store.openBoxID = null);
	}
}

export type BoxInfo = {
	id: number;
	options: MessageBoxOptions;
	controller: BoxController;
};