var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable } from "mobx";
export class MessageBoxStore {
    constructor() {
        this.updateCallCount = 0;
    }
}
__decorate([
    observable
], MessageBoxStore.prototype, "openBoxID", void 0);
__decorate([
    observable
], MessageBoxStore.prototype, "updateCallCount", void 0);
export const store = new MessageBoxStore();
/*export function ACTSetOpenBoxID(boxID: number) {
    runInAction("ACTSetOpenBoxID", ()=>{
        store.openBoxID = boxID;
        store.offset = {x: 0, y: 0};
    });
}*/ 
//# sourceMappingURL=Store.js.map