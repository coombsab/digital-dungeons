<template>
  <div class="campaign-card my-2">
    <div class="card">
      <div class="card-header">{{campaign.name}}</div>
      <div class="card-body">{{campaign.desc}}</div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script>
import { Campaign } from '../models/Campaign.js';

export default {
  props: {
    campaign: { type: Campaign, required: true }
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
