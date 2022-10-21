<template>
  <!-- NOTE: MODAL -->
  <div class="modal fade" :id="'spellModal' + spell.slug" tabindex="-1" aria-labelledby="SpellDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-x1">

      <!-- School img -->
      <div class="modal-content text-visible bg-black"
        :style="spell.schoolImg ? {backgroundImage: `url(${spell.schoolImg})`} : ''">

        <!-- Spell header: name and level -->
        <div class="modal-header bg-transparent-modal">
          <div>
            <div>
              <h1 class="modal-title fs-5 mb-2 fs-3" id="SpellDetailsModalLabel">
                {{ spell?.name }}
              </h1>
            </div>

            <div v-if="spell.dnd_class" class="text-lighter">
              <p><em>{{spell.level}} {{ spell.school}}</em> <span>| {{spell.dnd_class}}</span></p>
            </div>
            <div v-else><em>{{spell.level}} {{ spell.school}}</em></div>
          </div>
        </div>



        <!-- Spell details/body -->
        <div class="modal-body bg-transparent-modal" v-if="spell">
          <div class="flex-wrap mb-3">
            <!-- Range -->
            <div v-if="spell.range" class="mb-3">
              <strong class="fs-4 text-visible text-shadow-darker">Range: </strong>
              <strong class="fs-5 text-lighter text-shadow">{{spell.range}}</strong>
            </div>
            <div v-else></div>


            <!-- Casting time -->
            <div v-if="spell.casting_time">
              <strong class="fs-4 text-visible text-shadow-darker">Casting Time: </strong>
              <strong class="fs-5 text-lighter text-shadow">{{spell.casting_time}}</strong>
            </div>
            <div v-else></div>

            <!-- Duration -->
            <div v-if="spell.duration">
              <strong class="fs-4 text-visible text-shadow-darker">Duration: </strong>
              <strong class="fs-5 text-lighter text-shadow">{{spell.duration}}</strong>
            </div>
            <div v-else></div>

            <!-- Components required -->
            <div v-if="spell.components" class="mb-4">
              <strong class="fs-4 text-visible text-shadow-darker">Components: </strong>
              <strong class="fs-5 text-lighter text-shadow">{{spell.components}}</strong>
            </div>
            <div v-else></div>


            <!-- Description of the spell -->
            <div v-if="spell.desc" class="mb-3">
              <strong class="fs-4 text-visible text-shadow-darker">Description: </strong>
              <strong class="fs-5 text-lighter text-shadow">{{spell.desc}}</strong>
            </div>
            <div v-else></div>


            <!-- At higher levels -->
            <div v-if="spell.higher_level" class="mb-5">
              <strong class="fs-4 text-visible text-shadow-darker">At higher levels: </strong>
              <strong class="fs-5 text-lighter text-shadow">{{spell.higher_level}}</strong>
            </div>
            <div v-else></div>
          </div>
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
import { Spell } from "../../models/Spell.js";

export default {
  props: {
    spell: { type: Spell, required: true }
  },
  setup() {
    return {}
  }
}
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

.modal-xl {
  width: 50vw !important;
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