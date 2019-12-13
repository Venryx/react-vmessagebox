/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { MessageBoxOptions, BoxController } from "./Structures";
export declare function ShowMessageBox_Base(options: MessageBoxOptions): BoxController;
export declare function ShowMessageBox(options: {
    [P in keyof MessageBoxOptions]?: MessageBoxOptions[P];
}): BoxController;
declare const MessageBoxUI_base: (new (..._: any[]) => BaseComponent<{}, {
    offset: {
        x: number;
        y: number;
    };
    lastOpenBoxID: number;
}, unknown>) & {
    renderCount: number;
    lastRenderTime: number;
};
export declare class MessageBoxUI extends MessageBoxUI_base {
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
export {};
