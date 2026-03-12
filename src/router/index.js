import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/EventList/index.vue"),
  },
  {
    path: "/event/:id",
    name: "detail",
    component: () => import("@/views/EventDetail/index.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/CreateEvent/index.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("@/views/EditEvent/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
