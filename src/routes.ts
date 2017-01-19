import Vue = require("vue");
import VueRouter = require("vue-router");
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home }
];

export default new VueRouter({ routes });