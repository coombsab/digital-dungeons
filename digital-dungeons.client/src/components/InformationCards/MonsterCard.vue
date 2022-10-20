<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="monster-card text-center text-visible selectable elevation-2" title="See Monster Details"
    data-bs-toggle="modal" :data-bs-target="'#monsterModal' + monster.slug" @click=""
    :style="monster.image ? {backgroundImage: `url(${monster.image})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ monster.name }}</span>
    </div>
  </div>

  <!-- NOTE MODAL -->
  <div class="modal fade" :id="'monsterModal' + monster.slug" tabindex="-1" aria-labelledby="MonsterDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-visible bg-warning"
        :style="monster.image ? {backgroundImage: `url(${monster.image})`} : ''">
        <!-- SECTION HEADER -->
        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title text-info fs-5" id="MonsterDetailsModalLabel">
            {{ monster?.name }}
          </h1>
          <div v-if="monster.challenge_rating" class="d-flex align-items-center">
            <p class="text-info text-shadow me-1 my-auto">Challenge Rating:</p>
            <p class=" my-auto">{{monster.challenge_rating}}</p>
          </div>
        </div>
        <!-- SECTION GENERAL -->
        <div class="modal-body bg-transparent-modal" v-if="monster">
          <h4 class="statistics text-info">General</h4>
          <div class="d-flex justify-content-evenly">
            <div class="text-center">
              <span class="d-flex">
                <p class="me-1 text-info">Type:</p>
                <p>{{monster.type}} </p>
              </span>
              <span class="d-flex">
                <p class="me-1 text-info">Alignment:</p>
                <p>{{monster.alignment}} </p>
              </span>
            </div>
            <div class="text-center">
              <span class="d-flex">
                <p class="text-info me-1">Size:</p>
                <p>{{monster.size}}</p>
              </span>
              <div class="d-flex">
                <span class="d-flex">
                  <p class="text-info me-1">HP:</p>
                  <p class="me-2">{{monster.hit_points}}</p>
                </span>
                <p class="me-1 text-info">Hit Dice:</p>
                <p class="">{{monster.hit_dice}}</p>
              </div>
            </div>
          </div>
          <!-- SECTION SPEED -->
          <!-- NOTE Speed is weird, for help ask Talor or Sam -->
          <h5 class="border-bottom border-1 text-info">Speed</h5>
          <div class="d-flex justify-content-around">
            <div v-for="(value, property) in monster.speed" :key="property">
              <span class="d-flex">
                <p class="text-info me-1">{{property}}:</p>
                <p>{{value}}{{typeof value == 'number' ? 'ft' : ''}}</p>
              </span>
            </div>
          </div>
          <!-- SECTION STATS -->
          <h4 class="statistics text-info">Stats</h4>
          <div class="d-flex justify-content-around">
            <span class="d-flex">
              <p class="me-1 text-info">Str:</p>
              <p>{{monster.strength}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-info">Dex:</p>
              <p>{{monster.dexterity}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-info">Con:</p>
              <p>{{monster.constitution}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-info">Int:</p>
              <p>{{monster.intelligence}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-info">Wis:</p>
              <p>{{monster.widsom}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-info">Cha:</p>
              <p>{{monster.charisma}}</p>
            </span>
          </div>
          <!-- SECTION INFO -->
          <h4 class="statistics text-info">Info</h4>
          <span class="d-flex">
            <p class="me-1 text-info">Actions:</p>
            <p></p>
          </span>
          <span class="d-flex">
            <p class="me-1 text-info">Reactions:</p>
            <p></p>
          </span>
          <span class="d-flex">
            <p class="me-1 text-info">Special Abilities:</p>
            <p></p>
          </span>
          <!-- STUB LEGENDARY -->
          <div v-if="monster.legendary_desc || monster.legendary_abilities">
            <h5 class="text-warning border-bottom border-1 ">Legendary</h5>
            <span class="d-flex">
              <p class="me-1 mb-1 text-warning">Description:</p>
              <p>{{monster.legendary_desc}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-warning">Abilities:</p>
              <p>{{monster.legendary_abilities}}</p>
            </span>
          </div>
          <!-- SECTION SPELlS -->
          <h4 class=" statistics text-info">Spells</h4>




        </div>
        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
        <div class="modal-footer d-flex justify-content-between bg-transparent-modal">

          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Monster } from "../../models/Monster.js";

export default {
  props: {
    monster: { type: Monster, required: true },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  transition: 150ms linear;
}

.monster-card:hover {
  transform: scale(1.1);
}

.modal-content {
  background-position: center;
  background-size: cover;
}

.bg-transparent {
  background-color: rgba(10, 10, 10, 0.804) !important;
}

.bg-transparent:hover {
  background-color: rgba(10, 10, 10, 0.303) !important;
}

.bg-transparent-modal {
  background-color: rgba(10, 10, 10, 0.442) !important;
}

.muted-layer {
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 0.5rem;
}

.statistics {
  border-bottom: 1px solid rgb(172, 170, 170);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-visible {
  color: rgb(216, 224, 229);
}

.text-visible:hover {
  color: rgb(216, 224, 229) !important;
}

// .modal-xl {
//   width: 50vw !important;
// }
</style>
