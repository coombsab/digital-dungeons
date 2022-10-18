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
    this.setTypeIcon()
  }

  setActiveCategory(category) {
    AppState.activeCategory = category
  }

  setTypeIcon() {
    AppState.monsters.forEach(monster => {
      if (monster.type.toUpperCase().includes("HUMANOID")) {
        monster.image = "https://i.pinimg.com/474x/d6/f6/37/d6f6372a18fec2c0e6c0b81aa74de8cf--golden-ratio-drawings-of.jpg"
      }
    })
  }
}

export const informationService = new InformationService()