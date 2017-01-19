declare type VueClass = {
    new (): Vue;
} & typeof Vue;

declare function VueClassComponent<U extends Vue>(options: ComponentOptions<U>): <V extends VueClass>(target: V) => V;
declare function VueClassComponent<V extends VueClass>(target: V): V;
declare namespace VueClassComponent {
    function registerHooks(keys: string[]): void;
}
declare const Component: typeof VueClassComponent;

/**
 * decorator of a prop
 * @param  {PropOption}        options the option for the prop
 * @return {PropertyDecorator}         PropertyDecorator
 */
declare function prop(options: (PropOptions | {
    new (...args: any[]): any;
})): PropertyDecorator;
/**
 * decorator of a watch function
 * @param  {string}            path the path or the expression to observe
 * @param  {WatchOption}       WatchOption
 * @return {MethodDecorator}      MethodDecorator
 */
declare function watch(path: string, options?: WatchOptions): MethodDecorator;
