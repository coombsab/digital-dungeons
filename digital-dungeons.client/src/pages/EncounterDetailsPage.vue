<template>
  <div class="row right">
    <div class="col-6">
      <div>
        <div v-if="activeEncounter" class="h00 elevated rounded">
          <div class="text-light h00 glass">
            <section class="row justify-content-between">
              <div class="col-7 bg-dark p-2 text-center">
                <div class="bg-secondary text-white">
                  <h2>{{ activeEncounter?.name }}</h2>
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
            <section class="row">
              <div class="col-12 topRight">
                <img :src="activeEncounter?.coverImg" alt="" class="img-fluid" />
                <div class="bg-dark p-2">
                  <div class="bg-secondary p-1">
                    <p>{{ activeEncounter?.desc }}</p>
                  </div>
                </div>
              </div>
              <div class="col-12 bg-transparent bottomRight">
                <div class="h-30">
                  <div class="d-flex p-2">
                    <form class="w-100" @submit.prevent="handleSubmit()">
                      <div class="input-group">
                        <div class="form-floating input-width">
                          <input type="text" class="form-control" placeholder="Search" id="floatingSearch"
                            v-model="editable">
                          <label for="floatingSearch">Search</label>
                        </div>
                        <button type="submit" class="form-control"><i class="mdi mdi-magnify"></i></button>
                      </div>
                    </form>
                  </div>
                  <div class="d-flex justify-content-between">
                    <button @click="changePage(previousPage)" :disabled="!previousPage" class="btn btn-danger me-2"
                      :class="{'disabled' : !previousPage}">Previous</button>
                    <button @click="changePage(nextPage)" :disabled="!nextPage"
                      :class="`btn btn-danger ${!nextPage ? 'btn-info' : ''}`">Next</button>
                  </div>
                  <div class="col-12">
                    <div class="px-3 scrollable">
                      <MonsterDetailsModal v-for="m in monsters" :key="m.slug" :monster="m" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL COMPONENT -->
  <CreateEncounterModal />
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import CreateEncounterModal from "../components/CreateEncounterModal.vue";
import EncounterCard from "../components/EncounterCard.vue";
import { encountersService } from "../services/EncountersService.js";
import MonsterCard from "../components/InformationCards/MonsterCard.vue";
import { informationService } from "../services/InformationService.js";
import MonsterDetailsModal from "../components/MonsterDetailsModal.vue";
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

    async function getApiMonsters() {
      try {
        await informationService.getApiInfo("monsters")
        informationService.setActiveCategory("monsters")
      } catch (error) {
        Pop.error(error, ["gettingMonsters"])
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
      getApiMonsters();

    });
    const editable = ref("")
    return {
      editable,
      campaigns: computed(() => AppState.campaigns),
      account: computed(() => AppState.account),
      encounter: computed(() => AppState.encounters),
      activeEncounter: computed(() => AppState.activeEncounter),
      activeCampaign: computed(() => AppState.activeCampaign),
      monsters: computed(() => AppState.monsters),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      category: computed(() => AppState.activeCategory),

      async handleSubmit() {
        try {
          await informationService.getApiInfo(AppState.activeCategory, { search: editable.value })
          editable.value = ""
        } catch (error) {
          Pop.error(error, ["SearchSubmit"])
        }
      },



      async changePage(pageurl) {
        try {
          await informationService.getApiInfo(pageurl)
        } catch (error) {
          Pop.error(error, '[changigpage]')
        }
      },

      async changeCategory(category) {
        try {
          await informationService.getApiInfo(category)
          informationService.setActiveCategory(category)
        } catch (error) {
          Pop.error(error, "[ChangeCategory]")
        }
      }


    };

  },
  components: { CreateEncounterModal, EncounterCard, MonsterCard, MonsterDetailsModal },
};
</script>

<style lang="scss" scoped>
.h00 {
  height: 96vh;
  background-size: cover;
  background-position: center;
}

.MonsterC:hover {
  transform: scale(1.2);
}

.glass {
  background-color: rgba(38, 37, 37, 0.397);
}

.topRight {
  height: 35vh;
}

.bottomRight {
  height: 53vh;
  overflow-y: auto;
}

.right {
  margin-left: 1rem;
}
</style>
