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
      if (monster.type.toUpperCase() === "CONSTRUCT") {
        monster.image = "https://64.media.tumblr.com/62d89762d717bd630211922d7117ec6c/88e43cca5c45c0bc-e5/s1280x1920/933ad4db7dbc22468c92c4a982923fe0f8e69679.jpg"
      }
      if (monster.type.toUpperCase() === "CELESTIAL") {
        monster.image = "https://www.dndspeak.com/wp-content/uploads/2021/04/Angel-1.jpg"
      }
      if (monster.type.toUpperCase() === "BEAST") {
        monster.image = "https://64.media.tumblr.com/682358095f7ffdbbce22ab6d979de643/02e4f34a339ea503-43/s1280x1920/40a1b4523705cc1c1fffe1601649bc4dcd13e4aa.jpg"
      }
    })
  }
}

export const informationService = new InformationService()