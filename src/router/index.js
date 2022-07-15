import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PhotoView from "../views/PhotoView.vue";

// Admin Views
import HomeAdminView from "../views/Admin/HomeView.vue";
import AdminCategoriesView from "../views/Admin/CategoriesView.vue";
import AdminUsersView from "../views/Admin/UsersView.vue";
import AdminPhotosView from "../views/Admin/PhotosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/photos/:id",
    name: "photos",
    component: PhotoView,
  },
  {
    path: "/admin",
    name: "admin",
    component: HomeAdminView,
  },
  {
    path: "/admin/categories",
    name: "AdminCategoriesView",
    component: AdminCategoriesView,
  },
  {
    path: "/admin/users",
    name: "AdminUsersView",
    component: AdminUsersView,
  },
  {
    path: "/admin/photos",
    name: "AdminPhotosView",
    component: AdminPhotosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
