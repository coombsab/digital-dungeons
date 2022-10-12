<template>

  <main class="container-fluid">
    <section class="row Home">
      <div class="col-md-2 bg-secondary ">
        <Navbar />
      </div>
      <div class="col-md-10">
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

@import "./assets/scss/main.scss";
</style>
