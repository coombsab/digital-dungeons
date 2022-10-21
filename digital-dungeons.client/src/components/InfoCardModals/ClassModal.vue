<template>
  <!-- NOTE MODAL -->
  <!-- Name and image, should be fine -->
  <div class="modal fade" :id="'dndClassModal' + dndClass.slug" tabindex="-1"
    aria-labelledby="DndClassDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg h-80">
      <div class="modal-content text-visible bg-warning"
        :style="dndClass.coverImg ? {backgroundImage: `url(${dndClass.coverImg})`} : ''">

        <div class="modal-header bg-transparent-modal">
          <h1 class="modal-title fs-5" id="DndClassDetailsModalLabel">
            {{ dndClass?.name }}
          </h1>
        </div>




        <!-- Class details -->
        <div class="modal-body bg-transparent-modal scrollable" v-if="dndClass">
          <div class="flex-wrap mb-3">

            <!-- Hit points -->
            <div>
              <h4 class="statistics">Hit Points</h4>
              <p>Hit dice: {{dndClass.hit_dice}}</p>
              <p>HP at first: {{dndClass.hp_at_1st_level}}</p>
              <p>HP at higher levels: {{dndClass.hp_at_higher_levels}}</p>
            </div>
            <br>

            <!-- Proficiencies -->
            <br>
            <div>
              <h4 class="statistics">Proficiencies</h4>
              <p>Armor: {{dndClass.prof_armor}}</p>
              <p>Weapons: {{dndClass.prof_weapons}}</p>
              <p>Tools: {{dndClass.prof_tools}}</p>
              <p>Saving Throws: {{dndClass.prof_saving_throws}}</p>
              <p>Skills: {{dndClass.prof_skills}}</p>
            </div>
            <br>


            <!-- Equipment -->
            <br>
            <div>
              <h4 class="statistics">Equipment</h4>
              <Markdown class="" :source="dndClass.equipment" />
            </div>
            <br>


            <!-- Description -->
            <br>
            <div>
              <h6 class="statistics">Description</h6>
              <Markdown class="class-details" :source="dndClass.desc" />
            </div>
            <br>
          </div>
          <!-- <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Type</h6>
                <p>{{ dndClass.type}}</p>
              </div>
              <div>
                <h6 class="statistics">Subtype</h6>
                <p>{{ dndClass.subtype }}</p>
              </div>
              <div>
                <h6 class="statistics">Alignment</h6>
                <p>{{ dndClass.alignment }}</p>
              </div>
              <div>
                <h6 class="statistics">Health</h6>
                <p>{{ dndClass.hit_points }}</p>
              </div>
            </div>
  
            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Hit Dice</h6>
                <p>{{ dndClass.hit_dice }}</p>
              </div>
              <div>
                <h6 class="statistics">Languages</h6>
                <p>{{ dndClass.languages }}</p>
              </div>
              <div>
                <h6 class="statistics">Size</h6>
                <p>{{ dndClass.size }}</p>
              </div>
              <div>
                <h6 class="statistics">Challenge Rating</h6>
                <p>{{ dndClass.challenge_rating }}</p>
              </div>
            </div>
  
            <div class="d-flex flex-wrap justify-content-around mb-3">
              <div>
                <h6 class="statistics">Strength</h6>
                <p>{{ dndClass.strength }}</p>
              </div>
              <div>
                <h6 class="statistics">Intelligence</h6>
                <p>{{ dndClass.intelligence }}</p>
              </div>
              <div>
                <h6 class="statistics">Wisdom</h6>
                <p>{{ dndClass.wisdom }}</p>
              </div>
              <div>
                <h6 class="statistics">Dexterity</h6>
                <p>{{ dndClass.dexterity }}</p>
              </div>
  
  
  
              <div class="d-flex flex-wrap justify-content-around mb-3">
                <div>
                  <h6 class="statistics">Charisma</h6>
                  <p>{{ dndClass.charisma }}</p>
                </div>
                <div>
                  <h6 class="statistics">Constitution</h6>
                  <p>{{ dndClass.constitution }}</p>
                </div>
              </div>
            </div> -->
        </div>





        <div class="modal-body bg-transparent-modal" v-else>
          <p>Sorry, there is no dndClass data available :(</p>
        </div>
        <div class="modal-footer bg-transparent-modal">
          <button type="button" class="btn-visible text-visible" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import { DndClass } from "../../models/DndClass.js";
import Markdown from 'vue3-markdown-it'

export default {
  props: {
    dndClass: { type: DndClass, required: true },
  },
  setup() {
    return {}
  }
}
</script>





<style lang="scss" scoped>
.dndClass-card {
  background-color: black;
  background-color: rgba(0, 0, 0, 0.6);
  height: 10rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  transition: 150ms linear;
}

.dndClass-card:hover {
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

.text-visible {
  color: rgb(216, 224, 229);
}

.text-visible:hover {
  color: rgb(216, 224, 229) !important;
}

.h-80 {
  max-height: 80vh;
}

.scrollable {
  max-height: 60vh;
  overflow-y: auto;
}

// .class-details {
// em {
//   background-color: rgba(0, 128, 128, 0.232);
//   padding: .015rem;
//   border-radius: 5px;
// }
// }
</style>