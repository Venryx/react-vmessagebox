/// <reference types="react" />
import { voidy } from "./General";
import { ButtonProps } from "react-vcomponents";
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
export declare type BoxInfo = {
    id: number;
    options: MessageBoxOptions;
    controller: BoxController;
};
