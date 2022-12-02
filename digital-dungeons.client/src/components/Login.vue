<template>
  <span :class="user.isAuthenticated ? 'navbar-text-auth' : 'navbar-text'" class="mb-3">
    <button class="btn text-visible btn-login text-uppercase my-2 my-lg-0 fs-4" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>

    <div class="dropdown my-lg-0" v-else>
      <div class="dropdown-toggle selectable rounded my-3" data-bs-toggle="dropdown" aria-expanded="false"
        id="authDropdown">
        <div v-if="account.picture || user.picture">
          <img :src="account.picture || user.picture" alt="account photo" class="account-photo"
            :title="account.name || user.name" />
          <!-- <span class="mx-3 text-success lighten-30">{{ account.name || user.name }}</span> -->
        </div>
      </div>
      <div class="dropdown-menu p-0 list-group w-100" aria-labelledby="authDropdown">
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Your Account
          </div>
        </router-link>
        <div class="list-group-item list-group-item-action hoverable text-danger" @click="logout">
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .navbar-text {
//   position: absolute;
//   left: -1.5rem;
//   top: 50rem;
//   z-index: 1;
// }

// .navbar-text-auth {
//   position: absolute;
//   left: 1rem;
//   top: 50rem;
//   z-index: 1;
// }

// .btn-login {
//   background-color: rgb(26, 21, 31);
//   padding: 0.5rem 1rem 0.5rem 1rem;
//   border-radius: 1rem;
//   transform: rotate(-90deg);
//   letter-spacing: 0.25rem;
// }

// .btn-login:hover {
//   background-color: rgba(26, 21, 31, 0.705);
//   letter-spacing: 0.25rem; 
// }
.account-photo {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}

.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
</style>
