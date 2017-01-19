declare type StateTransformer = (state: any, getters: any) => any;
declare interface BindingOptions {
    namespace?: string;
}
declare interface BindingHelper {
    (type: string, options?: BindingOptions): PropertyDecorator;
}
declare interface StateBindingHelper extends BindingHelper {
    (type: StateTransformer, options?: BindingOptions): PropertyDecorator;
}
declare const state: StateBindingHelper;
declare const getter: BindingHelper;
declare const action: BindingHelper;
declare const mutation: BindingHelper;
declare function namespace<T extends BindingHelper>(namespace: string, helper: T): (type: string) => PropertyDecorator;
