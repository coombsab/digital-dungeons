<template>
  <div class="information-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 p-3">
          <div class="text-center">
            <button class="btn btn-success elevation-2">RULES</button>
          </div>
        </div>
        <div class="col-6 p-3">
          <div class="text-center">
            <button class="btn btn-success elevation-2">GAME MECHANICS</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 text-center pt-5">
          <span class="text-danger fs-5"><strong>DROPDOWN</strong></span>
        </div>
        <div class="col-8">
          <div class="info-content">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .information-page {
    background-image: url("https://thumbs.dreamstime.com/b/aged-dirty-paper-texture-stained-background-grunge-design-87575620.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
  }
  button {
    font-weight: 800;
    font-size: 64px;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 2rem;
  }

  .info-content {
    background-color: black;
    height: 100%;
    width: 100%;
  }
</style>