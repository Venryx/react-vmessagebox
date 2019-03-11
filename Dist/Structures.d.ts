/// <reference types="react" />
import { voidy } from "./General";
import { Action } from "./Action";
export declare class MessageBoxOptions {
    overlayStyle?: any;
    containerStyle?: any;
    title?: string | (() => JSX.Element);
    titleStyle?: any;
    message?: string | (() => JSX.Element);
    messageStyle?: any;
    okButton: boolean;
    okButtonClickable: boolean;
    onOK?: () => boolean | voidy;
    cancelButton: boolean;
    cancelOnOverlayClick: boolean;
    onCancel?: () => boolean | voidy;
    buttonBarStyle?: any;
}
export declare class ACTMessageBoxShow extends Action<{
    boxID: number;
}> {
}
export declare class ACTMessageBoxUpdate extends Action<{
    boxID: number;
    updateInnerUI: boolean;
}> {
}
export declare class BoxController {
    constructor(options: MessageBoxOptions, boxID: number);
    options: MessageBoxOptions;
    boxID: number;
    UpdateUI(updateInnerUI?: boolean): void;
    Close(): void;
}
export declare type BoxInfo = {
    id: number;
    options: MessageBoxOptions;
    controller: BoxController;
};
