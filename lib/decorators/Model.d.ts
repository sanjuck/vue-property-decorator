import { Vue, PropOptions } from 'vue-class-component';
import { Constructor } from '../helpers/metadata';
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
export declare function Model(event?: string, options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;
