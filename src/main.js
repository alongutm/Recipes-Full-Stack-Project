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
  searchResults: sessionStorage.searchResults,

  login(username) {
    localStorage.clear();
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    let searchResultsEmpty = [];
    sessionStorage.setItem("searchResults",searchResultsEmpty);

    // set meal Plan counter
    this.mealPlanCounter = 0;
    localStorage.setItem("mealPlanCounter", mealPlanCounter);
  },
  logout() {
    console.log("logout");
    this.searchResults = null;
    localStorage.removeItem("username");
    localStorage.removeItem("recipeProgress");
    localStorage.removeItem("mealPlanList");
    sessionStorage.removeItem("searchResults");
    this.username = undefined;
    this.recipeProgress = undefined;
    localStorage.clear();
    sessionStorage.clear();
  },
  saveRecipeProgress(recipeProgress, item) {
    this.recipeProgress = recipeProgress;
    localStorage.setItem(item, JSON.stringify(this.recipeProgress));
    console.log(JSON.parse(localStorage.getItem(item)));
  },
  saveResultSearch(searchResults,item){
    sessionStorage.clear();
    this.searchResults = searchResults;
    console.log("line 113 main");
    console.log(this.searchResults);
    sessionStorage.setItem(item,JSON.stringify(this.searchResults));
    console.log("line 116 main::::::::");
    console.log(JSON.parse(sessionStorage.getItem(item)));
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
