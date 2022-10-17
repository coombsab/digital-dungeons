<template>
  <div class="p-3">
    <div v-if="campaign" class="h00 elevated rounded">
      <div class="text-light h00 glass">
        <section class="row justify-content-between">
          <div class="col-7 bg-dark p-2 text-center">
            <div class="bg-secondary text-white">
              <h2>{{ encounter.name }}</h2>
            </div>
          </div>
          <!-- NOTE Cant input Dm's Name because creator of campaign is not populated on campaign -->
          <div class="col-3 bg-dark p-2">
            <div class="bg-secondary p-1">
              {{ campaign.creator.name }}
            </div>
          </div>
          <!-- ADD ENCOUNTER -->
          <div class="col-2 pt-2">
            <button
              v-if="campaign.creatorId == account.id"
              class="btn btn-danger"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#CreateEncounterModal"
            >
              Create Monster
            </button>
          </div>
        </section>
        <section class="row">
          <div class="col-6">
            <img :src="campaign.coverImg" alt="" class="img-fluid" />
            <div class="bg-dark p-2">
              <div class="bg-secondary p-1">
                <p>{{ campaign.desc }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- MODAL COMPONENT -->
  <CreateEncounterModal />
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import CreateEncounterModal from "../components/CreateEncounterModal.vue";
import EncounterCard from "../components/EncounterCard.vue";
import { encountersService } from "../services/EncountersService.js";
export default {
  setup() {
    const route = useRoute();
    async function getEncounterById() {
      try {
        await encountersService.getEncounterById(
          route.params.campaignId,
          route.params.encounterId
        );
      } catch (error) {
        Pop.error(error);
      }
    }
    // async function getMonstersByEncounterId() {
    //   try {
    //     await encountersService.getMonstersByEncounterId(
    //       route.params.encounterId
    //     );
    //     console.log("Getting Monsters");
    //   } catch (error) {
    //     Pop.error(error);
    //   }
    // }
    onMounted(() => {
      getEncounterById();
      // getMonstersByEncounterId();
    });
    return {
      campaign: computed(() => AppState.activeCampaign),
      account: computed(() => AppState.account),
      encounter: computed(() => AppState.encounters),
    };
  },
  components: { CreateEncounterModal, EncounterCard },
};
</script>

<style lang="scss" scoped>
.h00 {
  height: 96vh;
  background-size: cover;
  background-position: center;
}

.glass {
  background-color: rgba(38, 37, 37, 0.397);
}
</style>
