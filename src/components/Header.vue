<template>
  <div id="header">
    <div>
      <b-navbar tabs toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{ name: 'main' }">CoockBook</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item disabled :to="{ name: 'search' }">Search Recipe</b-nav-item>
            <b-nav-item disabled :to="{ name: 'about' }">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button disabled size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <!-- for a signed in user  -->
            <b-nav-item-dropdown v-if="$root.store.username" right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{$root.store.username}}</em>
              </template>
              <b-dropdown-item disabled :to="{ name: 'myFavoriteRecipes' }">My Favorite Recipes</b-dropdown-item>
              <b-dropdown-item disabled :to="{ name: 'myRecipes' }">My Recipes</b-dropdown-item>
              <b-dropdown-item disabled :to="{ name: 'myFamilyRecipes' }">My Family's Recipes</b-dropdown-item>
              <b-dropdown-item disabled :to="{ name: 'newRecipe' }">New Recipe</b-dropdown-item>
              <b-dropdown-item disabled href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- for a guest user  -->
            <b-nav-item-dropdown v-else right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Hello, guest</em>
              </template>
              <b-dropdown-item disabled :to="{ name: 'login' }">Sign In</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'register' }">Sign Up</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>