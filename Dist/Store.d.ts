import { MessageBoxState } from "./Store/MessageBoxState.js";
export declare class MessageBoxStore {
    lastBoxID: number;
    accessor openBoxStates: {
        [key: number]: MessageBoxState;
    };
}
export declare const store: MessageBoxStore;
