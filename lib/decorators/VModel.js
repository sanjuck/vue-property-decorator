import { createDecorator } from 'vue-class-component';
/**
 * decorator for capturings v-model binding to component
 * @param options the options for the prop
 */
export function VModel(options) {
    if (options === void 0) { options = {}; }
    var valueKey = 'modelValue';
    return createDecorator(function (componentOptions, key) {
        ;
        (componentOptions.emits || (componentOptions.emits = [])).push('update:' + valueKey);
        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;
        (componentOptions.computed || (componentOptions.computed = {}))[key] = {
            get: function () {
                return this[valueKey];
            },
            set: function (value) {
                this.$emit('update:' + valueKey, value);
            },
        };
    });
}
