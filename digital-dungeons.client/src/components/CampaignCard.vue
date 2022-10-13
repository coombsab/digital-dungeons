<template>
  <router-link :to="{name: "CampaignDetails", params: {campaignId: campaign.id}}">
  <div class="campaign-card my-2 selectable">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <span>{{ campaign.name }}</span
        ><i
          v-if="account.id == campaign.creatorId"
          class="mdi mdi-delete mx-3 selectable rounded fs-4"
          @click.stop="removeCampaign(campaign.id)"
        ></i>
      </div>
      <div class="card-body">{{ campaign.desc }}</div>
      <div class="card-footer"></div>
    </div>
  </div>
   </router-link>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Campaign } from "../models/Campaign.js";

export default {
  props: {
    campaign: { type: Campaign, required: true },
  },
  setup() {
    return {
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped></style>
