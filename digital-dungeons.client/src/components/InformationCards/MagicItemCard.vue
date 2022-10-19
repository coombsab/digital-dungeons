<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="magicitem-card text-center text-visible selectable elevation-2" title="See Magicitem Details"
    data-bs-toggle="modal" :data-bs-target="'#magicitemModal' + magicitem.slug" @click=""
    :style="magicitem.image ? {backgroundImage: `url(${magicitem.image})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ magicitem.name }}</span>
    </div>
  </div>

  <!-- NOTE MODAL -->
  <div class="modal fade" :id="'magicitemModal' + magicitem.slug" tabindex="-1" aria-labelledby="MagicitemDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-visible bg-warning"
        :style="magicitem.image ? {backgroundImage: `url(${magicitem.image})`} : ''">

        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title fs-5" id="MagicitemDetailsModalLabel">
            {{ magicitem?.name }}
          </h1>
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal" aria-label="Close">
            X
          </button>
        </div>
        <div class="modal-body bg-transparent-modal" v-if="magicitem">

          <!-- <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Type</h6>
              <p>{{ magicitem.type}}</p>
            </div>
            <div>
              <h6 class="statistics">Subtype</h6>
              <p>{{ magicitem.subtype }}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{ magicitem.alignment }}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{ magicitem.hit_points }}</p>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Hit Dice</h6>
              <p>{{ magicitem.hit_dice }}</p>
            </div>
            <div>
              <h6 class="statistics">Languages</h6>
              <p>{{ magicitem.languages }}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{ magicitem.size }}</p>
            </div>
            <div>
              <h6 class="statistics">Challenge Rating</h6>
              <p>{{ magicitem.challenge_rating }}</p>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Strength</h6>
              <p>{{ magicitem.strength }}</p>
            </div>
            <div>
              <h6 class="statistics">Intelligence</h6>
              <p>{{ magicitem.intelligence }}</p>
            </div>
            <div>
              <h6 class="statistics">Wisdom</h6>
              <p>{{ magicitem.wisdom }}</p>
            </div>
            <div>
              <h6 class="statistics">Dexterity</h6>
              <p>{{ magicitem.dexterity }}</p>
            </div>



            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Charisma</h6>
                <p>{{ magicitem.charisma }}</p>
              </div>
              <div>
                <h6 class="statistics">Constitution</h6>
                <p>{{ magicitem.constitution }}</p>
              </div>
            </div>
          </div> -->
        </div>
        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no magicitem data available :(</p>
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
import { MagicItem } from "../../models/MagicItem.js";

export default {
  props: {
    magicitem: { type: MagicItem, required: true },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.magicitem-card {
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
</style>
