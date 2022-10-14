<template>

  <!-- <main class="container-fluid">
    <section class="row Home">
      <div class="col-md-2 navbarbg rounded">
        <Navbar />
      </div>
      <div class="col-md-10 scrollin p-0">
        <router-view />
      </div>
    </section>
  </main> -->

  <main>
    <Navbar />
    <Login />
    <router-view />
  </main>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
.Home {
  height: 100vh;
}

main {
  position: relative;
}

main {
  background-image: url('https://giffiles.alphacoders.com/215/215595.gif');
  background-position: center;
  background-size: cover;
  max-height: fit-content;
}

.navbarbg {
  background-color: rgba(81, 60, 100, 0.7);
  background-position: center;
  background-size: cover;
}



.scrollin {
  max-height: 100vh;
  overflow: auto;
}

.modal-backdrop {
  position: relative !important;
}

.navbar {
  position: absolute;
  left: 0.25rem;
  top: -0.75rem;
  z-index: 1;
  // width: fit-content;
}

@import "./assets/scss/main.scss";
</style>
