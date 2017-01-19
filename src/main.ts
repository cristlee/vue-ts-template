import "./bootstrap.js";
import Vue = require("vue");
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import { sync } from "vuex-router-sync";

sync(store, router);

new Vue({
    el: "#application",
    router, store,
    render: h => h(App),
});
