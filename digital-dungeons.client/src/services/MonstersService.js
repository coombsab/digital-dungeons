import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { baseApi } from "./AxiosService.js";

class MonstersService {
  async getMonstersByEncounterId(encounterId) {
    const res = await baseApi.get(`api/encounters/${encounterId}/monsters`);
    AppState.activeEncounterMonsters = res.data.map((e) => new Monster(e));
    // console.log("res", res.data);
    // console.log("AppState", AppState.activeEncounterMonsters);
  }

  async addMonsterToEncounter(monsterData) {
    console.log(monsterData);
    const res = await baseApi.post("/api/monsters", monsterData);
    const monster = new Monster(res.data);
    AppState.activeEncounterMonsters = [
      ...AppState.activeEncounterMonsters,
      monster,
    ];
    // console.log(monster);
    // console.log(AppState.activeEncounterMonsters);
  }

  async removeMonster(monsterId) {
    await baseApi.delete(`api/monsters/${monsterId}`);
    AppState.activeEncounterMonsters = AppState.activeEncounterMonsters.filter(
      (m) => m.id != monsterId
    );
  }

  async editMonster(monsterData, id) {
    const res = await baseApi.put(`api/monsters/${id}`, monsterData);
    // console.log(monsterData);
    const updatedMonster = new Monster(res.data);
    console.log(res.data);
    const index = AppState.monsters.findIndex((m) => m.id == id);
    AppState.monsters.splice(index, 1, updatedMonster);
  }
}

export const monstersService = new MonstersService();
