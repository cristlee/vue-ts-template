declare type VueClass = {
    new (): Vue;
} & typeof Vue;

declare function VueClassComponent<U extends Vue>(options: ComponentOptions<U>): <V extends VueClass>(target: V) => V;
declare function VueClassComponent<V extends VueClass>(target: V): V;
declare namespace VueClassComponent {
    function registerHooks(keys: string[]): void;
}

/**
 * decorator of a prop
 * @param  {PropOption}        options the option for the prop
 * @return {PropertyDecorator}         PropertyDecorator
 */
declare function Prop(target: Vue, key: string): void;
declare function Prop(target?: (PropOptions | Constructor[])): PropertyDecorator;
/**
 * decorator of a watch function
 * @param  {string}            path the path or the expression to observe
 * @param  {WatchOption}       WatchOption
 * @return {MethodDecorator}      MethodDecorator
 */
declare function Watch(path: string, options?: WatchOptions): MethodDecorator;

declare const prop: typeof Prop;
declare const watch: typeof Watch;
declare const Component: typeof VueClassComponent;