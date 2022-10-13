<template>

  <main class="container-fluid">
    <section class="row Home">
      <div class="col-md-2 bg-secondary ">
        <Navbar />
      </div>
      <div class="col-md-10 scrollin p-0">
        <router-view />
      </div>
    </section>
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
  background-image: url('https://lifeineorzea.com/wp-content/gallery/matoyas-relict-dungeon/ffxiv_08122020_115618_203.jpg');
  background-position: center;
  background-size: cover;
  max-height: fit-content;
}

.scrollin {
  max-height: 100vh;
  overflow: auto;
}

.modal-backdrop {
  position: relative !important;
}

@import "./assets/scss/main.scss";
</style>
