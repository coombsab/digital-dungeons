<template>
  <div class="campaign-details-page">
    <div>{{ campaign }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import CampaignCard from "../components/CampaignCard.vue";
export default {
  setup() {
    return {
      campaign: computed(() => AppState.activeCampaign),
    };
  },
  components: { CampaignCard },
};
</script>

<style lang="scss" scoped></style>
