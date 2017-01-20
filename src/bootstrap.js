import Vue from 'vue'
import axios from 'axios';
import './bootstrap-theme.js';
import { Component, watch } from 'vue-property-decorator'
import { prop } from 'vue-property-decorator/lib/metadata'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest"
};

Vue.prototype.$http = axios;

window.Vue       = Vue
window.prop      = prop
window.watch     = watch
window.Component = Component

window.state     = State
window.getter    = Getter
window.action    = Action
window.mutation  = Mutation
window.namespace = namespace
