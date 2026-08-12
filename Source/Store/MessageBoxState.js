var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { observable } from "mobx";
import { RunInAction, DeepEquals } from "../General.js";
import { store } from "../Store.js";
let MessageBoxState = (() => {
    let _updateCallCount_decorators;
    let _updateCallCount_initializers = [];
    let _updateCallCount_extraInitializers = [];
    return class MessageBoxState {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _updateCallCount_decorators = [observable];
            __esDecorate(this, null, _updateCallCount_decorators, { kind: "accessor", name: "updateCallCount", static: false, private: false, access: { has: obj => "updateCallCount" in obj, get: obj => obj.updateCallCount, set: (obj, value) => { obj.updateCallCount = value; } }, metadata: _metadata }, _updateCallCount_initializers, _updateCallCount_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        constructor(initialData) {
            Object.assign(this, initialData);
        }
        #updateCallCount_accessor_storage = __runInitializers(this, _updateCallCount_initializers, 0);
        //id: number;
        get updateCallCount() { return this.#updateCallCount_accessor_storage; }
        set updateCallCount(value) { this.#updateCallCount_accessor_storage = value; }
        options = __runInitializers(this, _updateCallCount_extraInitializers);
        controller;
    };
})();
export { MessageBoxState };
export class MessageBoxOptions {
    overlayStyle;
    containerStyle;
    preRender;
    title;
    titleStyle;
    message;
    messageStyle;
    okButton = true;
    okButtonProps;
    okOnEnterKey = true;
    onOK;
    cancelButton = false;
    cancelButtonProps;
    cancelOnEscapeKey = false;
    cancelOnOverlayClick = false;
    onCancel;
    extraButtons;
    buttonBarStyle;
}
export class BoxController {
    constructor(options, boxID) {
        this.options = options;
        this.boxID = boxID;
    }
    options;
    boxID;
    UpdateUI() {
        RunInAction("BoxController.UpdateUI", () => store.openBoxStates[this.boxID].updateCallCount++);
    }
    /** Options are checked for changes "deeply", ie. newOpts is shallow-merged into a new (interim) value, then deep-compared with old value. */
    UpdateOptions(newOpts, updateUIIfChanged = true) {
        /*const changed = Object.keys(newOpts).some(key=>ShallowChanged(this.options[key], newOpts[key]));
        Object.assign(this.options, newOpts);*/
        const oldOptions = { ...this.options };
        Object.assign(this.options, newOpts);
        const changed = !DeepEquals(oldOptions, this.options);
        if (updateUIIfChanged && changed) {
            // wait a moment before calling update, so we don't get a mobx/react warning about updating state during render
            setTimeout(() => this.UpdateUI(), 0);
        }
    }
    Close() {
        RunInAction("BoxController.Close", () => delete store.openBoxStates[this.boxID]);
    }
    PressOK() {
        if (this.options.onOK && this.options.onOK() === false)
            return;
        this.Close();
    }
    PressCancel() {
        if (this.options.onCancel && this.options.onCancel() === false)
            return;
        this.Close();
    }
}
