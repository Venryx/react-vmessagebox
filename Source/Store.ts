import {observable} from "mobx";

export class MessageBoxStore {
	@observable openBoxID: number;
	@observable updateCallCount = 0;
}

export const store = new MessageBoxStore();