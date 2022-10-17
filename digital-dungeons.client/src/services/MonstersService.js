import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { baseApi } from "./AxiosService.js";

class MonstersService {
  async getMonstersByEncounterId(encounterId) {
    const res = await baseApi.get(`api/encounters/${encounterId}/monsters`);
    AppState.monsters = res.data.map((e) => new Monster(e));
    console.log(res.data);
    console.log(AppState.monsters);
  }

  async addMonsterToEncounter(monsterData) {
    const res = await baseApi.post("/api/monsters", monsterData);
    const monster = new Monster(res.data);
    AppState.monsters = [...AppState.monsters, monster];
    console.log(AppState.monsters);
  }

  async removeMonster(monsterId) {
    await baseApi.delete(`api/monsters/${monsterId}`);
    AppState.monsters = AppState.monsters.filter((m) => m.id != id);
  }

  async editMonster(monsterData, id) {
    const res = await baseApi.put(`api/monsters/${id}`, monsterData);
    console.log(monsterData);
    const updatedMonster = new Monster(res.data);
    const index = AppState.monsters.findIndex((m) => m.id == id);
    AppState.monsters.splice(index, 1, updatedMonster);
  }
}

export const monstersService = new MonstersService();
