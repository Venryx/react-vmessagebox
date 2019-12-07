/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { MessageBoxOptions, BoxController } from "./Structures";
export declare function ShowMessageBox_Base(options: MessageBoxOptions): BoxController;
export declare function ShowMessageBox(options: {
    [P in keyof MessageBoxOptions]?: MessageBoxOptions[P];
}): BoxController;
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
    ComponentWillReceiveProps(props: any): void;
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