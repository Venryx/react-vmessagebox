import { BaseComponent } from "react-vextensions";
import { voidy } from "./General";
import Action from "./Action";
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
export declare function ShowMessageBox_Base(options: MessageBoxOptions): BoxController;
export declare function ShowMessageBox(options: {
    [P in keyof MessageBoxOptions]?: MessageBoxOptions[P];
}): BoxController;
export declare class MessageBoxState {
    openBoxID: number;
    updateCallCount: number;
}
export declare function MessageBoxReducer(state: MessageBoxState, action: Action<any>): {
    openBoxID: any;
    updateCallCount: number;
};
export declare class MessageBoxUI extends BaseComponent<{} & Partial<{
    openBoxID: number;
    updateCallCount: number;
}>, {
    offset: {
        x: number;
        y: number;
    };
}> {
    static defaultState: {
        offset: {
            x: number;
            y: number;
        };
    };
    moveBar_drag_origOffset: {
        x: number;
        y: number;
    };
    moveBar_drag_mouseDownPos: {
        x: number;
        y: number;
    };
    moveBar_drag_mouseMoveListener: EventListener;
    moveBar_drag_mouseUpListener: EventListener;
    render(): JSX.Element;
}
