<template class="container">
  <!-- NOTE Implement Acc Campaigns here -->
  <section class="row">
    <div class="col-md-9 d-flex align-items-center flex-column my-3 order-2 order-md-1">
      <h1 class="text-visible-light text-center">Your Campaigns</h1>
      <CampaignCard v-for="c in campaigns" :campaign="c" :key="c.id" />
    </div>
    <div v-if="account.picture"
      class=" text-center text-light text-visible-light col-md-3 order-1 order-md-2 my-3 bg-blur">
      <h1 class="text-visible-light text-center fs-3 ">Account Information</h1>
      <img class="rounded img-fluid my-3" :src="account.picture" alt="Account Photo" />
      <p title="Name">{{ account.name }}</p>
      <button class="btn btn-primary rounded-5 mb-3"><i class="mdi mdi-pencil fs-3"></i></button>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import CampaignCard from '../components/CampaignCard.vue'
import { campaignsService } from '../services/CampaignsService.js';
import Pop from '../utils/Pop.js';
export default {
  setup() {
    onMounted(() => {
      getCampaigns()
    });

    async function getCampaigns() {
      try {
        await campaignsService.getCampaigns()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      account: computed(() => AppState.account),
      campaigns: computed(() => AppState.campaigns.filter((c) => c.creatorId == AppState.account.id))

    };
  },
  components: { CampaignCard }
}
</script>

<style scoped>
.bg-blur {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7px);
}
</style>
