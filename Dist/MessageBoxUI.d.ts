import React from "react";
export declare const MessageBoxUI_styles: {
    overlay: {
        position: string;
        left: number;
        right: number;
        top: number;
        bottom: number;
        display: string;
        alignItems: string;
        justifyContent: string;
        backgroundColor: string;
    };
    container: {
        overflow: string;
        position: string;
        left: string;
        right: string;
        top: string;
        bottom: string;
        background: string;
        border: string;
        WebkitOverflowScrolling: string;
        borderRadius: string;
        outline: string;
        padding: number;
    };
    title: {
        padding: string;
        background: string;
        cursor: string;
        fontSize: string;
        fontWeight: string;
        whiteSpace: string;
        border: string;
        borderWidth: string;
        position: string;
        width: string;
        overflow: string;
    };
    message: {
        marginTop: number;
        padding: string;
    };
    buttonBar: {
        marginLeft: number;
        marginBottom: number;
        marginRight: number;
    };
};
export declare const MessageBoxUI: (props: {
    id: number;
}) => React.JSX.Element;
