/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { MessageBoxOptions, BoxController } from "./Structures";
export declare function ShowMessageBox_Base(options: MessageBoxOptions): BoxController;
export declare function ShowMessageBox(options: {
    [P in keyof MessageBoxOptions]?: MessageBoxOptions[P];
}): BoxController;
export declare class MessageBoxUI extends BaseComponent<{}, {}> {
    render(): JSX.Element;
}
