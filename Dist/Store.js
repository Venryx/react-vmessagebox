import { observable } from "mobx";
export class MessageBoxStore {
    lastBoxID = 0;
    @observable
    accessor openBoxStates = {};
}
export const store = new MessageBoxStore();
/*export function ACTSetOpenBoxID(boxID: number) {
    RunInAction("ACTSetOpenBoxID", ()=>{
        store.openBoxID = boxID;
        store.offset = {x: 0, y: 0};
    });
}*/ 
//# sourceMappingURL=Store.js.map