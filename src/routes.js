import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/myFavoriteRecipes",
    name: "myFavoriteRecipes",
    component: () => import("./pages/MyFavoriteRecipes"),
  },
  {
    path: "/myFamilyRecipes",
    name: "myFamilyRecipes",
    component: () => import("./pages/MyFamilyRecipes"),
  },
  {
    path: "/myRecipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/prepareRecipe",
    name: "prepareRecipe",
    component: () => import("./pages/PrepareRecipe"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
