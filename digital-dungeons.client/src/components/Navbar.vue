<template>
  <div class="navbar">
    <i class="mdi mdi-menu selectable fs-1 text-visible rounded" data-bs-toggle="offcanvas" data-bs-target="#navBackdrop" aria-controls="navBackdrop"></i>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="navBackdrop" aria-labelledby="navBackdropLabel">
      <div class="d-flex justify-content-end me-4 mt-3">
        <button type="button" class="btn text-visible fs-3" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-between">
        <router-link :to="{ name: 'Home' }">
          <button class="btn rounded text-visible fs-3" data-bs-dismiss="offcanvas"><i class="mdi mdi-home"></i> Home</button>
        </router-link>
        <router-link :to="{ name: 'Campaigns' }">
          <button class="btn rounded text-visible fs-3 mt-1" data-bs-dismiss="offcanvas"><i class="mdi mdi-horse-human"></i> Campaigns</button>
        </router-link>
        <router-link :to="{ name: 'Information' }">
          <button class="btn rounded text-visible fs-3 mt-1" data-bs-dismiss="offcanvas"><i class="mdi mdi-script"></i> Information</button>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <button class="btn rounded text-visible fs-3" data-bs-dismiss="offcanvas"><i class="mdi mdi-information"></i> About</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {

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
  text-shadow: 1px 1px rgba(71, 169, 18, 0.752), 0px 0px 5px rgba(50, 134, 23, 0.653);
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

.offcanvas {
  background-color: rgba(81, 60, 100, 0.7);
  height: 35vh;
  border-radius: none;
  backdrop-filter: blur(7px);
}

@media (min-width: 500px) {
  .offcanvas {
    border-radius: 0 0 10% 0;


  }
}

</style>
