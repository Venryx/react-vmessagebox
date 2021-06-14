import { BoxController, MessageBoxOptions } from "./Store/MessageBoxState.js";
export declare function ShowMessageBox_Base(options: MessageBoxOptions): BoxController;
export declare function ShowMessageBox(options: {
    [P in keyof MessageBoxOptions]?: MessageBoxOptions[P];
}): BoxController;
