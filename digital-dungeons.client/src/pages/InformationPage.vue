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
          <div class="box">
            <!-- NOTE Search Functionality -->
            <SearchPagination />
            <!-- NOTE Info Cards -->
            <div class="elem2 scrollable p-3 d-flex flex-wrap gap-4">
              <MonsterCard v-if="category == 'monsters'" v-for="m in monsters" :key="m.slug" :monster="m" />
              <SpellCard v-if="category == 'spells'" v-for="s in spells" :key="s.slug" :spell="s" />
              <!-- TODO More Cards -->
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
import MonsterCard from "../components/InformationCards/MonsterCard.vue";
import SpellCard from "../components/InformationCards/SpellCard.vue";
import SearchPagination from "../components/SearchPagination.vue";
import CategoryDropdown from "../components/Information/CategoryDropdown.vue";
import { ref } from "vue";

export default {
  setup() {
    const editable = ref("")
    return {
      editable,
      monsters: computed(() => AppState.monsters),
      spells: computed(() => AppState.spells),
      // TODO More Computeds
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

.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.elem2 {
  flex-grow: 1;
}

.scrollable {
  overflow-y: auto;
}
</style>