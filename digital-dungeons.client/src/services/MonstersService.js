import { AppState } from "../AppState"
import { Monster } from "../models/Monster"
import { logger } from "../utils/Logger"
import { dndApi } from "./AxiosService"

class MonstersService {
  async getApiMonsters(params = "") {
    const res = await dndApi.get("api/monsters", params)
    AppState.monsters = res.data.results.map(data => new Monster(data))
  }
  async getApiMonsterByIndex(monsterIndex) {

  }

  async getMonsters(params) {

  }
  async getMonstersByEncounterId(encounterId) {

  }
  async addMonster(monsterData) {

  }
}

export const monstersService = new MonstersService()