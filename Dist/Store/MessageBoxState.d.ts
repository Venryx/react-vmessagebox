/// <reference types="react" />
import { ButtonProps } from "react-vcomponents";
import { voidy } from "../General.js";
export declare class MessageBoxState {
    constructor(initialData: Partial<MessageBoxState>);
    updateCallCount: number;
    options: MessageBoxOptions;
    controller: BoxController;
}
export declare class MessageBoxOptions {
    overlayStyle?: any;
    containerStyle?: any;
    title?: string | (() => JSX.Element);
    titleStyle?: any;
    message?: string | (() => JSX.Element);
    messageStyle?: any;
    okButton: boolean;
    okButtonProps?: ButtonProps;
    onOK?: () => boolean | voidy;
    cancelButton: boolean;
    cancelButtonProps?: ButtonProps;
    cancelOnOverlayClick: boolean;
    onCancel?: () => boolean | voidy;
    extraButtons: (() => JSX.Element);
    buttonBarStyle?: any;
}
export declare class BoxController {
    constructor(options: MessageBoxOptions, boxID: number);
    options: MessageBoxOptions;
    boxID: number;
    UpdateUI(): void;
    Close(): void;
}
