import {observable, runInAction, makeObservable} from "mobx";
import {deepEqual} from "mobx/dist";
import {FunctionComponent} from "react";
import {ButtonProps} from "react-vcomponents";
import {ShallowChanged} from "react-vextensions";
import {voidy, RunInAction, DeepEquals} from "../General.js";
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
	/** Options are checked for changes "deeply", ie. newOpts is shallow-merged into a new (interim) value, then deep-compared with old value. */
	UpdateOptions(newOpts: Partial<MessageBoxOptions>, updateUIIfChanged = true) {
		/*const changed = Object.keys(newOpts).some(key=>ShallowChanged(this.options[key], newOpts[key]));
		Object.assign(this.options, newOpts);*/
		const oldOptions = {...this.options};
		Object.assign(this.options, newOpts);
		const changed = !DeepEquals(oldOptions, this.options);
		if (updateUIIfChanged && changed) {
			// wait a moment before calling update, so we don't get a mobx/react warning about updating state during render
			setTimeout(()=>this.UpdateUI(), 0);
		}
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