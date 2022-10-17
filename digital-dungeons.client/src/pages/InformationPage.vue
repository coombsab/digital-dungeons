<template>
  <div class="information-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 text-center pt-5">
          <div class="text-center">
            <a href="https://www.dndbeyond.com/sources/basic-rules"><button
                class="btn btn-success elevation-2 m-2">RULES</button></a>
          </div>
          <div class="text-center">
            <a href="https://www.masterthedungeon.com/game-mechanics-and-dnd/"><button
                class="btn btn-success elevation-2 m-2">GAME
                MECHANICS</button></a>
          </div>
          <div class="dropdown">
            <button class="btn back dropdown-toggle text-light m-2" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">AHH</button>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                Monsters
              </li>
              <li class="dropdown-item">
                Spells
              </li>
              <li class="dropdown-item">
                Races
              </li>
              <li class="dropdown-item">
                Classes
              </li>
              <li class="dropdown-item">
                Magic Items
              </li>
              <li class="dropdown-item">
                Weapons
              </li>
              <li class="dropdown-item">
                Armor
              </li>
              <li class="dropdown-item">
                Campaigns
              </li>
              <li class="dropdown-item">
                Encounters
              </li>
            </ul>
          </div>
        </div>

        <div class="col-8 bg-transparent">
          <div class="col-12 h-30">
            <div class="d-flex p-2">
              <form class="w-100" @submit.prevent="handleSubmit()">
                <div class="input-group">
                  <div class="form-floating input-width">
                    <input type="text" class="form-control" placeholder="Search" id="floatingSearch" v-model="editable">
                    <label for="floatingSearch">Search</label>
                  </div>
                  <button type="submit" class="form-control  "><i class="mdi mdi-magnify"></i></button>
                </div>
              </form>
            </div>
            <!-- NOTE Buttons -->
            <div class="d-flex justify-content-between">
              <button @click="changePage(previousPage)" :disabled="!previousPage" class="btn btn-danger me-2"
                :class="{'disabled' : !previousPage}">Previous</button>
              <button @click="changePage(nextPage)" :disabled="!nextPage"
                :class="`btn btn-danger ${!nextPage ? 'btn-info' : ''}`">Next</button>
            </div>
          </div>
          <div class="col-12">
            <div class="info-content px-3 scrollable">
              <MonsterCard v-for="m in monsters" :key="m.slug" :monster="m" />
              <SpellCard v-for="s in spells" :spell="s" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState"
import { onMounted, ref } from "vue";
import MonsterCard from "../components/InformationCards/MonsterCard.vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { informationService } from "../services/InformationService";
import SpellCard from "../components/SpellCard.vue";
export default {
  setup() {
    async function getApiMonsters() {
      try {
        await informationService.getApiMonsters()
      }
      catch (error) {
        logger.log('[getApiMonsters]', error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getApiMonsters()
    })
    const editable = ref("")
    return {
      editable,
      monsters: computed(() => AppState.monsters),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      async handleSubmit() {
        try {
          await informationService.getApiMonsters("", { search: editable.value })
        }
        catch (error) {
          logger.log('[handleSubmit]', error)
          Pop.error(error.message)
        }
      },

      async changePage(pageUrl) {
        try {
          await informationService.getApiMonsters(pageUrl)
        } catch (error) {
          Pop.error(error, '[changingPage]')
        }
      },

      async changeCategory(category) {

      }

    };
  },
  components: { MonsterCard, SpellCard }
};
</script>

<style lang="scss" scoped>
.information-page {
  height: 100vh;
}

button {


  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 2rem;
}

.bg-transparent {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7px);
}

.scrollable {
  overflow-y: auto;
  height: 85vh;
}

.h-30 {
  height: 15vh;
}

.input-width {
  width: 70%;
}
</style>