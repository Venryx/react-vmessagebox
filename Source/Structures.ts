import {voidy} from "./General";

import {Action} from "./Action";
import {store} from "./Store";

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
export class ACTMessageBoxShow extends Action<{boxID: number}> {}
export class ACTMessageBoxUpdate extends Action<{boxID: number, updateInnerUI: boolean}> {}

export class BoxController {
	constructor(options: MessageBoxOptions, boxID: number) {
		this.options = options;
		this.boxID = boxID;
	}
	options: MessageBoxOptions;
	boxID: number;

	UpdateUI(updateInnerUI = true) {
		store.dispatch(new ACTMessageBoxUpdate({boxID: this.boxID, updateInnerUI}));
	}
	Close() {
		store.dispatch(new ACTMessageBoxShow({boxID: null}));
	}
}

export type BoxInfo = {
	id: number;
	options: MessageBoxOptions;
	controller: BoxController;
};