/// <reference types="react" />
declare const MessageBoxUI_base: (new (..._: any[]) => import("react-vextensions").BaseComponent<{
    id: number;
}, {
    offset: {
        x: number;
        y: number;
    };
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
