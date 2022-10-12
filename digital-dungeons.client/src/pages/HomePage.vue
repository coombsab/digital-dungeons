<template>
  <div class="row  justify-content-around">
    <div class="col-3 p-5">
      <img class="home-card" src="https://i.pinimg.com/originals/da/72/e6/da72e6588befda673cc0fcdf64a49e40.jpg"
        alt="Info">
    </div>
    <div class="col-3 p-5">
      <img class="home-card"
        src="https://preview.redd.it/nme1k9p45eo21.jpg?auto=webp&s=e7beecea363fa0a547ce09b0cca2872a2019447e"
        alt="Campaign">
    </div>
  </div>
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

.home-card {
  width: 25vw;
  height: 75vh;

  >img {
    height: 200px;
    max-width: 200px;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
