import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
Vue.use(BootstrapVue);

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  username: localStorage.username,
  recipeProgress: localStorage.recipeProgress,
  mealPlanList: localStorage.mealPlanList,
  mealPlanCounter: localStorage.mealPlanCounter,

  login(username) {
    localStorage.clear();
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  restartMealPlanCounter(mealPlanCounter) {
    // set meal Plan counter
    localStorage.setItem("mealPlanCounter", mealPlanCounter);
    this.mealPlanCounter = mealPlanCounter;
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("recipeProgress");
    localStorage.removeItem("mealPlanList");
    localStorage.removeItem("mealPlanCounter");
    this.username = undefined;
    this.recipeProgress = undefined;
    localStorage.clear();
  },
  saveRecipeProgress(recipeProgress, item) {
    this.recipeProgress = recipeProgress;
    localStorage.setItem(item, JSON.stringify(this.recipeProgress));
    console.log(JSON.parse(localStorage.getItem(item)));
  },
  saveMealPlanList(mealPlanList) {
    localStorage.removeItem("mealPlanList");

    this.mealPlanList = mealPlanList;
    localStorage.setItem("mealPlanList", JSON.stringify(this.mealPlanList));
    console.log("mealPlanList", this.mealPlanList);

    console.log(this.mealPlanCounter);
    let tmpArr = [];
    this.mealPlanList.map((recipe) => {
      if (recipe != null) tmpArr.push(recipe);
    });
    this.mealPlanCounter = tmpArr.length;
    localStorage.setItem("mealPlanCounter", this.mealPlanCounter);
    console.log("mealPlanCounter", this.mealPlanCounter);
  },
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
