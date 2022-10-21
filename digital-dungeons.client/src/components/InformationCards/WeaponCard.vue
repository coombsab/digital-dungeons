<template>
  <!-- NOTE DISPLAY CARD -->
  <div class="weapon-card text-center text-visible selectable elevation-2 animate__animated animate__fadeIn"
    title="See Weapon Details" data-bs-toggle="modal" :data-bs-target="'#weaponModal' + weapon.slug" @click=""
    :style="weapon.coverImg ? {backgroundImage: `url(${weapon.coverImg})`} : ''">
    <div class="muted-layer bg-transparent ">
      <span>{{ weapon.name }}</span>
    </div>
  </div>
</template>






<script>
import { Weapon } from "../../models/Weapon.js";

export default {
  props: {
    weapon: { type: Weapon, required: true },
  },
  setup(props) {
    return {};
  },
};
</script>






<style lang="scss" scoped>
.weapon-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  transition: 150ms linear;
}

.weapon-card:hover {
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

.statistics2 {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
}

.text-visible {
  color: rgb(216, 224, 229);
}

.text-visible:hover {
  color: rgb(216, 224, 229) !important;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(229, 222, 221);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}

.text-info {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(229, 222, 221);
  font-weight: bold;
  letter-spacing: 0.08rem
}

.text-light {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(229, 222, 221);
  font-weight: bold;
  letter-spacing: 0.08rem
}

.h-80 {
  height: 80vh;
}
</style>
