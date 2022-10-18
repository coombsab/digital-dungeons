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
          <CategoryDropdown :category="category" />
        </div>
        <div class="col-8 bg-transparent">
          <!-- NOTE Search Functionality -->
          <SearchPagination />
          <div class="col-12">
            <div v-if="!category" class="scrollable fs-1 text-visible text-center pt-5">
              Please select a category
            </div>
            <!-- NOTE Info Cards -->
            <div v-else class="info-content px-3 scrollable d-flex flex-wrap gap-4">
              <MonsterCard v-for="m in monsters" :key="m.slug" :monster="m" />
              <!-- <SpellCard v-for="s in spells" :spell="s" /> -->
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
import CategoryDropdown from "../components/Information/CategoryDropdown.vue";

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

    // onMounted(() => {
    //   getApiMonsters()
    // })
    const editable = ref("")
    return {
      editable,
      monsters: computed(() => AppState.monsters),
      category: computed(() => AppState.activeCategory),

    };
  },
  components: { MonsterCard, SpellCard, SearchPagination, CategoryDropdown }
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