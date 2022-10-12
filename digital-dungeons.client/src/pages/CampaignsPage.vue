<template>
  <div class="campaigns-page">

    {{campaigns}}
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { campaignsService } from '../services/CampaignsService.js';
import Pop from '../utils/Pop.js';



export default {
  setup() {
    onMounted(() => {
      getCampaigns()
    })

    async function getCampaigns() {
      try {
        await campaignsService.getCampaigns()
      } catch (error) {
        Pop.error(error, '[getCampaigns]')
      }
    }

    return {
      campaigns: computed(() => AppState.campaigns)

    };
  },
};
</script>

<style lang="scss" scoped>

</style>
