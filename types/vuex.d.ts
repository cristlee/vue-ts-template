declare type Dictionary<T> = { [key: string]: T };

declare function mapState (map: string[]): Dictionary<() => any>;
declare function mapState (namespace: string, map: string[]): Dictionary<() => any>;
declare function mapState (map: Dictionary<string>): Dictionary<() => any>;
declare function mapState (namespace: string, map: Dictionary<string>): Dictionary<() => any>;
declare function mapState <S>(
  map: Dictionary<(this: typeof Vue, state: S, getters: any) => any>
): Dictionary<() => any>;
declare function mapState <S>(
  namespace: string,
  map: Dictionary<(this: typeof Vue, state: S, getters: any) => any>
): Dictionary<() => any>;

declare type MutationMethod = (...args: any[]) => void;
declare function mapMutations (map: string[]): Dictionary<MutationMethod>;
declare function mapMutations (namespace: string, map: string[]): Dictionary<MutationMethod>;
declare function mapMutations (map: Dictionary<string>): Dictionary<MutationMethod>;
declare function mapMutations (namespace: string, map: Dictionary<string>): Dictionary<MutationMethod>;

declare function mapGetters (map: string[]): Dictionary<() => any>;
declare function mapGetters (namespace: string, map: string[]): Dictionary<() => any>;
declare function mapGetters (map: Dictionary<string>): Dictionary<() => any>;
declare function mapGetters (namespace: string, map: Dictionary<string>): Dictionary<() => any>;

declare type ActionMethod = (...args: any[]) => Promise<any[]>;
declare function mapActions (map: string[]): Dictionary<ActionMethod>;
declare function mapActions (namespace: string, map: string[]): Dictionary<ActionMethod>;
declare function mapActions (map: Dictionary<string>): Dictionary<ActionMethod>;
declare function mapActions (namespace: string, map: Dictionary<string>): Dictionary<ActionMethod>;



declare class Store<S> {
  constructor(options: StoreOptions<S>);

  readonly state: S;
  readonly getters: any;

  replaceState(state: S): void;

  dispatch: Dispatch;
  commit: Commit;

  subscribe<P extends Payload>(fn: (mutation: P, state: S) => any): () => void;
  watch<T>(getter: (state: S) => T, cb: (value: T, oldValue: T) => void, options?: WatchOptions): void;

  registerModule<T>(path: string, module: Module<T, S>): void;
  registerModule<T>(path: string[], module: Module<T, S>): void;

  unregisterModule(path: string): void;
  unregisterModule(path: string[]): void;

  hotUpdate(options: {
    actions?: ActionTree<S, S>;
    mutations?: MutationTree<S>;
    getters?: GetterTree<S, S>;
    modules?: ModuleTree<S>;
  }): void;
}

declare function install(Vue: typeof _Vue): void;

declare interface Dispatch {
  (type: string, payload?: any, options?: DispatchOptions): Promise<any[]>;
  <P extends Payload>(payloadWithType: P, options?: DispatchOptions): Promise<any[]>;
}

declare interface Commit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

declare interface ActionContext<S, R> {
  dispatch: Dispatch;
  commit: Commit;
  state: S;
  getters: any;
  rootState: R;
  rootGetters: any;
}

declare interface Payload {
  type: string;
}

declare interface DispatchOptions {
  root?: boolean;
}

declare interface CommitOptions {
  silent?: boolean;
  root?: boolean;
}

declare interface StoreOptions<S> {
  state?: S;
  getters?: GetterTree<S, S>;
  actions?: ActionTree<S, S>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<S>;
  plugins?: StorePlugin<S>[];
  strict?: boolean;
}

declare type Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;
declare type Action<S, R> = (injectee: ActionContext<S, R>, payload: any) => any;
declare type Mutation<S> = (state: S, payload: any) => any;
declare type StorePlugin<S> = (store: Store<S>) => any;

declare interface Module<S, R> {
  namespaced?: boolean;
  state?: S;
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}

declare interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}

declare interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}

declare interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

declare interface ModuleTree<R> {
  [key: string]: Module<any, R>;
}
