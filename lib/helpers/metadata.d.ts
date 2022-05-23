import { Vue, PropOptions } from 'vue-class-component';
export declare type Constructor = {
    new (...args: any[]): any;
};
export declare function applyMetadata(options: PropOptions | Constructor[] | Constructor, target: Vue, key: string): void;
