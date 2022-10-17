import { AppState } from "../AppState"
import { Monster } from "../models/Monster"

import { openDndApi } from "./AxiosService"

class InformationService {
  async getApiMonsters(pageUrl = "", terms = "",) {
    let res
    let params = ""
    if (terms !== "") {
      params = { params: terms }
    }
    if (pageUrl === "") {
      res = await openDndApi.get("/monsters/", params)
    } else {
      res = await openDndApi.get(pageUrl, params)
    }
    AppState.monsters = res.data.results.map(data => new Monster(data))
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }



}

export const informationService = new InformationService()