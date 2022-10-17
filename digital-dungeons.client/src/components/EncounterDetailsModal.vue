<template>
  <div
    class="modal fade"
    :id="'encounterDetailsModal' + encounter.id"
    tabindex="-1"
    aria-labelledby="encounterModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-secondary">
        <div class="modal-header">
          <h5 class="modal-title" id="encounterModalLabel">
            {{ encounter.name }}
          </h5>
          <button class="btn btn-light-outline">
            <router-link
              :to="{
                name: 'EncounterDetails',
                params: { encounterId: encounter.id },
              }"
            >
              <i class="mdi mdi-arrow-right-bold-outline"> Details</i>
            </router-link>
          </button>
          <button
            type="button"
            class="btn text-white py-1"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="mdi mdi-close fs-3"></i>
          </button>
        </div>
        <div class="modal-body container-fluid text-secondary">
          <div class="card text-start row">
            <div class="card-body">
              <img :src="encounter.coverImg" alt="" class="img-fluid" />
              <ul class="py-2">
                <li>
                  <p class="card-text">{{ encounter.desc }}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <div class="d-flex justify-content-between">
              <span>{{encounter.musicUrl}}</span>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div> -->
        </div>
      </div>
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
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
