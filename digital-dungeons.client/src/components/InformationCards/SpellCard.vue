<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="spell-card text-center text-visible selectable elevation-2 animate__animated animate__fadeIn"
    title="See Spell Details" data-bs-toggle="modal" :data-bs-target="'#spellModal' + spell.slug" @click=""
    :style="spell.schoolImg ? {backgroundImage: `url(${spell.schoolImg})`} : ''">
    <div class="muted-layer bg-transparent ">
      <span>{{ spell.name }}</span>
    </div>
  </div>

  <!-- NOTE: MODAL -->
  <div class="modal fade" :id="'spellModal' + spell.slug" tabindex="-1" aria-labelledby="SpellDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">

      <!-- School img -->
      <div class="modal-content text-visible bg-black"
        :style="spell.schoolImg ? {backgroundImage: `url(${spell.schoolImg})`} : ''">
        <div class="modal-header bg-transparent-modal">

          <!-- Spell header: name and level -->
          <div>
            <div>
              <h1 class="modal-title fs-5 mb-2" id="SpellDetailsModalLabel">
                {{ spell?.name }}
              </h1>
            </div>

            <div>
              <p><em>{{spell.level}} {{ spell.school}}</em> | {{spell.dnd_class}}</p>
            </div>
          </div>


          <!-- Dismiss modal -->
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal" aria-label="Close">
            X
          </button>
        </div>



        <!-- Spell details/body -->
        <div class="modal-body bg-transparent-modal" v-if="spell">
          <div class="flex-wrap mb-3">
            <div v-if="spell.range" class="mb-3">
              Range: {{spell.range}}
            </div>
            <div v-else></div>


            <div v-if="spell.casting_time">
              Casting Time: {{spell.casting_time}}
            </div>
            <div v-else></div>

            <div v-if="spell.duration">
              Duration: {{spell.duration}}
            </div>
            <div v-else></div>

            <div v-if="spell.components" class="mb-4">
              Components: {{spell.components}}
            </div>
            <div v-else></div>


            <div v-if="spell.desc" class="mb-3">
              Description: {{spell.desc}}
            </div>
            <div v-else></div>


            <div v-if="spell.higher_level">
              At higher levels: {{spell.higher_level}}
            </div>
            <div v-else></div>
          </div>



          <!-- <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Type</h6>
              <p>{{ spell.type}}</p>
            </div>
            <div>
              <h6 class="statistics">Subtype</h6>
              <p>{{ spell.subtype }}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{ spell.alignment }}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{ spell.hit_points }}</p>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Hit Dice</h6>
              <p>{{ spell.hit_dice }}</p>
            </div>
            <div>
              <h6 class="statistics">Languages</h6>
              <p>{{ spell.languages }}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{ spell.size }}</p>
            </div>
            <div>
              <h6 class="statistics">Challenge Rating</h6>
              <p>{{ spell.challenge_rating }}</p>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Strength</h6>
              <p>{{ spell.strength }}</p>
            </div>
            <div>
              <h6 class="statistics">Intelligence</h6>
              <p>{{ spell.intelligence }}</p>
            </div>
            <div>
              <h6 class="statistics">Wisdom</h6>
              <p>{{ spell.wisdom }}</p>
            </div>
            <div>
              <h6 class="statistics">Dexterity</h6>
              <p>{{ spell.dexterity }}</p>
            </div>

            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Charisma</h6>
                <p>{{ spell.charisma }}</p>
              </div>
              <div>
                <h6 class="statistics">Constitution</h6>
                <p>{{ spell.constitution }}</p>
              </div>
            </div>
          </div> -->
        </div>



        <!-- NOTE In Case Of No Data -->
        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no spell data available :(</p>
        </div>
        <div class="modal-footer bg-transparent-modal">
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { Spell } from '../../models/Spell.js';

export default {
  props: {
    spell: { type: Spell, required: true }
  },
  setup(props) {
    return {

    };
  },
};
</script>




<style lang="scss" scoped>
.spell-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  transition: 150ms linear;
}

.spell-card:hover {
  transform: scale(1.1);
}

bg-black {
  background-color: rgb(17, 17, 17);
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
  background-color: rgba(10, 10, 10, 0.576) !important;
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
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
}

// .text-visible {
//   color: rgb(216, 224, 229);
// }

// .text-visible:hover {
//   color: rgb(216, 224, 229) !important;
// }
</style>