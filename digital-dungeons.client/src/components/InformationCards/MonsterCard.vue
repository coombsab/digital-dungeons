<template>
  <!-- ANCHOR DISPLAY CARD -->
  <div class="monster-card text-center text-visible selectable elevation-2" title="See Monster Details"
    data-bs-toggle="modal" :data-bs-target="'#monsterModal' + monster.slug" @click=""
    :style="monster.image ? {backgroundImage: `url(${monster.image})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ monster.name }}</span>
    </div>
  </div>

  <!-- ANCHOR MODAL -->
  <div class="modal fade" :id="'monsterModal' + monster.slug" tabindex="-1" aria-labelledby="MonsterDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-l">
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
        <div class="modal-body bg-transparent-modal scrollable" v-if="monster">
          <!-- SECTION GENERAL -->
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
          <!-- STUB SPEED -->
          <!-- NOTE Speed is weird, for help ask Talor -->
          <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpeed"
            aria-expanded="false" aria-controls="collapseSpeed">
            <h4 class=" text-">Speed</h4>
          </button>
          <div class="collapse" id="collapseSpeed">
            <div class="d-flex justify-content-around">
              <div v-for="(value, property) in monster.speed" :key="property">
                <span class="d-flex">
                  <p class="text-info me-1">{{property}}:</p>
                  <p>{{value}}{{typeof value == 'number' ? 'ft' : ''}}</p>
                </span>
              </div>
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
              <p>{{monster.wisdom}}</p>
            </span>
            <span class="d-flex">
              <p class="me-1 text-info">Cha:</p>
              <p>{{monster.charisma}}</p>
            </span>
          </div>
          <!-- SECTION INFO -->
          <h4 class="statistics text-info">Info</h4>
          <!-- TODO perception, skills, vulnerabilities, resistances, immunities, sense, languages, saves -->
          <div class="d-flex flex-wrap">
            <!-- STUB ACTIONS -->
            <div>
              <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseActions"
                aria-expanded="false" aria-controls="collapseActions">
                <h4 v-if="monster.actions" class="me-1 text-info">Actions</h4>
              </button>
              <div class="collapse" id="collapseActions">
                <div v-if="monster.actions" v-for="actions in monster.actions">
                  <span class="d-flex flex-wrap">
                    <p class="text-info me-1">{{actions.name}}:</p>
                    <p>{{actions.desc}}</p>
                  </span>
                </div>
              </div>
            </div>
            <!-- STUB REACTIONS -->
            <div v-if="monster.reactions">
              <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReactions"
                aria-expanded="false" aria-controls="collapseReactions">
                <h4 v-if="monster.reactions" class="me-1 text-info">Reactions</h4>
              </button>
              <div class="collapse" id="collapseReactions">
                <div v-if="monster.reactions" v-for="reactions in monster.reactions">
                  <span class="d-flex flex-wrap">
                    <p class="text-info me-1">{{reactions.name}}:</p>
                    <p>{{reactions.desc}}</p>
                  </span>
                </div>
              </div>
            </div>
            <!-- STUB SPECIAL ABILITIES -->
            <div>
              <button class="btn selectable" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSpAbilities" aria-expanded="false" aria-controls="collapseSpAbilities">
                <h4 v-if="monster.special_abilities" class="me-1 text-info">Special Abilities</h4>
              </button>
              <div class="collapse" id="collapseSpAbilities">
                <div v-if="monster.special_abilities" v-for="special_abilities in monster.special_abilities">
                  <span class="d-flex flex-wrap">
                    <p class="text-info me-1">{{special_abilities.name}}:</p>
                    <p>{{special_abilities.desc}}</p>
                  </span>
                </div>
              </div>
            </div>
            <!-- STUB LEGENDARY -->
            <div v-if="monster.legendary_desc || monster.legendary_actions">
              <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLegendary"
                aria-expanded="false" aria-controls="collapseLegendary">
                <h4 class="text-warning ">Legendary Data</h4>
              </button>
              <div class="collapsible" id="collapseLegendary">
                <span class="d-flex flex-wrap">
                  <p v-if="monster.legendary_desc" class="me-1 mb-1 text-warning">Description:</p>
                  <p v-if="monster.legendary_desc">{{monster.legendary_desc}}</p>
                </span>
                <p v-if="monster.legendary_actions"
                  class="fs-5 border-bottom border-1 border-warning mb-1 me-1 text-warning">Actions</p>
                <div v-if="monster.legendary_actions" v-for="a in monster.legendary_actions">
                  <span class="d-flex flex-wrap">
                    <p class="text-warning me-1 mb-1">{{a.name}}:</p>
                    <p class="mb-1">{{a.desc}}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- SECTION SPELLS -->
          <h4 v-if="monster.spell_list[0]" class=" statistics text-info">Spells</h4>
          <div v-if="monster.spell_list[0]" v-for="spell in monster.spell_list">
            <a :href="spell.replace('api-beta.', '')" target="_blank"
              class="text-light">{{spell.replace('https://api-beta.open5e.com/spells/', '').replace('/',
              '').replace('-', '').toUpperCase()}}</a>
          </div>
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
  setup() {
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
  color: rgb(216, 224, 229) !important;
}

.text-visible:hover {
  color: rgb(216, 224, 229) !important;
}

.text-light:hover {
  color: rgb(216, 224, 229) !important;
}

.modal-xl {
  width: 70vw !important;
}

.scrollable {
  overflow-y: auto;
  max-height: 70vh;
}

// .modal {
//   position: relative;

//   .modal-dialog {
//     position: absolute;
//     right: 50%;
//     width: 70vw !important;
//   }
// }
</style>
