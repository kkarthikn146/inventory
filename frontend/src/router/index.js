import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import MainForm from "../components/MainForm.vue";
import QuickLinks from "../components/QuickLinks.vue";
import RowData from "../components/RowData.vue";
import FetchInvestigationPageFields from "../components/FetchInvestigationPageFields.vue";
import MyForm from "../components/MyForm.vue";
import Parent from "../components/Parent.vue";
import TwowayStore from "../components/TwowayStore.vue";
import DynamicForm from "../components/DynamicForm.vue";
import Mixins from "../components/Mixins.vue";
import DynamicComponent from "../components/DynamicComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/homepage",
    name: "MainForm",
    component: MainForm,
  },
  {
    path: "/quicklinks",
    name: "QuickLinks",
    component: QuickLinks,
  },
  {
    path: "/rowdata/:data",
    name: "RowData",
    component: RowData,
  },
  {
    path: "/fetchfields",
    name: "FetchInvestigationPageFields",
    component: FetchInvestigationPageFields,
  },
  {
    path: "/myform",
    name: "MyForm",
    component: MyForm,
  },
  {
    path: "/parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/twowaystore",
    name: "TwowayStore",
    component: TwowayStore,
  },
  {
    path: "/dynamicform",
    name: "DynamicForm",
    component: DynamicForm,
  },
  {
    path: "/mixins",
    name: "Mixins",
    component: Mixins,
  },
  {
    path: "/dynamiccomponent",
    name: "DynamicComponent",
    component: DynamicComponent,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
