import { store } from "./Store";
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
        store.updateCallCount++;
    }
    Close() {
        store.openBoxID = null;
    }
}
//# sourceMappingURL=Structures.js.map