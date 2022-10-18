<template>
  <div class="navbar">
    <i class="mdi mdi-menu selectable fs-1 text-visible rounded" data-bs-toggle="offcanvas" data-bs-target="#navBackdrop" aria-controls="navBackdrop"></i>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="navBackdrop" aria-labelledby="navBackdropLabel">
      <div class="d-flex justify-content-end me-4 mt-3">
        <button type="button" class="btn text-visible fs-3" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-between">
        <router-link :to="{ name: 'Home' }" v-if="route.name !== 'Home'">
          <button class="btn rounded text-visible fs-3" data-bs-dismiss="offcanvas"><i class="mdi mdi-home"></i> Home</button>
        </router-link>
        <router-link :to="{ name: 'Campaigns' }" v-if="route.name !== 'Campaigns'">
          <button class="btn rounded text-visible fs-3 mt-1" data-bs-dismiss="offcanvas"><i class="mdi mdi-horse-human"></i> Campaigns</button>
        </router-link>
        <router-link :to="{ name: 'Information' }" v-if="route.name !== 'Information'">
          <button class="btn rounded text-visible fs-3 mt-1" data-bs-dismiss="offcanvas"><i class="mdi mdi-script"></i> Information</button>
        </router-link>
        <router-link :to="{ name: 'About' }" v-if="route.name !== 'About'">
          <button class="btn rounded text-visible fs-3" data-bs-dismiss="offcanvas"><i class="mdi mdi-information"></i> About</button>
        </router-link>
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import Login from './Login.vue'
export default {
  setup() {
    const route =useRoute()
    return {
      route
    }
  },
  components: { Login }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  left: 1.25rem;
  top: 5rem;
  z-index: 1;
}

.offcanvas {
  background-color: rgba(81, 60, 100, 0.7);
  height: fit-content;
  border-radius: none;
  backdrop-filter: blur(7px);
}

@media (min-width: 500px) {
  .offcanvas {
    border-radius: 0 0 10% 0;
  }
}

</style>
