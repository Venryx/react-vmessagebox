/// <reference types="react" />
declare const MessageBoxLayer_base: (new (..._: any[]) => import("react-vextensions").BaseComponent<{}, {}, unknown>) & {
    renderCount: number;
    lastRenderTime: number;
};
export declare class MessageBoxLayer extends MessageBoxLayer_base {
    render(): JSX.Element;
}
export {};
