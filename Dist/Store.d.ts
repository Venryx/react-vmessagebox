import { MessageBoxState } from "./Store/MessageBoxState";
export declare class MessageBoxStore {
    lastBoxID: number;
    openBoxStates: {
        [key: number]: MessageBoxState;
    };
}
export declare const store: MessageBoxStore;
