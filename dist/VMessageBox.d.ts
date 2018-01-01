import { BaseComponent } from "react-vextensions";
import { voidy } from "./General";
import Action from "./Action";
export declare class MessageBoxOptions {
    title?: string;
    titleUI?: () => JSX.Element;
    message?: string;
    messageUI?: () => JSX.Element;
    okButton: boolean;
    okButtonClickable: boolean;
    cancelButton: boolean;
    cancelOnOverlayClick: boolean;
    overlayStyle?: any;
    containerStyle?: any;
    onOK?: () => boolean | voidy;
    onCancel?: () => boolean | voidy;
    ui: () => JSX.Element;
    boxID: number;
}
export declare class ACTMessageBoxShow extends Action<MessageBoxOptions> {
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
export declare function ShowMessageBox_Base(o: MessageBoxOptions): BoxController;
export declare function ShowMessageBox(options: {
    [P in keyof MessageBoxOptions]?: MessageBoxOptions[P];
}): BoxController;
export declare class MessageBoxState {
    openOptions: MessageBoxOptions;
}
export declare function MessageBoxReducer(state: MessageBoxState, action: Action<any>): {
    openOptions: any;
};
export declare class MessageBoxUI extends BaseComponent<{} & Partial<{
    options: MessageBoxOptions;
}>, {}> {
    lastInnerUIResult: any;
    render(): JSX.Element;
}
