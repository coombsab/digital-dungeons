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
      if (monster.type.toUpperCase().includes("CONSTRUCT")) {
        monster.image = "https://64.media.tumblr.com/62d89762d717bd630211922d7117ec6c/88e43cca5c45c0bc-e5/s1280x1920/933ad4db7dbc22468c92c4a982923fe0f8e69679.jpg"
      }
      if (monster.type.toUpperCase().includes("CELESTIAL")) {
        monster.image = "https://www.dndspeak.com/wp-content/uploads/2021/04/Angel-1.jpg"
      }
      if (monster.type.toUpperCase().includes("BEAST")) {
        monster.image = "https://64.media.tumblr.com/682358095f7ffdbbce22ab6d979de643/02e4f34a339ea503-43/s1280x1920/40a1b4523705cc1c1fffe1601649bc4dcd13e4aa.jpg"
      }
      if (monster.type.toUpperCase().includes("MONSTROS")) {
        monster.image = "https://rpgrunkleplaysgames.files.wordpress.com/2018/07/imageedit_1_4579932667.png"
      }
      if (monster.type.toUpperCase().includes("GIANT")) {
        monster.image = "https://explorednd.com/wp-content/uploads/2022/06/Hill-Giant-5e-Guide-950x650.png"
      }
      if (monster.type.toUpperCase().includes("OOZE")) {
        monster.image = "https://1.bp.blogspot.com/-AqlEHfXOicI/WUnKUjP9EUI/AAAAAAAAMgQ/1JX_L1XhwCQF1ASCvdindnyiBRVXGRHwACLcBGAs/s1600/bloodfireooze.jpg"
      }
      if (monster.type.toUpperCase().includes("FIEND")) {
        monster.image = "https://static.wikia.nocookie.net/forgottenrealms/images/c/ca/4e_pit_fiend.jpg"
      }
      if (monster.type.toUpperCase().includes("FEY")) {
        monster.image = "https://arcaneeye.com/wp-content/uploads/2022/05/Fairy-5e.jpg"
      }
      if (monster.type.toUpperCase().includes("ELEMENTAL")) {
        monster.image = "https://static.wikia.nocookie.net/forgottenrealms/images/0/0b/Elementals.jpg"
      }
      if (monster.type.toUpperCase().includes("UNDEAD")) {
        monster.image = "https://images-geeknative-com.exactdn.com/wp-content/uploads/2019/11/27171128/vecna_by_maradraws_dcj5utv-fullview.jpg"
      }
      if (monster.type.toUpperCase().includes("PLANT")) {
        monster.image = "https://justkaywritesontheweb.files.wordpress.com/2019/12/636596564985758976.png?w=797"
      }
      if (monster.type.toUpperCase().includes("DRAGON")) {
        monster.image = "https://spikeybits.com/wp-content/uploads/2022/03/DD-Balagos-Ancient-Red-Dragon.jpg"
      }
      if (monster.type.toUpperCase().includes("ABERRATION")) {
        monster.image = "https://i.pinimg.com/736x/34/81/24/34812441c327b55bc398188d37ef5517.jpg"
      }
    
    })
  }
}

export const informationService = new InformationService()