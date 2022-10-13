<template>
  <div class="monster-card p-3 m-2 rounded elevation-2 text-light w-100" data-bs-toggle="modal"
    data-bs-target="#monsterModal" @click="setActiveMonster()">
    <span>{{monster.name}}</span>
  </div>

  <div class="modal fade modalZ" id="monsterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{monster.name}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!--Add Info of monster you clicked on, you have to dig into the url an extra layer to get the true info-->

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>




<script>

export default {
  props: {
    monster: { type: Object, required: true }
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

.modalZ {
  z-index: 10000;
}
</style>
