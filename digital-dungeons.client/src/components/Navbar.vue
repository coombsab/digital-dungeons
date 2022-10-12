<template>

  <div class="bg-secondary d-flex flex-column align-items-center">
    <!-- HOME PAGE LINK -->
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/Digital_Dungeon_Logo.png" height="45" />
      </div>
    </router-link>
    <!-- LOGIN COMPONENT -->
    <Login />
    <!-- ABOUT PAGE -->
    <router-link :to="{ name: 'About' }"
      class="text-center my-2 btn btn-light text-dark lighten-30 selectable text-uppercase">
      <h6 class="p-0 text-center">
        About
      </h6>
    </router-link>
  </div>

</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
.sidebar {
  background-color: #dc1a22;
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
