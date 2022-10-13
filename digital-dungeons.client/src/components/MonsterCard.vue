<template>
  <div class="monster-card p-3 m-2 rounded elevation-2 text-light w-100">
    <span>{{monster.name}}</span>
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
