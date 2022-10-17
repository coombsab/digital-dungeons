<template>
  <div class="spell-card p-3 rounded elevation-2 text-light selectable" title="See Spell Details" data-bs-toggle="modal"
    data-bs-target="#spellModal" @click="setActiveSpell()">
    <span>{{spell.name}}</span>
  </div>

  <div class="modal fade" id="spellModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{activeSpell?.name}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-if="activeSpell">
          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Hit Dice</h6>
              <p>{{activeSpell.hit_dice}}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{activeSpell.size}}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{activeSpell.alignment}}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{activeSpell.hit_points}}</p>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Type</h6>
              <p>{{activeSpell.type}}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{activeSpell.size}}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{activeSpell.alignment}}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{activeSpell.hit_points}}</p>
            </div>
          </div>
        </div>
        <div class="modal-body" v-else>
          <p>Sorry, there is no spell data available :(</p>
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
// import { spellsService } from '../services/SpellsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
  props: {
    sp: { type: Object, required: true }
  },
  setup(props) {
    return {
      activeSpell: computed(() => AppState.activeSpell),

      setActiveSpell() {
        try {
          const spellSlug = props.spell.slug
          // spellsService.setActiveSpell(spellSlug)
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
.spell-card {
  background-color: green;
  height: fit-content;
  margin-bottom: 1.5rem;
  margin-top: .5rem;
}

p {
  margin: 0;
}

.statistics {
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>