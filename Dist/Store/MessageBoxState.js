var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, runInAction } from "mobx";
import { store } from "../Store.js";
export class MessageBoxState {
    constructor(initialData) {
        //id: number;
        this.updateCallCount = 0;
        Object.assign(this, initialData);
    }
}
__decorate([
    observable
], MessageBoxState.prototype, "updateCallCount", void 0);
export class MessageBoxOptions {
    constructor() {
        this.okButton = true;
        this.cancelButton = false;
        this.cancelOnOverlayClick = false;
    }
}
export class BoxController {
    constructor(options, boxID) {
        this.options = options;
        this.boxID = boxID;
    }
    UpdateUI() {
        runInAction("BoxController.UpdateUI", () => store.openBoxStates[this.boxID].updateCallCount++);
    }
    Close() {
        runInAction("BoxController.Close", () => delete store.openBoxStates[this.boxID]);
    }
}
//# sourceMappingURL=MessageBoxState.js.map