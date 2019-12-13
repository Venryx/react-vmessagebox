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
//# sourceMappingURL=General.js.map