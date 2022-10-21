<template>
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
          <div>
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


            <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpeed"
              aria-expanded="false" aria-controls="collapseSpeed">
              <h5 class="text-info">Speed</h5>
            </button>
            <div class="collapse" id="collapseSpeed">
              <div class="d-flex justify-content-around">
                <!-- NOTE Speed is weird, for help ask Talor -->
                <div v-for="(value, property) in monster.speed" :key="property">
                  <span class="d-flex">
                    <p class="text-info me-1">{{property}}:</p>
                    <p>{{value}}{{typeof value == 'number' ? 'ft' : ''}}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>


          <!-- SECTION INFO -->
          <h4 class="statistics text-info">Data</h4>
          <div>
            <!-- STUB STATS -->


            <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStats"
              aria-expanded="false" aria-controls="collapseStats">
              <h5 class="text-info">Stats</h5>
            </button>
            <div class="collapse" id="collapseStats">
              <div class="d-flex justify-content-around">
                <span class="d-flex" title="Strength">
                  <p class="me-1 text-info">Str:</p>
                  <p>{{monster.strength}}</p>
                </span>
                <span class="d-flex" title="Dexterity">
                  <p class="me-1 text-info">Dex:</p>
                  <p>{{monster.dexterity}}</p>
                </span>
                <span class="d-flex" title="Constitution">
                  <p class="me-1 text-info">Con:</p>
                  <p>{{monster.constitution}}</p>
                </span>
                <span class="d-flex" title="Intelligence">
                  <p class="me-1 text-info">Int:</p>
                  <p>{{monster.intelligence}}</p>
                </span>
                <span class="d-flex" title="Wisdom">
                  <p class="me-1 text-info">Wis:</p>
                  <p>{{monster.wisdom}}</p>
                </span>
                <span class="d-flex" title="Charisma">
                  <p class="me-1 text-info">Cha:</p>
                  <p>{{monster.charisma}}</p>
                </span>
              </div>
            </div>
            <!-- STUB SAVES -->


            <div>
              <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSaves"
                aria-expanded="false" aria-controls="collapseSaves">
                <h5 class="text-info">Save Stats</h5>
              </button>
            </div>
            <div class="collapse" id="collapseSaves">
              <div class="d-flex justify-content-around">
                <span v-if="monster.strength_save" class="d-flex" title="Strength Save">
                  <p class="me-1 text-info">Str:</p>
                  <p>{{monster.strength_save}}</p>
                </span>
                <span v-if="monster.dexterity_save" class="d-flex" title="Dexterity Save">
                  <p class="me-1 text-info">Dex:</p>
                  <p>{{monster.dexterity_save}}</p>
                </span>
                <span v-if="monster.constitution_save" class="d-flex" title="Constitution Save">
                  <p class="me-1 text-info">Con:</p>
                  <p>{{monster.constitution_save}}</p>
                </span>
                <span v-if="monster.intelligence_save" class="d-flex" title="Intelligence Save">
                  <p class="me-1 text-info">Int:</p>
                  <p>{{monster.intelligence_save}}</p>
                </span>
                <span v-if="monster.wisdom_save" class="d-flex" title="Wisdom Save">
                  <p class="me-1 text-info">Wis:</p>
                  <p>{{monster.wisdom_save}}</p>
                </span>
                <span v-if="monster.charisma_save" class="d-flex" title="Charisma Save">
                  <p class="me-1 text-info">Cha:</p>
                  <p>{{monster.charisma_save}}</p>
                </span>
              </div>
            </div>
            <!-- STUB ARMOR -->


            <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseArmor"
              aria-expanded="false" aria-controls="collapseArmor">
              <h5 class="text-info">Armor</h5>
            </button>
            <div class="collapse" id="collapseArmor">
              <span class="d-flex">
                <p class="me-1">Class: {{monster.armor_class}} -</p>
                <p>{{monster.armor_desc}}</p>
              </span>
            </div>
          </div>
          <!-- STUB FEATURES AND TRAITS -->


          <button class="btn selectable" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFeaturesAndTraits" aria-expanded="false" aria-controls="collapseFeaturesAndTraits">
            <h5 class="text-info">Features & Traits</h5>
          </button>

          <div class="collapse" id="collapseFeaturesAndTraits">
            <!-- SKILLS -->
            <p v-if="monster.skills" class="border-bottom border-1 text-info">Skills</p>
            <div v-if="monster.skills" class="d-flex flex-wrap">
              <div v-for="(value, property) in monster.skills" :key="property">
                <span class="d-flex me-2">
                  <p class=" me-1">{{property}}:</p>
                  <p>{{value}}</p>
                </span>
              </div>
            </div>

            <!-- SENSES -->
            <div v-if="monster.senses">
              <p class="border-bottom border-1 text-info">Senses</p>
              <p>{{monster.senses}}</p>
            </div>

            <!-- LANGUAGES -->
            <div v-if="monster.languages">
              <p class="border-bottom border-1 text-info">Languages</p>
              <p>{{monster.languages}}</p>
            </div>

            <!-- TRAITS -->
            <div class="d-flex justify-content-around flex-wrap">
              <span class="d-flex flex-wrap">
                <p class="text-info me-1">Vulnerabilities:</p>
                <p>{{monster.damage_vulnerabilities}}</p>
              </span>
              <span class="d-flex flex-wrap">
                <p class="text-info me-1">Resistances:</p>
                <p>{{monster.damage_resistances}}</p>
              </span>
              <span class="d-flex flex-wrap">
                <p class="text-info me-1">Damage Immuntities:</p>
                <p>{{monster.damage_immunities}}</p>
              </span>
              <span class="d-flex flex-wrap">
                <p class="text-info me-1">Condition Immunities:</p>
                <p>{{monster.condition_immunities}}</p>
              </span>
            </div>
          </div>


          <!-- SECTION PERFORMANCES -->
          <h4 class="statistics text-info">Performances</h4>
          <div>
            <!-- STUB LEGENDARY -->


            <div v-if="monster.legendary_desc || monster.legendary_actions">
              <button v-if="monster.legendary_desc || monster.legendary_actions" class="btn selectable" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseLegendary" aria-expanded="false"
                aria-controls="collapseLegendary">
                <h5 class="text-warning ">Legendary Info</h5>
              </button>
            </div>
            <div v-if="monster.legendary_desc || monster.legendary_actions" class="collapse" id="collapseLegendary">
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
            <!-- STUB ACTIONS -->


            <div>
              <button class="btn selectable" type="button" data-bs-toggle="collapse" data-bs-target="#collapseActions"
                aria-expanded="false" aria-controls="collapseActions">
                <h5 v-if="monster.actions" class="me-1 text-info">Actions</h5>
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
                <h5 v-if="monster.reactions" class="me-1 text-info">Reactions</h5>
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
                <h5 v-if="monster.special_abilities" class="me-1 text-info">Special Abilities</h5>
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
          </div>
          <!-- STUB SAVES -->


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
    return {}
  }
}
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