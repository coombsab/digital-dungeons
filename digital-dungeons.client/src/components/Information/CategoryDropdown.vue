<template>
  <div class="component">
    <div class="dropdown">
      <button class="btn-visible back dropdown-toggle text-visible m-2 fs-4" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">{{category ? (category === 'magicitems' ? 'MAGIC ITEMS' :
        category.toUpperCase()) :
        "Select Category"}}</button>
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
</template>


<script>
import { AppState } from '../../AppState.js'
import { informationService } from '../../services/InformationService.js'
import Pop from '../../utils/Pop.js'

export default {
  props: {
    category: { type: String, requried: true }
  },
  setup() {
    return {
      async changeCategory(category) {
        try {
          informationService.setActiveCategory(category)
          await informationService.getApiInfo(category)
        }
        catch (error) {
          AppState.activeCategory = null
          Pop.error(error.message, "[changeCategory]")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>