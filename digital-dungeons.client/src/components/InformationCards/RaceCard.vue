<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="race-card text-center text-visible selectable elevation-2" title="See Race Details" data-bs-toggle="modal"
    :data-bs-target="'#raceModal' + race.slug" @click=""
    :style="race.coverImg ? {backgroundImage: `url(${race.coverImg})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ race?.name }}</span>
    </div>
  </div>

  <!-- NOTE MODAL -->
  <div class="modal fade" :id="'raceModal' + race.slug" tabindex="-1" aria-labelledby="RaceDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content text-visible bg-warning"
        :style="race.coverImg ? {backgroundImage: `url(${race.coverImg})`} : ''">

        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title fs-5" id="RaceDetailsModalLabel">
            {{ race?.name }}
          </h1>
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal" aria-label="Close">
            X
          </button>
        </div>
        <div class="modal-body bg-transparent-modal" v-if="race">
          <div class="d-flex flex-wrap mb-3">
            <div>
              <p>{{ race.age}}</p>
            </div>
            <div>
              <p>{{ race.alignment}}</p>
            </div>
            <div>
              <p>{{ race.speed_desc}}</p>
            </div>
            <div>
              <p>{{ race.languages}}</p>
            </div>
            <div>
              <p>{{ race.vision}}</p>
            </div>
            <div>
              <p>{{ race.traits}}</p>
            </div>
          </div>
        </div>
        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no race data available :(</p>
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
import { Race } from "../../models/Race.js";

export default {
  props: {
    race: { type: Race, required: true },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.race-card {
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
