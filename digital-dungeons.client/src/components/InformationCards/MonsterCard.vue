<template>
  <!-- ANCHOR DISPLAY CARD -->
  <div class="monster-card text-center text-visible selectable elevation-2" title="See Monster Details"
    data-bs-toggle="modal" :data-bs-target="'#monsterModal' + monster.slug" @click=""
    :style="monster.image ? {backgroundImage: `url(${monster.image})`} : ''">
    <div class="muted-layer bg-transparent">
      <span>{{ monster.name }}</span>
    </div>
  </div>
</template>

<script>
import { Monster } from "../../models/Monster.js";

export default {
  props: {
    monster: { type: Monster, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  transition: 150ms linear;
}

.monster-card:hover {
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
  border-bottom: 1px solid rgb(172, 170, 170);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-visible {
  color: rgb(216, 224, 229) !important;
}

.text-visible:hover {
  color: rgb(216, 224, 229) !important;
}

.text-light:hover {
  color: rgb(216, 224, 229) !important;
}

.modal-xl {
  width: 70vw !important;
}

.scrollable {
  overflow-y: auto;
  max-height: 70vh;
}

// .modal {
//   position: relative;

//   .modal-dialog {
//     position: absolute;
//     right: 50%;
//     width: 70vw !important;
//   }
// }
</style>
