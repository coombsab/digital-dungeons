import { AppState } from "../AppState"
import { Monster } from "../models/Monster"
import { ShortMonster } from "../models/ShortMonster"
import { logger } from "../utils/Logger"
import { dndApi, openDndApi } from "./AxiosService"

class MonstersService {
  async getApiMonsters(params = "") {
    const res = await openDndApi.get("/monsters", params)
    logger.log(res.data)
    AppState.monsters = res.data.results.map(data => new Monster(data))
  }

  async setActiveMonster(monsterSlug) {
    AppState.activeMonster = null
    const res = await openDndApi.get("/monsters", {
      params: {
        slug: monsterSlug
      }
    })
    AppState.activeMonster = new Monster(res.data)
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