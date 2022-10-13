<template>
  <div class="monster-card p-3 m-2 rounded elevation-2 text-light w-100" data-bs-toggle="modal"
    data-bs-target="#monsterModal" @click="setActiveMonster()">
    <span>{{monster.name}}</span>
  </div>

  <div class="modal fade modalZ" id="monsterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{activeMonster?.name}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-if="activeMonster">
          <img :src="activeMonster.image">
          <div class="d-flex flex-wrap justify-content-around">
            <p>Type</p>
            <p>Size</p>
            <p>Alignment</p>
            <p>Health</p>
          </div>
          <div class="d-flex flex-wrap justify-content-around">
            <p>{{activeMonster.type}}</p>
            <p>{{activeMonster.size}}</p>
            <p>{{activeMonster.alignment}}</p>
            <p>HP: {{activeMonster.hit_points}}</p>
          </div>




          <h6>{{activeMonster.desc}}</h6>

        </div>
        <div class="modal-body" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>




<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
import { monstersService } from '../services/MonstersService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
  props: {
    monster: { type: Object, required: true }
  },
  setup(props) {
    return {
      activeMonster: computed(() => AppState.activeMonster),

      async setActiveMonster() {
        try {
          console.log(props.monster)
          await monstersService.setActiveMonster(props.monster.url)
        } catch (error) {
          Pop.error(error)
          logger.log(error)
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: green;
  // backdrop-filter: blur(5px);  //paginate if using blur on each card as 300 cards lags
  width: fit-content;
}

.modalZ {
  z-index: 10000;
}
</style>
