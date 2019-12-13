import { store } from "./Store";
import { runInAction } from "mobx";
export class MessageBoxOptions {
    constructor() {
        this.okButton = true;
        this.okButtonClickable = true;
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
        runInAction("BoxController.UpdateUI", () => store.updateCallCount++);
    }
    Close() {
        runInAction("BoxController.Close", () => store.openBoxID = null);
    }
}
//# sourceMappingURL=Structures.js.map