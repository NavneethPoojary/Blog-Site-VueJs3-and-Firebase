import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import CreateBlog from "../views/CreateBlog.vue";
import Details from "../views/Details.vue";
import Edit from "../views/Edit.vue";
//route guards
import { projectAuth } from "../firebase/config";

const needsAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next("/signup");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: needsAuth,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/create",
    name: "CreateBlog",
    component: CreateBlog,
    beforeEnter: needsAuth,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
    props: true,
    beforeEnter: needsAuth,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
    props: true,
    beforeEnter: needsAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
