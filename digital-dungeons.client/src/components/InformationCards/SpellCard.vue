<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="spell-card text-center text-visible selectable elevation-2" title="See Spell Details"
    data-bs-toggle="modal" :data-bs-target="'#spellModal' + spell.slug" @click=""
    :style="spell.schoolImg ? {backgroundImage: `url(${spell.schoolImg})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ spell.name }}</span>
    </div>
  </div>

  <!-- NOTE MODAL -->
  <div class="modal fade" :id="'spellModal' + spell.slug" tabindex="-1" aria-labelledby="SpellDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-visible bg-black"
        :style="spell.schoolImg ? {backgroundImage: `url(${spell.schoolImg})`} : ''">
        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title fs-5" id="SpellDetailsModalLabel">
            {{ spell?.name }}
          </h1>
          <div class="d-flex justify-content-around gap-3">
            <span>{{spell?.duration}}</span>
            <span>{{spell?.range}}</span>
          </div>
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal" aria-label="Close">
            X
          </button>
        </div>
        <div class="modal-body bg-transparent-modal" v-if="spell">
          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">School</h6>
              <p>{{ spell.school}}</p>
            </div>
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