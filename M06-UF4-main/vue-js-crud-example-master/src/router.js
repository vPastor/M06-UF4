import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/items",
      alias: "/items",
      name: "items",
      component: () => import("./components/ItemsList")
    },
    {
      path: "/items/:id",
      name: "items-details",
      component: () => import("./components/Item")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddItem")
    },
    {
      path: "/market",
      name: "/market",
      alias:"/market",
      component: () => import("./components/ItemsMarketPlace")
    }
  ]
});
