<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="spell-card text-center text-visible selectable elevation-2 animate__animated animate__fadeIn"
    title="See Spell Details" data-bs-toggle="modal" :data-bs-target="'#spellModal' + spell.slug" @click=""
    :style="spell.schoolImg ? {backgroundImage: `url(${spell.schoolImg})`} : ''">
    <div class="muted-layer bg-transparent text-visible">
      <span>{{ spell.name }}</span>
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
.text-visible {
  color: rgb(225, 0, 255) !important;
}

.text-visible:hover {
  color: rgb(225, 0, 255) !important;
}

.text-lighter {
  color: rgb(110, 163, 255) !important;
}

.text-shadow {
  color: rgb(110, 163, 255);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(77, 121, 196);
  font-weight: bold;
  letter-spacing: 0.08rem
}

.text-shadow-darker {
  color: rgb(225, 0, 255);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(170, 8, 191);
  font-weight: bold;
  letter-spacing: 0.08rem
}

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

.bg-black {
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
</style>