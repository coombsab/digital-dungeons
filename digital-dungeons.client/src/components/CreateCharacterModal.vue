<template>
  <!-- <div
    class="monster-card p-3 rounded elevation-2 text-light selectable"
    title="See Monster Details"
    data-bs-toggle="modal"
    :data-bs-target="'#monsterDetailModal' + monster.slug"
    @click="setActiveMonster()"
  >
    <span class="text-shadow">{{ monster.name }}</span>
  </div> -->

  <div
    class="modal fade"
    id="addCharacterModal"
    tabindex="-1"
    aria-labelledby="monsterDetailModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div
        class="modal-content text-visible bg-warning"
        :style="
          monster.image ? { backgroundImage: `url(${monster.image})` } : ''
        "
      >
        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title fs-5" id="monsterDetailModal">
            {{ monster?.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body bg-transparent-modal" v-if="monster">
          <form action="submit" class="card" @submit.prevent="addMonster()">
            <div class="card-body text-start">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="editable.name"
                  required
                  name="name"
                  placeholder="Name:"
                  maxlength="50"
                />
                <label for="name">Name:</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  v-model="editable.hit_points"
                  required
                  name="hit_points"
                  placeholder="Hit Points:"
                  maxlength="50"
                />
                <label for="hit_points">Hit Points:</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="url"
                  class="form-control"
                  v-model="editable.coverImg"
                  name="coverImg"
                  placeholder="Cover Image:"
                  maxlength="10000"
                />
                <label for="coverImg">Cover Image:</label>
              </div>
              <div class="form-floating">
                <textarea
                  type="text"
                  class="form-control textarea-height"
                  v-model="editable.desc"
                  name="description"
                  style="resize: none"
                  placeholder="Description:"
                  maxlength="500"
                ></textarea>
                <label for="description">Description:</label>
              </div>
              <div class="text-end">
                <span>{{ editable.desc ? editable.desc.length : 0 }}</span>
                <span>/ 500</span>
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
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Create An Character!
              </button>
            </div>
          </form>
        </div>
        <div class="modal-body" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Monster } from "../models/Monster.js";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { monstersService } from "../services/MonstersService.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  props: {
    monster: { type: Monster, required: true },
  },
  setup(props) {
    const route = useRoute();
    return {
      route,
      encounter: computed(() => AppState.activeEncounter),
      account: computed(() => AppState.account),

      setActiveMonster() {
        AppState.activeMonster = props.monster;
      },
      async addMonster() {
        try {
          props.monster.encounterId = route.params.encounterId;
          console.log(props.monster);
          await monstersService.addMonsterToEncounter(props.monster);
          Pop.success(`You added ${props.monster.name} to your encounter`);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: rgba(37, 8, 60, 0.849);
  height: fit-content;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}

p {
  margin: 0;
}

.text-shadow {
  color: rgb(201, 154, 223);
  text-shadow: 1px 1px rgb(28, 51, 74), 0px 0px 5px rgb(136, 62, 147);
  font-weight: bold;
  letter-spacing: 0.08rem;
  font-family: "Morpheus";
  src: local("Morphues") url(./fonts/MORPHEUS.TTF) format("truetype");
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
  color: rgb(230, 225, 233);
  text-shadow: 1px 1px rgb(31, 47, 62), 0px 0px 5px rgb(34, 19, 37);
  font-weight: bold;
  letter-spacing: 0.08rem;
  font-family: "Morpheus";
  src: local("Morphues") url(./fonts/MORPHEUS.TTF) format("truetype");
}

.text-visible {
  color: rgb(213, 213, 213);
  text-shadow: 1px 1px rgb(28, 35, 42), 0px 0px 5px rgb(75, 96, 108);
  font-weight: bold;
  letter-spacing: 0.08rem;
  font-family: "Morpheus";
  src: local("Morphues") url(./fonts/MORPHEUS.TTF) format("truetype");
}

.text-visible:hover {
  color: rgb(184, 195, 202) !important;
}
</style>
