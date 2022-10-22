<template>
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
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.modal-content {
  background-position: center;
  background-size: cover;
}

.bg-transparent-modal {
  background-color: rgba(10, 10, 10, 0.442) !important;
}
</style>