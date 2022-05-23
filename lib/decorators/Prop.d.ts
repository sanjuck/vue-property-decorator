import { Vue, PropOptions } from 'vue-class-component';
import { Constructor } from '../helpers/metadata';
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
export declare function Prop(options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;
