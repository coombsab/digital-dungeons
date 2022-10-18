import { AppState } from "../AppState"
import { Monster } from "../models/Monster"
import { openDndApi } from "./AxiosService"

class InformationService {
  async getApiInfo(pageUrl = "", terms = "",) {
    let res
    let params = ""
    if (terms !== "") {
      params = { params: terms }
    }

    res = await openDndApi.get(pageUrl, params)

    AppState.monsters = res.data.results.map(data => new Monster(data))
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }

  setActiveCategory(category) {
    AppState.activeCategory = category
  }


}

export const informationService = new InformationService()