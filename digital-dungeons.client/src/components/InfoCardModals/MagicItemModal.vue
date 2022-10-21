<template>
  <!-- NOTE MODAL -->
  <div class="modal fade" :id="'magicitemModal' + magicitem.slug" tabindex="-1"
    aria-labelledby="MagicitemDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content text-visible bg-warning"
        :style="magicitem.coverImg ? {backgroundImage: `url(${magicitem.coverImg})`} : ''">


        <!-- Name + rarity -->
        <div class="modal-header bg-transparent-modal">
          <div class="d-flex justify-content-between align-items-center w-100 px-3 gap-3">
            <h3 class="modal-title m-0" id="MagicitemDetailsModalLabel">{{ magicitem?.name }}</h3>
            <p class="m-0">{{magicitem?.rarity}}</p>
          </div>
        </div>


        <!-- Description -->
        <div class="modal-body bg-transparent-modal d-flex align-items-center flex-wrap scrollable" v-if="magicitem">
          <div class="text-center w-100 pb-2">
            <h5>{{magicitem.requires_attunement.toUpperCase()}}</h5>
          </div>
          <Markdown :source="magicitem.desc" />
          <!-- <p class="description">{{ magicitem.desc }}</p> -->
        </div>




        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no magicitem data available :(</p>
        </div>
        <div class="modal-footer d-flex justify-content-between align-items-center gap-3 px-3 bg-transparent-modal">
          <p class="m-0">{{magicitem.type}}</p>
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
import Markdown from 'vue3-markdown-it'

export default {
  props: {
    magicitem: { type: MagicItem, required: true },
  },
  setup() {
    return {}
  }
}
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
  transition: 150ms linear;
}

.modal-body {
  max-height: 60vh;
}

.magicitem-card:hover {
  transform: scale(1.1);
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
  background-color: rgba(10, 10, 10, 0.75) !important;
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

.scrollable {
  overflow-y: auto;
}

.modal-xl {
  width: 50vw !important;
}
</style>