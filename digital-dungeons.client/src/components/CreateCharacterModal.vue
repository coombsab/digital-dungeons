<template>
  <div class="modal fade" id="addCharacterModal" tabindex="-1" aria-labelledby="monsterDetailModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-visible bg-warning" :style=" monster?.image ? { backgroundImage: `url(${monster.image})` } : ''">
        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title fs-5" id="monsterDetailModal">
            {{ monster?.name }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-transparent-modal">
          <form action="submit" class="card" @submit.prevent="addMonster()">
            <div class="card-body text-start">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="editable.name" required name="name" placeholder="Name:"
                  maxlength="50" />
                <label for="name">Name:</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" v-model="editable.hit_points" required name="hit_points"
                  placeholder="Hit Points:" maxlength="50" />
                <label for="hit_points">Hit Points:</label>
              </div>
              <div class="form-floating mb-3">
                <input type="url" class="form-control" v-model="editable.coverImg" name="coverImg"
                  placeholder="Cover Image:" maxlength="10000" />
                <label for="coverImg">Cover Image:</label>
              </div>
              <div class="form-floating mb-3">
                <textarea type="text" class="form-control textarea-height" v-model="editable.desc" name="description"
                  style="resize: none" placeholder="Description:" maxlength="500"></textarea>
                <label for="description">Description:</label>
              </div>
              <div class="form-floating">
                <select type="select" class="form-select" v-model="editable.characterType" name="characterType"
                  aria-label="Character Type Selection">
                  <option value="player">Player</option>
                  <option value="npc">Non Player Character</option>
                </select>
                <label for="characterType">Select Character Type</label>
              </div>
              <div class="text-end">
                <span>{{ editable.desc ? editable.desc.length : 0 }}</span>
                <span>/ 500</span>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Create An Character!
              </button>
            </div>
          </form>
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
import { computed, ref } from "vue";

export default {
  // props: {
  //   monster: { type: Monster, required: true },
  // },
  setup(props) {
    let editable = ref({});
    const route = useRoute();
    return {
      editable,
      route,
      encounter: computed(() => AppState.activeEncounter),
      account: computed(() => AppState.account),

      // setActiveMonster() {
      //   AppState.activeMonster = props.monster;
      // },
      async addMonster() {
        try {
          console.log("Trying to make something");
          // props.monster.encounterId = route.params.encounterId;
          editable.value.encounterId = route.params.encounterId;
          await monstersService.addMonsterToEncounter(editable.value);
          Pop.success(`You added ${editable.value.name} to your encounter`);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
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
