declare type ObjectInjectOptions = Record<string | symbol, string | symbol | {
    from?: string | symbol;
    default?: unknown;
}>;
export declare type ComponentInjectOptions = string[] | ObjectInjectOptions;
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
export interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
export interface Backpack1<Type> {
    add(obj: Type): void;
    get: () => Type;
}
export declare function Inject<T>(options?: ComponentInjectOptions): import("vue-class-component").VueDecorator;
export {};
