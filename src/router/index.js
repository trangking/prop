import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import todo from "../views/todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo",
    name: "Todo",
    component: todo,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
