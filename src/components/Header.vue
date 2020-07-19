<template>
  <div id="header">
    <div>
      <b-navbar tabs toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand @click="mainPage" class="cookBook" :to="{ name: 'main' }">CookBook</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'mealPlanningPage' }">
              <b-icon icon="basket"></b-icon>
              ({{itemsInBasket()}})
            </b-nav-item>
            <b-nav-item :to="{ name: 'search' }">Search Recipe</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items for a signed in user -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown v-if="$root.store.username" right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{$root.store.username}}</em>
              </template>
              <b-dropdown-item :to="{ name: 'myFavoriteRecipes' }">My Favorite Recipes</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'myRecipes' }">My Recipes</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'myFamilyRecipes' }">My Family's Recipes</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'newRecipe' }">New Recipe</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'mealPlanningPage' }">My Meal Planner</b-dropdown-item>

              <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown v-else right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Hello, guest</em>
              </template>
              <b-dropdown-item :to="{ name: 'login' }">Sign In</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'register' }">Sign Up</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-avatar variant="secondary" v-if="!$root.store.username"></b-avatar>
            <b-avatar size="4rem" :src="profile_pic" v-else></b-avatar>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      profile_pic: ""
    };
  },
  mounted() {
    this.itemsInBasket();
    this.getProfilePic();
  },
  methods: {
    itemsInBasket() {
      let mealPlanCounter = localStorage.getItem("mealPlanCounter");
      if (mealPlanCounter == undefined) {
        return 0;
      } else return mealPlanCounter;
    },
    logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    async getProfilePic() {
      this.axios.defaults.withCredentials = true;
      const user_profile_pic = await this.axios.get(
        "http://localhost:3000/profiles/getProfilePic"
      );
      //console.log(user_profile_pic.data);
      this.profile_pic = user_profile_pic.data;
    },
    mainPage() {
      this.$router.push("/");
      location.reload();
    }
  }
};
</script>
<style>
.cookBook {
  font-family: "Bahnschrift", Times, serif;
}
div {
  font-family: "Bahnschrift", Times, serif;
}
</style>
