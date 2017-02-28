import {
  Vue as _Vue,
  Mix as _Mix,
  prop as _prop,
  Mixin as _Mixin,
  watch as _watch,
  state as _state,
  getter as _getter,
  action as _action,
  filter as _filter,
  mutation as _mutation,
  resultOf as _resultOf,
  lifecycle as _lifecycle,
  Component as _Component,
} from 'vue-typescript-decorators'

declare global {
  const Vue: typeof _Vue
  const Mix: typeof _Mix
  const prop: typeof _prop
  const Mixin: typeof _Mixin
  const watch: typeof _watch
  const state: typeof _state
  const getter: typeof _getter
  const action: typeof _action
  const filter: typeof _filter
  const mutation: typeof _mutation
  const resultOf: typeof _resultOf
  const lifecycle: typeof _lifecycle
  const Component: typeof _Component
}