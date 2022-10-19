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
              <RaceCard v-if="category == 'races'" v-for="r in races" :key="r.slug" :race="r" />
              <ClassCard v-if="category == 'classes'" v-for="c in classes" :key="c.slug" :dndClass="c" />
              <MagicItemCard v-if="category == 'magicitems'" v-for="m in magicitems" :key="m.slug" :magicitem="m" />
              <WeaponCard v-if="category == 'weapons'" v-for="w in weapons" :key="w.slug" :weapon="w" />
              <ArmorCard v-if="category == 'armor'" v-for="a in armor" :key="a.slug" :armor="a" />
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
import RaceCard from "../components/InformationCards/RaceCard.vue";
import ClassCard from "../components/InformationCards/ClassCard.vue";
import MagicItemCard from "../components/InformationCards/MagicItemCard.vue";
import WeaponCard from "../components/InformationCards/WeaponCard.vue";
import ArmorCard from "../components/InformationCards/ArmorCard.vue";

export default {
  setup() {
    const editable = ref("")
    return {
      editable,
      monsters: computed(() => AppState.monsters),
      spells: computed(() => AppState.spells),
      races: computed(() => AppState.races),
      classes: computed(() => AppState.classes),
      magicitems: computed(() => AppState.magicitems),
      weapons: computed(() => AppState.weapons),
      armor: computed(() => AppState.armor),
      category: computed(() => AppState.activeCategory),

    };
  },
  components: { MonsterCard, SpellCard, SearchPagination, CategoryDropdown, RaceCard, ClassCard, MagicItemCard, WeaponCard, ArmorCard }
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