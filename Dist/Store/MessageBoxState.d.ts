import { FunctionComponent } from "react";
import { ButtonProps } from "react-vcomponents";
import { voidy } from "../General.js";
export declare class MessageBoxState {
    constructor(initialData: Partial<MessageBoxState>);
    updateCallCount: number;
    options: MessageBoxOptions;
    controller: BoxController;
}
declare type n = null;
export declare class MessageBoxOptions {
    overlayStyle?: any | n;
    containerStyle?: any | n;
    title?: string | FunctionComponent | n;
    titleStyle?: any;
    message?: string | FunctionComponent | n;
    messageStyle?: any;
    okButton: boolean;
    okButtonProps?: ButtonProps;
    onOK?: (() => boolean | voidy) | n;
    cancelButton: boolean;
    cancelButtonProps?: ButtonProps | n;
    cancelOnOverlayClick: boolean;
    onCancel?: (() => boolean | voidy) | n;
    extraButtons?: FunctionComponent;
    buttonBarStyle?: any;
}
export declare class BoxController {
    constructor(options: MessageBoxOptions, boxID: number);
    options: MessageBoxOptions;
    boxID: number;
    UpdateUI(): void;
    Close(): void;
}
export {};
