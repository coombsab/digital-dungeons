<template>
  <div
    class="monster-card p-3 rounded elevation-2 text-light selectable"
    title="See Monster Details"
    data-bs-toggle="modal"
    :data-bs-target="'#monsterDetailModal' + monster.slug"
    @click=""
  >
    <span>{{ monster.name }}</span>
  </div>

  <div
    class="modal fade"
    :id="'monsterDetailModal' + monster.slug"
    tabindex="-1"
    aria-labelledby="monsterDetailModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="monsterDetailModal">
            {{ monster?.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="monster">
          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Hit Dice</h6>
              <p>{{ monster.hit_dice }}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{ monster.size }}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{ monster.alignment }}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{ monster.hit_points }}</p>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Type</h6>
              <p>{{ monster.type }}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{ monster.size }}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{ monster.alignment }}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{ monster.hit_points }}</p>
            </div>
          </div>
        </div>
        <div class="modal-body" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button class="btn btn-dark" @click.stop="addMonster()">
            Add Monster
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Monster } from "../models/Monster.js";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { informationService } from "../services/InformationService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { monstersService } from "../services/MonstersService.js";

export default {
  props: {
    monster: { type: Monster, required: true },
  },
  setup(props) {
    return {
      async addMonster() {
        try {
          let monster = AppState.activeMonster;
          await monstersService.addMonsterToEncounter(monster);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: green;
  height: fit-content;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
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