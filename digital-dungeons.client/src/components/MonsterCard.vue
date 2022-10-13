<template>

  <div class="monster-card p-3 m-2 rounded elevation-2 text-light w-100" data-bs-toggle="modal"
    data-bs-target="#exampleModal">
    <span>{{monster.name}}</span>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>




<script>
export default {
  props: {
    monster: { type: Object }
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: green;
  // backdrop-filter: blur(5px);  //paginate if using blur on each card as 300 cards lags
  width: fit-content;
}
</style>
