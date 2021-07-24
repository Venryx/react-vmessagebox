import { MessageBoxState } from "./Store/MessageBoxState.js";
export declare class MessageBoxStore {
    constructor();
    lastBoxID: number;
    openBoxStates: {
        [key: number]: MessageBoxState;
    };
}
export declare const store: MessageBoxStore;
