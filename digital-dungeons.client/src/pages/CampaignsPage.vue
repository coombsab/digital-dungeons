<template>
  <div class="campaigns-page text-danger">
    <!-- ADD CAMPAIGN BUTTON -->
    <button class="btn btn-danger">Create Campaigns</button>
    <!-- MY CAMPAIGNS -->
    <div class="border-bottom border-3 border-danger my-3 mb-4">
      <h3>My Campaigns</h3>
    </div>
    <CampaignCard v-for="c in userCampaigns" :key="c.id" :campaign="c" />
    <!-- ALL CAMPAIGNS -->
    <div class="border-bottom border-3 border-danger my-3">
      <h3>All Campaigns</h3>
    </div>
    <CampaignCard v-for="c in campaigns" :key="c.id" :campaign="c" />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { campaignsService } from '../services/CampaignsService.js';
import Pop from '../utils/Pop.js';
import CampaignCard from '../components/CampaignCard.vue';



export default {
  setup() {
    onMounted(() => {
      getCampaigns();
    });
    watchEffect(() => {
      getCampaigns()
    });
    async function getCampaigns() {
      try {
        await campaignsService.getCampaigns();
      }
      catch (error) {
        Pop.error(error, "[getCampaigns]");
      }
    }
    return {
      campaigns: computed(() => AppState.campaigns),
      userCampaigns: computed(() => AppState.campaigns.filter(c => c.creatorId == AppState.account.id))
    };
  },
  components: { CampaignCard }
};
</script>

<style lang="scss" scoped>

</style>
