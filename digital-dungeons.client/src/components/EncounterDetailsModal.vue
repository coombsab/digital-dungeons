<template>
  <div
    class="modal fade"
    id="encounterModal"
    tabindex="-1"
    aria-labelledby="encounterModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="encounterModalLabel">New Encounter</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card text-start">
            <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Encounter } from "../models/Encounter.js";

export default {
  props: {
    encounter: { type: Encounter, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
