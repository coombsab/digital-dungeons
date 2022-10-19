<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="armor-card text-center text-visible selectable elevation-2" title="See Armor Details"
    data-bs-toggle="modal" :data-bs-target="'#armorModal' + armor.slug" @click=""
    :style="armor.coverImg ? {backgroundImage: `url(${armor.coverImg})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ armor.name }}</span>
    </div>
  </div>

  <!-- NOTE MODAL -->
  <div class="modal fade" :id="'armorModal' + armor.slug" tabindex="-1" aria-labelledby="ArmorDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-visible bg-warning"
        :style="armor.coverImg ? {backgroundImage: `url(${armor.coverImg})`} : ''">

        <div class="modal-header bg-transparent-modal">
          <div class="d-flex justify-content-between align-items-center w-100 px-3">
            <h1 class="modal-title fs-5 m-0" id="ArmorDetailsModalLabel">{{armor?.name}}</h1>
            <p class="m-0">{{armor?.cost}}</p>
          </div>
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal" aria-label="Close">
            X
          </button>
        </div>
        <div class="modal-body bg-transparent-modal" v-if="armor">
          <div class="d-flex flex-wrap justify-content-around gap-3 mb-3">
            <div class="text-center">
              <h6 class="statistics">Category</h6>
              <p>{{ armor.category}}</p>
            </div>
            <div class="text-center">
              <h6 class="statistics">Armor Class</h6>
              <p>{{ armor.ac_string}}</p>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-around gap-3">
            <div class="text-center">
              <h6 class="statistics" v-if="armor.strength_requirement">Strength Required</h6>
              <p>{{ armor.strength_requirement}}</p>
            </div>
            <div class="text-center">
              <h6 v-if="armor.stealth_disadvantage">Stealth Disadvantage</h6>
              <!-- <p>{{ armor.stealth_disadvantage}}</p> -->
            </div>
          </div>
          <!-- <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Type</h6>
              <p>{{ armor.type}}</p>
            </div>
            <div>
              <h6 class="statistics">Subtype</h6>
              <p>{{ armor.subtype }}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{ armor.alignment }}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{ armor.hit_points }}</p>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Hit Dice</h6>
              <p>{{ armor.hit_dice }}</p>
            </div>
            <div>
              <h6 class="statistics">Languages</h6>
              <p>{{ armor.languages }}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{ armor.size }}</p>
            </div>
            <div>
              <h6 class="statistics">Challenge Rating</h6>
              <p>{{ armor.challenge_rating }}</p>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Strength</h6>
              <p>{{ armor.strength }}</p>
            </div>
            <div>
              <h6 class="statistics">Intelligence</h6>
              <p>{{ armor.intelligence }}</p>
            </div>
            <div>
              <h6 class="statistics">Wisdom</h6>
              <p>{{ armor.wisdom }}</p>
            </div>
            <div>
              <h6 class="statistics">Dexterity</h6>
              <p>{{ armor.dexterity }}</p>
            </div>



            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Charisma</h6>
                <p>{{ armor.charisma }}</p>
              </div>
              <div>
                <h6 class="statistics">Constitution</h6>
                <p>{{ armor.constitution }}</p>
              </div>
            </div>
          </div> -->
        </div>
        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no armor data available :(</p>
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
import { Armor } from "../../models/Armor.js";

export default {
  props: {
    armor: { type: Armor, required: true },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.armor-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
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
  border-bottom: 1px solid gray;
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

h6 {
  color: var(--info);
}
</style>
