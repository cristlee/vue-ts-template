import Vue from 'vue'
import { Component, prop, watch } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

window.Vue       = Vue
window.prop      = prop
window.watch     = watch
window.Component = Component

window.state     = State
window.getter    = Getter
window.action    = Action
window.mutation  = Mutation
window.namespace = namespace