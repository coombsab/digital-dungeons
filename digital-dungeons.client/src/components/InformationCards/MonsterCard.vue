<template>
  <div class="monster-card p-3 rounded elevation-2 text-light selectable" title="See Monster Details"
    data-bs-toggle="modal" :data-bs-target="'#monsterModal' + monster.slug" @click="">
    <span>{{monster.name}}</span>
  </div>

  <div class="modal fade" :id="'monsterModal' + monster.slug" tabindex="-1" aria-labelledby="MonsterDetailsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="MonsterDetailsModalLabel">{{monster?.name}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-if="monster">
          <div class="modal-body" v-if="monster">

            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Type</h6>
                <p>{{ monster.type}}</p>
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
        <div class="modal-body" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { Monster } from '../../models/Monster.js';



export default {
  props: {
    monster: { type: Monster, required: true }
  },
  setup(props) {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: green;
  height: fit-content;
  margin-bottom: 1.5rem;
  margin-top: .5rem;
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
