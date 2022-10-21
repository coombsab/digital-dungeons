<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="magicitem-card text-center text-visible selectable elevation-2 animate__animated animate__fadeIn"
    title="See Magicitem Details" data-bs-toggle="modal" :data-bs-target="'#magicitemModal' + magicitem.slug" @click=""
    :style="magicitem.coverImg ? {backgroundImage: `url(${magicitem.coverImg})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ magicitem.name }}</span>
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
  setup(props) {
    return {};
  },
  components: { Markdown }

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
