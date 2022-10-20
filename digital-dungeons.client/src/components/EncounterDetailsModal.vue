<template>
  <div
    :id="'encounterDetailsModal' + encounter.id"
    class="encounterDetailsModal rounded-bottom row rounded"
    :style="{ backgroundImage: `url(${encounter.coverImg})` }"
  >
    <div class="row text-center">
      <router-link
        :to="{
          name: 'EncounterDetails',
          params: { encounterId: encounter.id },
        }"
        class="details-link"
      >
        <i
          class="mdi mdi-arrow-right-bold-outline text-visible fs-5"
          title="Go To Encounter Details Page"
        >
          Details</i
        >
      </router-link>
    </div>
    <div
      @click="closeModal()"
      class="selectable custom-modal-content text-visible rounded-bottom"
      title="Close Modal"
    >
      <span>{{ encounter.desc }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Campaign } from "../models/Campaign.js";
import { Encounter } from "../models/Encounter.js";

export default {
  props: {
    encounter: { type: Encounter, required: true },
  },
  setup(props) {
    return {
      closeModal() {
        let modal = document.getElementById(
          "encounterDetailsModal" + props.encounter.id
        );
        modal.style.display = "none";
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.details-link {
  position: absolute;
  right: 2%;
  top: 2%;
  z-index: 1;
}

.encounterDetailsModal {
  display: none;
  position: relative;
  background-position: center;
  background-size: cover;
  height: 32rem;
}

.custom-modal-content {
  height: 100%;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 5rem;
  padding-bottom: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
