import {observer} from "mobx-react";
import React from "react";
import {AddGlobalStyle, BaseComponent, BaseComponentPlus} from "react-vextensions";
import {MessageBoxUI} from "./MessageBoxUI.js";
import {store} from "./Store.js";

AddGlobalStyle(`
.ReactModal__Overlay { z-index: 1; }
`);

export function AddGlobalKeyListener() {
	document.addEventListener("keydown", e=>{
		let openBoxIDs = Object.keys(store.openBoxStates).map(idStr=>Number(idStr));
		const topDialogID = openBoxIDs.length ? openBoxIDs[openBoxIDs.length - 1] : null;
		const topDialogState = topDialogID ? store.openBoxStates[topDialogID] : null;
		if (topDialogState == null) return;

		if (e.key == "Enter") {
			if (topDialogState.options.okButton && topDialogState.options.okOnEnterKey) {
				topDialogState.controller.PressOK();
			}
		} else if (e.key == "Escape") {
			if (topDialogState.options.cancelButton && topDialogState.options.cancelOnEscapeKey) {
				topDialogState.controller.PressCancel();
			}
		}
	});
}

@observer
export class MessageBoxLayer extends BaseComponent<{}, {}> {
	ComponentWillMount() {
		AddGlobalKeyListener();
	}

	render() {
		let openBoxIDs = Object.keys(store.openBoxStates).map(idStr=>Number(idStr));
		return (
			<>
				{openBoxIDs.map(id=> {
					return <MessageBoxUI key={id} id={id}/>;
				})}
			</>
		);
	}
}