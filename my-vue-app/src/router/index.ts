import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "about", path: "/about", component: About },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
