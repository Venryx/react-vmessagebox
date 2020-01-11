var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observer } from "mobx-react";
import React from "react";
import { AddGlobalStyle, BaseComponentPlus } from "react-vextensions";
import { MessageBoxUI } from "./MessageBoxUI";
import { store } from "./Store";
AddGlobalStyle(`
.ReactModal__Overlay { z-index: 1; }
`);
let MessageBoxLayer = class MessageBoxLayer extends BaseComponentPlus({}, {}) {
    render() {
        let openBoxIDs = Object.keys(store.openBoxStates).map(idStr => Number(idStr));
        return (React.createElement(React.Fragment, null, openBoxIDs.map(id => {
            return React.createElement(MessageBoxUI, { key: id, id: id });
        })));
    }
};
MessageBoxLayer = __decorate([
    observer
], MessageBoxLayer);
export { MessageBoxLayer };
//# sourceMappingURL=MessageBoxLayer.js.map