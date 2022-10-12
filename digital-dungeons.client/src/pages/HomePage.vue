<template>
  <section class="container-fluid">
    <div class="row">
      <div class="text-center col-12 my-5">
        <h3>WELCOME</h3>
      </div>
    </div>
    <div class="row justify-content-around align-items-center mt-5">
      <div class="col-5 text-center">
        <router-link :to="{ name: 'Campaigns' }">
          <img class="home-img col-5"
            src="https://preview.redd.it/nme1k9p45eo21.jpg?auto=webp&s=e7beecea363fa0a547ce09b0cca2872a2019447e"
            alt="Campaign">
        </router-link>
      </div>
      <div class="col-5 text-center">
        <router-link :to="{ name: 'Information' }">
          <img class="home-img col-5" src="https://i.pinimg.com/originals/da/72/e6/da72e6588befda673cc0fcdf64a49e40.jpg"
            alt="Info">
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;


}

.home-img {
  max-height: 60vh;
  width: 29vw;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
