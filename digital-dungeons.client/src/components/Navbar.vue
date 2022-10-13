<template>

  <div class="bg-secondary h-100 d-flex flex-column align-items-center justify-content-between">
    <div class="d-flex flex-column align-items-center">
      <!-- HOME PAGE LINK -->
      <router-link class="navbar-brand d-flex my-4" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
          <img alt="logo" src="../assets/img/Digital_Dungeon_Logo.png" class="img-fluid rounded" title="Home Page" />
        </div>
      </router-link>
      <!-- CAMPAIGNS PAGE LINK -->
      <router-link :to="{ name: 'Campaigns' }">
        <div class="bg-danger p-3 rounded selectable my-5 text-shadow">
          Campaigns Page
        </div>
      </router-link>
      <!-- INFORMATION PAGE LINK -->
      <router-link :to="{ name: 'Information' }">
        <div class="bg-success p-3 rounded selectable text-shadow2">
          Information Page
        </div>
      </router-link>
    </div>
    <div class="text-center d-flex flex-column">

      <!-- LOGIN COMPONENT -->
      <Login />
      <!-- ABOUT PAGE LINK -->
      <router-link :to="{ name: 'About' }"
        class="text-center m-2 btn btn-light text-dark lighten-30 selectable text-uppercase">
        <h6 class="p-0 text-center">
          About
        </h6>
      </router-link>
    </div>
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

.text-shadow {
  color: rgb(222, 222, 222);
  text-shadow: 1px 1px rgba(178, 30, 94, 0.755), 0px 0px 5px rgba(170, 40, 70, 0.716);
  font-weight: bold;
  letter-spacing: 0.08rem
}

.text-shadow2 {
  color: rgb(201, 202, 189);
  text-shadow: 1px 1px rgba(40, 95, 10, 0.685), 0px 0px 5px rgba(72, 242, 15, 0.603);
  font-weight: bold;
  letter-spacing: 0.08rem
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
