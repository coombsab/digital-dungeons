import { AppState } from "../AppState"
import { Monster } from "../models/Monster"
import { ShortMonster } from "../models/ShortMonster"
import { logger } from "../utils/Logger"
import { dndApi, openDndApi } from "./AxiosService"

class MonstersService {
  async getApiMonsters(pageUrl = "", term = "") {
    let res
    let params = ""
    if (term !== "") {
      params = { params: { search: term }}
    }
    console.log("params", params)
    if (pageUrl === "") {
      res = await openDndApi.get("/monsters/", params)
    } else {
      res = await openDndApi.get(pageUrl, params)
    }
    logger.log(res.data)
    AppState.monsters = res.data.results.map(data => new Monster(data))
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }

  setActiveMonster(monsterSlug) {
    AppState.activeMonster = null
    //const res = await openDndApi.get
    // const res = await openDndApi.get("/monsters", {
    //   params: {
    //     name: monsterSlug
    //   }
    // })
    AppState.activeMonster = AppState.monsters.find(m => m.slug == monsterSlug)
    //AppState.activeMonster = new Monster(res.data)
    console.log(AppState.activeMonster)
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