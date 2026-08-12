import {observable} from "mobx";
import {MessageBoxState} from "./Store/MessageBoxState.js";

export class MessageBoxStore {
	lastBoxID = 0;
	@observable accessor openBoxStates = {} as {[key: number]: MessageBoxState};
}

export const store = new MessageBoxStore();

/*export function ACTSetOpenBoxID(boxID: number) {
	RunInAction("ACTSetOpenBoxID", ()=>{
		store.openBoxID = boxID;
		store.offset = {x: 0, y: 0};
	});
}*/