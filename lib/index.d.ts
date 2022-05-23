/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
// import { ComponentOptions } from 'vue';
import { mixins, Vue, VueBase, VueConstructor, Options as Component } from 'vue-class-component';
// export declare function Component<V extends Vue>(options: ComponentOptions & ThisType<V>): <VC extends VueConstructor<VueBase>>(target: VC) => VC;
export { Vue, mixins as Mixins, Component };
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
