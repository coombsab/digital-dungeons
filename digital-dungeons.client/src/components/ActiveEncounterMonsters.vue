<template>
  <!-- <div class="monster-card p-3 rounded elevation-2 text-light selectable" title="See Monster Details"
    data-bs-toggle="modal" :data-bs-target="'#monsterModal' + monster.slug" @click="">
    <span>{{monster.name}}</span>
  </div> -->

  <div class="col-md-3 d-flex justify-content-center mt-3">
    <div
      class="monster-card text-center text-visible selectable"
      title="See Monster Details"
      data-bs-toggle="modal"
      :data-bs-target="'#monsterModal' + monster.id"
      @click=""
      :style="monster.image ? { backgroundImage: `url(${monster.image})` } : ''"
    >
      <div class="muted-layer">
        <span>{{ monster.name }}</span>
        <span>{{ monster.}}</span>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    :id="'monsterModal' + monster.id"
    tabindex="-1"
    aria-labelledby="MonsterDetailsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div
        class="modal-content text-visible"
        :style="
          monster.image ? { backgroundImage: `url(${monster.image})` } : ''
        "
      >
        <div class="modal-header bg-transparent">
          <h1 class="modal-title fs-5" id="MonsterDetailsModalLabel">
            {{ monster?.name }}
          </h1>
          <button
            type="button"
            class="btn-visible text-visible"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body bg-transparent" v-if="monster">
          <div class="modal-body" v-if="monster">
            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Type</h6>
                <p>{{ monster.type }}</p>
              </div>
              <div>
                <h6 class="statistics">Subtype</h6>
                <p>{{ monster.subtype }}</p>
              </div>
              <div>
                <h6 class="statistics">Alignment</h6>
                <p>{{ monster.alignment }}</p>
              </div>
              <div>
                <h6 class="statistics">Health</h6>
                <p>{{ monster.hit_points }}</p>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Hit Dice</h6>
                <p>{{ monster.hit_dice }}</p>
              </div>
              <div>
                <h6 class="statistics">Languages</h6>
                <p>{{ monster.languages }}</p>
              </div>
              <div>
                <h6 class="statistics">Size</h6>
                <p>{{ monster.size }}</p>
              </div>
              <div>
                <h6 class="statistics">Challenge Rating</h6>
                <p>{{ monster.challenge_rating }}</p>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Strength</h6>
                <p>{{ monster.strength }}</p>
              </div>
              <div>
                <h6 class="statistics">Intelligence</h6>
                <p>{{ monster.intelligence }}</p>
              </div>
              <div>
                <h6 class="statistics">Wisdom</h6>
                <p>{{ monster.wisdom }}</p>
              </div>
              <div>
                <h6 class="statistics">Dexterity</h6>
                <p>{{ monster.dexterity }}</p>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Charisma</h6>
                <p>{{ monster.charisma }}</p>
              </div>
              <div>
                <h6 class="statistics">Constitution</h6>
                <p>{{ monster.constitution }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body bg-transparent" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
        <div class="modal-footer bg-transparent">
          <button
            type="button"
            class="btn-visible text-visible"
            data-bs-dismiss="modal"
            @click.stop="removeMonster(monster.id)"
          >
            Remove Monster
          </button>
          <button
            type="button"
            class="btn-visible text-visible"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Monster } from "../models/Monster.js";
import { monstersService } from "../services/MonstersService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    monster: { type: Monster, required: true },
  },
  setup(props) {
    return {
      async removeMonster(id) {
        try {
          const yes = await Pop.confirm(
            "Are you sure you want to delete this Encounter?"
          );
          if (!yes) {
            return;
          }
          await monstersService.removeMonster(id);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// .monster-card {
//   background-color: green;
//   height: fit-content;
//   margin-bottom: 1.5rem;
//   margin-top: .5rem;
// }

// p {
//   margin: 0;
// }

.monster-card {
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
  background-color: rgba(0, 0, 0, 0.639) !important;
}

.muted-layer {
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.639);
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
</style>
