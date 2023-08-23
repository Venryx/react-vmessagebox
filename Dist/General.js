import { runInAction } from "mobx";
export function E(e1, e2, e3, e4, e5, e6, e7, e8) {
    var result = {};
    for (var extend of arguments)
        result.Extend(extend);
    return result;
    //return StyleSheet.create(result);
}
export function ToJSON(obj) { return JSON.stringify(obj); }
export function FromJSON(json) { return JSON.parse(json); }
export function RemoveDuplicates(items) {
    var result = [];
    for (let item of items) {
        if (result.indexOf(item) == -1) {
            result.push(item);
        }
    }
    return result;
}
export function Assert(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    //console.log(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    debugger;
    throw new Error("Assert failed) " + message);
}
export function AssertWarn(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    console.warn(`Assert-warn failed) ${message}\n\nStackTrace)`); // ${GetStackTraceStr()}`);
}
export function RunInAction(name, action) {
    Object.defineProperty(action, "name", { value: name });
    return runInAction(action);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function DeepEquals(x, y, keyCheckLayersLeft = -1) {
    // fast route: if values are identical, return true
    if (Object.is(x, y))
        return true;
    // values are non-identical; so if one is a primitive or null/undefined, they can't be equal, thus return false
    if (typeof x !== "object" || x == null || typeof y !== "object" || y == null)
        return false;
    // special case (since it's the one "json relevant" object-type): if only one value is an array, consider them non-equal, thus return false
    if (Array.isArray(x) != Array.isArray(y))
        return false;
    // values are non-identical objects; so if we've reached the key-check layer-limit, return false
    if (keyCheckLayersLeft == 0)
        return false;
    // check for differences in the objects' field-names and field-values; if any such difference is found, return false
    // NOTE: Objects.keys() excludes non-enumerable properties; to include them, use Object.getOwnPropertyNames() instead
    const xKeys = Object.keys(x), yKeys = Object.keys(y);
    if (xKeys.length != yKeys.length)
        return false;
    for (const key of xKeys) {
        //if (!(key in y)) return false;
        //if (!y.hasOwnProperty(key)) return false;
        if (!hasOwnProperty.call(y, key))
            return false;
        if (!DeepEquals(x[key], y[key], keyCheckLayersLeft - 1))
            return false;
    }
    // none of the checks found a difference, so the objects must be equal
    return true;
}
//# sourceMappingURL=General.js.map