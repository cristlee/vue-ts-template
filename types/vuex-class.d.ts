declare type VuexDecorator = <V extends Vue>(proto: V, key: string) => void;
declare type StateTransformer = (state: any, getters: any) => any;
declare type MapHelper = typeof mapState | typeof mapGetters | typeof mapActions | typeof mapMutations;
declare interface BindingOptions {
    namespace?: string;
}
declare interface BindingHelper {
    <V extends Vue>(proto: V, key: string): void;
    (type: string, options?: BindingOptions): VuexDecorator;
}
declare interface StateBindingHelper extends BindingHelper {
    (type: StateTransformer, options?: BindingOptions): VuexDecorator;
}
declare const State: StateBindingHelper;
declare const Getter: BindingHelper;
declare const Action: BindingHelper;
declare const Mutation: BindingHelper;
declare function namespace<T extends BindingHelper>(namespace: string, helper: T): T;

declare const state: typeof State;
declare const getter: typeof Getter;
declare const action: typeof Action;
declare const mutation: typeof Mutation;