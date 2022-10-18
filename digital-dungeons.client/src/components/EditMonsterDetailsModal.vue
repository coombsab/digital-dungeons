<template>
  <!-- Card/toggle that opens the modal below -->
  <div
    class="monster-card p-3 rounded elevation-2 text-light selectable"
    title="Edit Monster Details"
    data-bs-toggle="modal"
    :data-bs-target="'#editMonsterDetailModal' + monster.slug"
    @click=""
  >
    <span>{{ monster.name }}</span>
  </div>

  <div
    class="modal fade"
    :id="'editMonsterDetailModal' + monster.slug"
    tabindex="-1"
    aria-labelledby="editMonsterDetailModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form
        action="submit"
        class="card text-secondary"
        @submit.prevent="editMonster(monster.id)"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editMonsterDetailModal">
              {{ monster?.name }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <!-- Section -->
          <div class="modal-body">
            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="editable.hit_dice"
                  required
                  name="hit dice"
                  placeholder="Hit Dice:"
                  maxlength="50"
                />
                <label for="hit_dice">Hit Dice:</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="editable.size"
                  required
                  name="size"
                  placeholder="Size:"
                  maxlength="50"
                />
                <label for="size">Size:</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="editable.alignment"
                  required
                  name="alignment"
                  placeholder="Alignment:"
                  maxlength="50"
                />
                <label for="alignment">Alignment:</label>
              </div>
            </div>
            <!-- Section -->
            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div class="form-floating mb-3">
                <input
                  type="text"
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
                  type="text"
                  class="form-control"
                  v-model="editable.type"
                  required
                  name="type"
                  placeholder="Type:"
                  maxlength="50"
                />
                <label for="type">Type:</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  v-model="editable.type"
                  required
                  name="type"
                  placeholder="Type:"
                  maxlength="50"
                />
                <label for="type">Type:</label>
              </div>
            </div>
          </div>
          <!-- Section -->
          <div class="modal-footer">
            <button class="btn btn-dark" data-bs-dismiss="modal" type="submit">
              Edit this Monster
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop";
import { monstersService } from "../services/MonstersService.js";
import { ref, watchEffect } from "vue";

export default {
  props: {
    monster: { type: Object, required: true },
  },
  setup(props) {
    let editable = ref({});
    watchEffect(() => {
      editable.value = { ...props.monster };
    });

    return {
      editable,

      async editMonster(id) {
        try {
          console.log(props.monster.id, id);
          await monstersService.editMonster(editable.value, id);
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
  background-color: rgb(59, 119, 59);
  height: fit-content;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}

p {
  margin: 0;
}

.statistics {
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
