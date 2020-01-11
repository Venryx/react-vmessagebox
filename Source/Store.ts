import {observable, runInAction} from "mobx";
import {MessageBoxState} from "./Store/MessageBoxState";

export class MessageBoxStore {
	lastBoxID = 0;
	@observable openBoxStates = {} as {[key: number]: MessageBoxState};
}

export const store = new MessageBoxStore();

/*export function ACTSetOpenBoxID(boxID: number) {
	runInAction("ACTSetOpenBoxID", ()=>{
		store.openBoxID = boxID;
		store.offset = {x: 0, y: 0};
	});
}*/