<template>
  <div class="container-fluid right">
    <div v-if="activeEncounter" class="h00 elevated rounded">
      <div class="text-light h00 glass">
        <section class="row justify-content-between">
          <div class="AETitle text-center">
            <div class="text-shadow2 d-flex justify-content-around">
              <div class="d-flex gap-5">
                <button
                  class="text-danger btn px-3"
                  data-bs-toggle="modal"
                  :data-bs-target="'#encounterModal' + activeEncounter?.id"
                >
                  Edit Encounter
                </button>
              </div>
              <h2>{{ activeEncounter?.name }}</h2>
              <div class="d-flex gap-5">
                <button
                  class="btn text-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#addCharacterModal"
                >
                  Add Character
                </button>
                <button class="btn text-danger" @click.stop="rollInitiatives()">
                  Roll Initiatives
                </button>
              </div>
            </div>
          </div>
          <!-- NOTE Cant input Dm's Name because creator of campaign is not populated on campaign
              <div class="col-3 bg-dark p-2">
                <div class="bg-secondary p-1">
                  {{ activeEncounter }}
                </div>
              </div> -->

          <!-- ADD ENCOUNTER -->
        </section>
        <section class="row top">
          <div class="col-12 d-flex">
            <img
              :src="activeEncounter?.coverImg"
              alt=""
              class="img-fluid encounterImage rounded"
            />
            <p class="p-5 text-shadow">{{ activeEncounter?.desc }}</p>
          </div>

          <!-- SECTION search monsters -->
          <div class="col-4 bg-transparent bottomLeft box">
            <SearchPagination />
            <div class="elem2 scrollable">
              <MonsterDetailsModal
                v-for="m in monsters"
                :key="m.slug"
                :monster="m"
              />
            </div>
          </div>

          <!-- SECTION my monsters -->
          <div class="col-md-8">
            <div class="row">
              <ActiveEncounterMonsters
                v-for="m in activeMonsters"
                :key="m.slug"
                :monster="m"
              />
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  </div>

  <div v-if="activeEncounter">
    <EditEncounterDetailsModal :encounter="activeEncounter" />
  </div>

  <!-- MODAL COMPONENT -->
  <CreateEncounterModal />
  <CreateCharacterModal />
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { encountersService } from "../services/EncountersService.js";
import { informationService } from "../services/InformationService.js";
import { monstersService } from "../services/MonstersService.js";

import CreateEncounterModal from "../components/CreateEncounterModal.vue";
import EditEncounterDetailsModal from "../components/EditEncounterDetailsModal.vue";
import Pop from "../utils/Pop.js";
import { Account } from "../models/Account.js";

import EncounterCard from "../components/EncounterCard.vue";
import MonsterCard from "../components/InformationCards/MonsterCard.vue";
import MonsterDetailsModal from "../components/MonsterDetailsModal.vue";
import AccountPage from "./AccountPage.vue";
import ActiveEncounterMonsters from "../components/ActiveEncounterMonsters.vue";
import SearchPagination from "../components/SearchPagination.vue";

export default {
  setup() {
    const route = useRoute();
    const editable = ref("");

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

    async function getApiMonsters() {
      try {
        informationService.setActiveCategory("monsters");
        await informationService.getApiInfo("monsters");
      } catch (error) {
        Pop.error(error, ["gettingMonsters"]);
      }
    }

    async function getMonstersByEncounterId() {
      try {
        await monstersService.getMonstersByEncounterId(
          route.params.encounterId
        );
      } catch (error) {
        Pop.error(error);
      }
    }

    onMounted(() => {
      getEncounterById();
      getApiMonsters();
      getMonstersByEncounterId();
    });

    return {
      editable,
      route,
      campaigns: computed(() => AppState.campaigns),
      account: computed(() => AppState.account),
      encounter: computed(() => AppState.encounters),
      activeEncounter: computed(() => AppState.activeEncounter),
      activeCampaign: computed(() => AppState.activeCampaign),
      monsters: computed(() => AppState.monsters),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      category: computed(() => AppState.activeCategory),
      activeMonsters: computed(() =>
        AppState.activeEncounterMonsters.sort(
          (a, b) => b.initiative - a.initiative
        )
      ),

      async rollInitiatives() {
        try {
          await monstersService.rollInitiatives(route.params.encounterId);
        } catch (error) {
          Pop.error(error);
        }
      },
      async addCharacter() {
        try {
          await monstersService.addCharacter(req.body);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },

  components: {
    CreateEncounterModal,
    EncounterCard,
    MonsterCard,
    MonsterDetailsModal,
    AccountPage,
    ActiveEncounterMonsters,
    SearchPagination,
    EditEncounterDetailsModal,
  },
};
</script>

<style lang="scss" scoped>
.h00 {
  height: 96vh;
  background-size: cover;
  background-position: center;
}

.text-shadow {
  color: rgb(113, 166, 177);
  text-shadow: 1px 1px rgb(28, 51, 74), 0px 0px 5px rgb(136, 62, 147);
  font-weight: bold;
  letter-spacing: 0.08rem;
  font-family: "Morpheus";
  src: local("Morphues") url(./fonts/MORPHEUS.TTF) format("truetype");
}

.text-shadow2 {
  color: rgba(117, 117, 13, 0.727);
  text-shadow: 1px 1px rgb(88, 27, 27), 0px 0px 5px rgb(105, 41, 115);
  font-weight: bold;
  letter-spacing: 0.08rem;
}

.MonsterC:hover {
  transform: scale(1.2);
}

.AETitle {
  background-color: rgba(105, 19, 102, 0.505);
  border-top: 6px solid;
  border-bottom: 6px solid;
  border-color: rgba(119, 19, 125, 0.749);
  font-family: "Morpheus";
  src: local("Morphues") url(./fonts/MORPHEUS.TTF) format("truetype");
}

.glass {
  background-color: rgba(38, 37, 37, 0.397);
}

.encounterImage {
  max-height: 40vh;
  max-width: 40vw;
  padding: 4rem;
}

.bottomLeft {
  height: 53vh;
  overflow-y: auto;
}

.box {
  display: flex;
  flex-direction: column;
}

.elem2 {
  flex-grow: 1;
}

.scrollable {
  overflow-y: auto;
}

// .right {
//   margin-left: 1rem;
// }
</style>
