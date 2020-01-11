import {observer} from "mobx-react";
import React from "react";
import {AddGlobalStyle, BaseComponentPlus} from "react-vextensions";
import {MessageBoxUI} from "./MessageBoxUI";
import {store} from "./Store";

AddGlobalStyle(`
.ReactModal__Overlay { z-index: 1; }
`);

@observer
export class MessageBoxLayer extends BaseComponentPlus({}, {}) {
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