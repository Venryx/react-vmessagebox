import {observable, runInAction} from "mobx";
import {ButtonProps} from "react-vcomponents";
import {voidy} from "../General";
import {store} from "../Store";

export class MessageBoxState {
	constructor(initialData: Partial<MessageBoxState>) {
		Object.assign(this, initialData);
	}
	//id: number;
	@observable updateCallCount = 0;
	options: MessageBoxOptions;
	controller: BoxController;
}

export class MessageBoxOptions {
	overlayStyle?: any;
	containerStyle?: any;
	
	title?: string | (()=>JSX.Element);
	titleStyle?: any;

	message?: string | (()=>JSX.Element);
	messageStyle?: any;

	okButton = true;
	okButtonProps?: ButtonProps;
	onOK?: ()=>boolean | voidy;

	cancelButton = false;
	cancelButtonProps?: ButtonProps;
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
		runInAction("BoxController.UpdateUI", ()=>store.openBoxStates[this.boxID].updateCallCount++);
	}
	Close() {
		runInAction("BoxController.Close", ()=>delete store.openBoxStates[this.boxID]);
	}
}