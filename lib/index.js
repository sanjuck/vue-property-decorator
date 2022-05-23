import { mixins, Vue } from 'vue-class-component';
export function Component(options) {
    return function (Component) {
        Component.__o = options;
        return Component;
    };
}
export { Vue, mixins as Mixins };
export { Emit } from './decorators/Emit';
export { Inject } from './decorators/Inject';
export { InjectReactive } from './decorators/InjectReactive';
export { Model } from './decorators/Model';
export { ModelSync } from './decorators/ModelSync';
export { Prop } from './decorators/Prop';
export { PropSync } from './decorators/PropSync';
export { Provide } from './decorators/Provide';
export { ProvideReactive } from './decorators/ProvideReactive';
export { Ref } from './decorators/Ref';
export { VModel } from './decorators/VModel';
export { Watch } from './decorators/Watch';
export { Expose } from './decorators/Expose';
