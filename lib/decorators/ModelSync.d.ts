import { Vue, PropOptions } from 'vue-class-component';
import { Constructor } from '../helpers/metadata';
/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
export declare function ModelSync(propName: string, event?: string, options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;
