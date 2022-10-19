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
      <div class="d-flex justify-content-between align-items-center">
        <button @click="previous(previousPage)" :disabled="!previousPage" class="btn btn-danger me-2"
          :class="{'disabled' : !previousPage}">Previous</button>
        <div class="text-visible" v-if="pages">
          <span> {{currentPage}} / {{pages}} </span>
        </div>
        <button @click="next(nextPage)" :disabled="!nextPage"
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
      pages: computed(() => Math.ceil(AppState.count / 50)),
      currentPage: computed(() => AppState.currentPage),
      async handleSubmit() {
        try {
          // STUB change to active category
          await informationService.getApiInfo(AppState.activeCategory, { search: editable.value })
          editable.value = ""
          AppState.currentPage = 1
        }
        catch (error) {
          logger.log('[handleSubmit]', error)
          Pop.error(error.message)
        }
      },
      async previous(pageUrl) {
        try {
          await informationService.getApiInfo(pageUrl)
          const index = AppState.nextPage.indexOf("page=")
          AppState.currentPage = parseInt(AppState.nextPage.substring(index + 5, AppState.nextPage.length)) - 1
        } catch (error) {
          Pop.error(error, '[previousPage]')
        }
      },
      async next(pageUrl) {
        try {
          await informationService.getApiInfo(pageUrl)
          const index = AppState.previousPage.indexOf("page=")
          if (parseInt(AppState.previousPage.substring(index + 5, AppState.previousPage.length))) {
            AppState.currentPage = parseInt(AppState.previousPage.substring(index + 5, AppState.previousPage.length)) + 1
          } else {
            AppState.currentPage = 2
          }
        } catch (error) {
          Pop.error(error, '[nextPage]')
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