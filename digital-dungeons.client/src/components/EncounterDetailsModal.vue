<template>

  <div class="modal fade" id="encounterModal" tabindex="-1" aria-labelledby="encounterModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-secondary">
        <div class="modal-header">
          <h5 class="modal-title" id="encounterModalLabel">{{encounter.name}}</h5>
          <button type="button" class="btn text-white py-1" data-bs-dismiss="modal" aria-label="Close"><i
              class="mdi mdi-close fs-3"></i></button>
        </div>
        <div class="modal-body container-fluid text-secondary">
          <div class="card text-start row">
            <div class="card-body">

              <p class="card-text">{{encounter.desc}}</p>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <div class="d-flex justify-content-between">
              <span>{{encounter.musicUrl}}</span>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Encounter } from '../models/Encounter.js';

export default {
  props: {
    encounter: { type: Encounter, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>