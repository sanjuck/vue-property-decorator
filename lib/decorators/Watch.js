var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createDecorator } from 'vue-class-component';
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  watchOptions
 */
export function Watch(path, watchOptions) {
    if (watchOptions === void 0) { watchOptions = {}; }
    return createDecorator(function (componentOptions, handler) {
        componentOptions.watch || (componentOptions.watch = Object.create(null));
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push(__assign({ handler: handler }, watchOptions));
    });
}
