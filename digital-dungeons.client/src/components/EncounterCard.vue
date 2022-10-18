<template>
  <div class="encounter-card text-white my-2" v-if="encounter">
    <div class="dropdown options">
      <button class="btn back dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" v-if="account.id == campaign.creatorId"></button>
      <ul class="dropdown-menu">
        <li class="dropdown-item">
          <button class="btn" data-bs-toggle="modal" :data-bs-target="'#encounterModal' + encounter.id">Edit Encounter</button>
        </li>
        <li class="dropdown-item">
          <button class="btn" @click.stop="removeEncounter(encounter.id)">Delete Encounter</button>
        </li>
      </ul>
    </div>
    <div class="selectable" type="button" data-bs-toggle="modal" :data-bs-target="'#encounterDetailsModal' + encounter.id">
      <div class="card border border-light" :style="{ backgroundImage: `url(${encounter?.coverImg})` }">
        <div class="glass rounded">
          <div class="card-header d-flex justify-content-between">
            <h5>{{ encounter?.name }}</h5>
          </div>

          <div class="card-body">
            <!-- <p>{{ encounter?.desc }}</p>
            <p>{{ encounter?.type }}</p> -->
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  </div>

  <EditEncounterDetailsModal :encounter="encounter" />
  <EncounterDetailsModal :encounter="encounter" class="selectable" />
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { encountersService } from "../services/EncountersService.js";
import Pop from "../utils/Pop.js";
import EncounterDetailsModal from "./EncounterDetailsModal.vue";

export default {
  props: {
    encounter: { type: Object, required: true },
    campaign: { type: Object, required: true },
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      async removeEncounter(id) {
        try {
          const yes = await Pop.confirm(
            "Are you sure you want to delete this Encounter?"
          );
          if (!yes) {
            return;
          }
          await encountersService.removeEncounter(id);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
  components: { EncounterDetailsModal },
};
</script>

<style lang="scss" scoped>
.encounter-card {
  position: relative;
}

.options {
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 1;
}
.glass {
  background-color: rgba(85, 3, 3, 0.739);
}

.card {
  background-size: cover;
  background-position: center;
}

.back {
  background-color: rgba(240, 248, 255, 0);
}
</style>
