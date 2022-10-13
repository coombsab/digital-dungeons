<template>
  <div class="campaign-details-page">
    <div class="text-light">{{ campaign }}</div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { campaignsService } from "../services/CampaignsService.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    const route = useRoute();
    async function getCampaignById() {
      try {
        await campaignsService.getCampaignById(route.params.campaignId);
      } catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getCampaignById();
    });
    return {
      campaign: computed(() => AppState.activeCampaign),
    };
  },
};
</script>

<style lang="scss" scoped></style>
