import { createDecorator } from 'vue-class-component';
/**
 * decorator of a expose prop
 */
export function Expose() {
    return createDecorator(function (options, key) {
        (options.expose || (options.expose = [])).push(key);
    });
}
