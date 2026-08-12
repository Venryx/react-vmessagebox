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
let MessageBoxStore = (() => {
    let _openBoxStates_decorators;
    let _openBoxStates_initializers = [];
    let _openBoxStates_extraInitializers = [];
    return class MessageBoxStore {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _openBoxStates_decorators = [observable];
            __esDecorate(this, null, _openBoxStates_decorators, { kind: "accessor", name: "openBoxStates", static: false, private: false, access: { has: obj => "openBoxStates" in obj, get: obj => obj.openBoxStates, set: (obj, value) => { obj.openBoxStates = value; } }, metadata: _metadata }, _openBoxStates_initializers, _openBoxStates_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        lastBoxID = 0;
        #openBoxStates_accessor_storage = __runInitializers(this, _openBoxStates_initializers, {});
        get openBoxStates() { return this.#openBoxStates_accessor_storage; }
        set openBoxStates(value) { this.#openBoxStates_accessor_storage = value; }
        constructor() {
            __runInitializers(this, _openBoxStates_extraInitializers);
        }
    };
})();
export { MessageBoxStore };
export const store = new MessageBoxStore();
/*export function ACTSetOpenBoxID(boxID: number) {
    RunInAction("ACTSetOpenBoxID", ()=>{
        store.openBoxID = boxID;
        store.offset = {x: 0, y: 0};
    });
}*/ 
