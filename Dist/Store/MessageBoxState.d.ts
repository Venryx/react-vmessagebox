import { FunctionComponent } from "react";
import { ButtonProps } from "react-vcomponents";
import { voidy } from "../General.js";
export declare class MessageBoxState {
    constructor(initialData: Partial<MessageBoxState>);
    updateCallCount: number;
    options: MessageBoxOptions;
    controller: BoxController;
}
type n = null;
export declare class MessageBoxOptions {
    overlayStyle?: any | n;
    containerStyle?: any | n;
    preRender?: (updateCallCount: number) => any;
    title?: string | FunctionComponent<{
        updateCallCount: number;
    }> | n;
    titleStyle?: any;
    message?: string | FunctionComponent<{
        updateCallCount: number;
    }> | n;
    messageStyle?: any;
    okButton: boolean;
    okButtonProps?: ButtonProps;
    okOnEnterKey: boolean;
    onOK?: (() => boolean | voidy) | n;
    cancelButton: boolean;
    cancelButtonProps?: ButtonProps | n;
    cancelOnEscapeKey: boolean;
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
    /** Options are checked for changes "deeply", ie. newOpts is shallow-merged into a new (interim) value, then deep-compared with old value. */
    UpdateOptions(newOpts: Partial<MessageBoxOptions>, updateUIIfChanged?: boolean): void;
    Close(): void;
    PressOK(): void;
    PressCancel(): void;
}
export {};
