<template>
  <div class="component">
    <div class="h-30">
      <div class="d-flex p-2">
        <!-- NOTE Search Bar -->
        <form class="w-100" @submit.prevent="handleSubmit()">
          <div class="input-group">
            <div class="form-floating input-width">
              <input type="text" class="form-control" placeholder="Search" id="floatingSearch" v-model="editable">
              <label for="floatingSearch">Search</label>
            </div>
            <button type="submit" class="form-control"><i class="mdi mdi-magnify"></i></button>
          </div>
        </form>
      </div>
      <!-- NOTE Pagination Buttons -->
      <div class="d-flex justify-content-between">
        <button @click="changePage(previousPage)" :disabled="!previousPage" class="btn btn-danger me-2"
          :class="{'disabled' : !previousPage}">Previous</button>
        <button @click="changePage(nextPage)" :disabled="!nextPage"
          :class="`btn btn-danger ${!nextPage ? 'btn-info' : ''}`">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { AppState } from '../AppState.js';
import { informationService } from '../services/InformationService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref("")
    return {
      editable,
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      async handleSubmit() {
        try {
          // STUB change to active category
          await informationService.getApiInfo(AppState.activeCategory, { search: editable.value })
          editable.value = ""
        }
        catch (error) {
          logger.log('[handleSubmit]', error)
          Pop.error(error.message)
        }
      },
      async changePage(pageUrl) {
        try {
          await informationService.getApiInfo(pageUrl)
        } catch (error) {
          Pop.error(error, '[changingPage]')
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
.h-30 {
  height: 15vh;
}

.input-width {
  width: 70%;
}
</style>