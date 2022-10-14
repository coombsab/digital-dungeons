<template>
  <div class="information-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 p-3">
          <div class="text-center">
            <button class="btn btn-success elevation-2">RULES</button>
          </div>
        </div>
        <div class="col-6 p-3">
          <div class="text-center">
            <button class="btn btn-success elevation-2">GAME MECHANICS</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 text-center pt-5">
          <span class="text-light fs-5"><strong>DROPDOWN</strong></span>
        </div>
        <div class="col-8 bg-transparent">
          <div class="col-12">
            <div class="d-flex p-2">
              <form class="w-100">
                <div class="form-floating">
                  <input type="text" class="form-control" placeholder="Search" id="floatingSearch" v-model="editable"
                    @submit.prevent="handleSubmit()">
                  <label for="floatingSearch">Search</label>

                </div>
                <button type="submit" class="form-control btn-success btn">Submit</button>
              </form>
              <button @click="changePage(previousPage)" :disabled="!previousPage" class="btn btn-danger me-2"
                :class="{'disabled' : !previousPage}">Previous</button>
              <button @click="changePage(nextPage)" :disabled="!nextPage"
                :class="`btn btn-danger ${!nextPage ? 'btn-info' : ''}`">Next</button>
            </div>
          </div>
          <div class="col-12">
            <div class="info-content px-3 scrollable">
              <MonsterCard v-for="m of monsters" :monster="m" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState"
import { onMounted, ref } from "vue";
import MonsterCard from "../components/MonsterCard.vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { monstersService } from "../services/MonstersService";
export default {
  setup() {
    async function getApiMonsters() {
      try {
        await monstersService.getApiMonsters()
      }
      catch (error) {
        logger.log('[getApiMonsters]', error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getApiMonsters()
    })
    const editable = ref("")
    return {
      editable,
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      // monsters: computed(() => AppState.monsters.filter(monster => monster.name.toUpperCase().includes(editable.value.toUpperCase()))),
      monsters: computed(() => AppState.monsters),
      async handleSubmit() {
        try {
          console.log("hi im here")
          await monstersService.searchMonster()

          // await this.getApiMonsters(editable.value)  //might need?
        }
        catch (error) {
          logger.log('[handleSubmit]', error)
          Pop.error(error.message)

        }
      },

      async changePage(pageUrl) {
        try {
          await monstersService.getApiMonsters(pageUrl)
        } catch (error) {
          Pop.error(error, '[handlechange]')
        }

      }





    };
  },
  components: { MonsterCard }
};
</script>

<style lang="scss" scoped>
.information-page {
  height: 100vh;
}

button {
  font-weight: 800;
  font-size: 64px;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 2rem;
}

.bg-transparent {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7px);
}

.scrollable {
  overflow-y: auto;
  height: 80.3vh;
}
</style>