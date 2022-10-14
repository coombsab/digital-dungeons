import { AppState } from "../AppState"
import { Monster } from "../models/Monster"
import { ShortMonster } from "../models/ShortMonster"
import { logger } from "../utils/Logger"
import { dndApi, openDndApi, openDndMons } from "./AxiosService"

class MonstersService {
  async getApiMonsters(pageUrl = "/monsters", params = "") {
    const res = await openDndApi.get(pageUrl, params)
    logger.log(res.data)
    AppState.monsters = res.data.results.map(data => new Monster(data))
    AppState.monsters = res.data.results
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

  async searchMonster() {
    const res = await openDndMons('/?search="term"')
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