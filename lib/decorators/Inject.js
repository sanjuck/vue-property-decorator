import { createDecorator } from 'vue-class-component';
export function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = options || [key];
        }
    });
}
/*

export function inject<T>(
  key: InjectionKey<T> | string,
  defaultValue: T | (() => T),
  treatDefaultAsFactory: true
): T


  OLD VUE
****************************************************************************
export type InjectKey = string | symbol;

export type InjectOptions = {
  [key: string]: InjectKey | { from?: InjectKey, default?: any }
} | string[];

  NEW VUE
****************************************************************************


declare type ComponentInjectOptions = string[] | ObjectInjectOptions;


*/ 
