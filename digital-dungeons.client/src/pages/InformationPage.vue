<template>
  <div class="information-page">
    <div class="container-fluid">
      <div class="row">
        <!-- NOTE Buttons -->
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
              aria-expanded="false">{{category ? category.toUpperCase() : 'Select Category'}}</button>
            <ul class="dropdown-menu">
              <li class="dropdown-item" @click="changeCategory('monsters')">
                Monsters
              </li>
              <li class="dropdown-item" @click="changeCategory('spells')">
                Spells
              </li>
              <li class="dropdown-item" @click="changeCategory('races')">
                Races
              </li>
              <li class="dropdown-item" @click="changeCategory('classes')">
                Classes
              </li>
              <li class="dropdown-item" @click="changeCategory('magicitems')">
                Magic Items
              </li>
              <li class="dropdown-item" @click="changeCategory('weapons')">
                Weapons
              </li>
              <li class="dropdown-item" @click="changeCategory('armor')">
                Armor
              </li>
              <!-- TODO add these searches -->
              <!-- <li class="dropdown-item" @click="changeCategory('')">
                Campaigns
              </li>
              <li class="dropdown-item" @click="changeCategory('')">
                Encounters
              </li> -->
            </ul>
          </div>
        </div>
        <div class="col-8 bg-transparent">
          <!-- NOTE Search Functionality -->
          <SearchPagination />
          <div class="col-12">
            <!-- NOTE Info Cards -->
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
import SpellCard from "../components/InformationCards/SpellCard.vue";
import SearchPagination from "../components/SearchPagination.vue";

export default {
  setup() {
    async function getApiMonsters() {
      try {
        await informationService.getApiInfo("monsters")
        informationService.setActiveCategory("monsters")
      }
      catch (error) {
        logger.log('[getApiInfo]', error)
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
      category: computed(() => AppState.activeCategory),
      async changeCategory(category) {
        try {
          await informationService.getApiInfo(category)
          informationService.setActiveCategory(category)
        }
        catch (error) {
          logger.log("[changeCategory]", error)
          Pop.error(error.message)
        }
      }

    };
  },
  components: { MonsterCard, SpellCard, SearchPagination }
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
</style>