import {observable, runInAction} from "mobx";

export class MessageBoxStore {
	@observable openBoxID: number;
	@observable updateCallCount = 0;
}

export const store = new MessageBoxStore();

/*export function ACTSetOpenBoxID(boxID: number) {
	runInAction("ACTSetOpenBoxID", ()=>{
		store.openBoxID = boxID;
		store.offset = {x: 0, y: 0};
	});
}*/