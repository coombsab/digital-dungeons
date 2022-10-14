<template>
  <div class="encounter-card text-white my-2" v-if="encounter">
    <div
      class="card"
      :style="{ backgroundImage: `url(${encounter?.coverImg})` }"
    >
      <div class="glass rounded">
        <i
          v-if="account.id == campaign.creatorId"
          class="mdi mdi-delete selectable rounded fs-6 delete-icon text-visible text-end"
          @click.stop="removeEncounter(encounter.id)"
        ></i>

        <div
          class="selectable"
          type="button"
          data-bs-toggle="modal"
          :data-bs-target="'#encounterModal' + encounter.id"
        >
          <div class="card-header">
            <h5>{{ encounter?.name }}</h5>
          </div>
          <div class="card-body">
            <p>{{ encounter?.desc }}</p>
            <p>{{ encounter?.type }}</p>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  </div>

  <EditEncounterDetailsModal
    :encounter="encounter"
    v-if="account.id == campaign.creatorId"
  />
  <EncounterDetailsModal :encounter="encounter" v-else />
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
.glass {
  background-color: rgba(85, 3, 3, 0.739);
}

.card {
  background-size: cover;
  background-position: center;
}
</style>
