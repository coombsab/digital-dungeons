<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="dndClass-card text-center text-visible selectable elevation-2 animate__animated animate__fadeIn"
    title="See DndClass Details" data-bs-toggle="modal" :data-bs-target="'#dndClassModal' + dndClass.slug" @click=""
    :style="dndClass.coverImg ? {backgroundImage: `url(${dndClass.coverImg})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ dndClass.name }}</span>
    </div>
  </div>
</template>







<script>
import { DndClass } from "../../models/DndClass.js";
import Markdown from 'vue3-markdown-it'

export default {
  props: {
    dndClass: { type: DndClass, required: true },
  },
  setup(props) {
    return {};
  },
  components: { Markdown }
};
</script>






<style lang="scss" scoped>
.dndClass-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  transition: 150ms linear;
}

.dndClass-card:hover {
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

.h-80 {
  max-height: 80vh;
}

.scrollable {
  max-height: 60vh;
  overflow-y: auto;
}

// .class-details {
// em {
//   background-color: rgba(0, 128, 128, 0.232);
//   padding: .015rem;
//   border-radius: 5px;
// }
// }
</style>