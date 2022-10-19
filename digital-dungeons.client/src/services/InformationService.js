import { AppState } from "../AppState"
import { DndClass } from "../models/DndClass.js"
import { MagicItem } from "../models/MagicItem.js"
import { Monster } from "../models/Monster"
import { Race } from "../models/Race.js"
import { Spell } from "../models/Spell.js"
import { Weapon } from "../models/Weapon.js"
import { openDndApi } from "./AxiosService"

class InformationService {
  async getApiInfo(pageUrl = "", terms = "",) {
    let res
    let params = ""
    if (terms !== "") {
      params = { params: terms }
    }

    res = await openDndApi.get(pageUrl, params)

    switch (AppState.activeCategory) {
      case "monsters":
        AppState.monsters = res.data.results.map(data => new Monster(data))
        this.setMonsterImage()
        break;
      case "spells":
        AppState.spells = res.data.results.map(data => new Spell(data))
        this.setSpellSchoolImage()
        break;
      case "races":
        AppState.races = res.data.results.map(data => new Race(data))
        this.setRaceCoverImg()
        break;
      case "classes":
        AppState.classes = res.data.results.map(data => new DndClass(data))
        this.setClassCoverImg()
        break;
      case "magicitems":
        AppState.magicitems = res.data.results.map(data => new MagicItem(data))
        break;
      case "weapons":
        AppState.weapons = res.data.results.map(data => new Weapon(data))
        break;
      case "armor":
        AppState.armor = res.data.results
        break;
      default:
        break;
    }


    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
    AppState.count = res.data.count
  }

  setActiveCategory(category) {
    AppState.activeCategory = category
  }

  setMonsterImage() {
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

  setSpellSchoolImage() {
    AppState.spells.forEach(spell => {
      if (spell.school.toUpperCase().includes("ABJURATION")) {
        spell.schoolImg = "https://i.ibb.co/NsSh29L/abjuration-edited.png"
      }
      if (spell.school.toUpperCase().includes("CONJURATION")) {
        spell.schoolImg = "https://i.ibb.co/SxHqL2Q/conjuration-edited.png"
      }
      if (spell.school.toUpperCase().includes("DIVINATION")) {
        spell.schoolImg = "https://i.ibb.co/wypZX54/divination-edited.png"
      }
      if (spell.school.toUpperCase().includes("ENCHANTMENT")) {
        spell.schoolImg = "https://i.ibb.co/6ZyNG9D/enchantment-edited.png"
      }
      if (spell.school.toUpperCase().includes("EVOCATION")) {
        spell.schoolImg = "https://i.ibb.co/2jQFhXR/evocation-edited.png"
      }
      if (spell.school.toUpperCase().includes("ILLUSION")) {
        spell.schoolImg = "https://i.ibb.co/BN5LWS1/illusion-edited.png"
      }
      if (spell.school.toUpperCase().includes("NECROMANCY")) {
        spell.schoolImg = "https://i.ibb.co/19Yx6tc/necromancy-edited.png"
      }
      if (spell.school.toUpperCase().includes("TRANSMUTATION")) {
        spell.schoolImg = "https://i.ibb.co/CnKRk3v/transmutation-edited.png"
      }
    })
  }

  setRaceCoverImg() {
    AppState.races.forEach(race => {
      if (race.name.toUpperCase().includes("DWARF")) {
        race.coverImg = "https://static.wikia.nocookie.net/powerlisting/images/3/36/Fantasy-dwarf.jpg"
      }
      if (race.name.toUpperCase().includes("ELF")) {
        race.coverImg = "https://www.wargamer.com/wp-content/uploads/2022/06/dnd-elf-5e-bard.jpg"
      }
      if (race.name.toUpperCase().includes("HUMAN")) {
        race.coverImg = "https://i.imgur.com/wBHnYRv.jpg"
      }
      if (race.name.toUpperCase().includes("HALFLING")) {
        race.coverImg = "https://i.pinimg.com/550x/9e/52/35/9e523504313818a3dc630cf2c97cc6cc.jpg"
      }
      if (race.name.toUpperCase().includes("DRAGONBORN")) {
        race.coverImg = "https://static.wikia.nocookie.net/criticalrole/images/7/73/Dragonborn.png"
      }
      if (race.name.toUpperCase().includes("GNOME")) {
        race.coverImg = "https://explorednd.com/wp-content/uploads/2022/06/Gnome-5e-Guide.jpg"
      }
      if (race.name.toUpperCase().includes("HALF-ELF")) {
        race.coverImg = "https://i.redd.it/0d8a69vn8q531.jpg"
      }
      if (race.name.toUpperCase().includes("HALF-ORC")) {
        race.coverImg = "https://preview.redd.it/7g7txmbu2sg81.png?width=640&crop=smart&auto=webp&s=bf54d2852fedcead1c9fe772b8ae190fe0987813"
      }
      if (race.name.toUpperCase().includes("TIEFLING")) {
        race.coverImg = "https://dndink.com/magic/2022/06/tiefling-race-371x480.jpg"
      }
    })
  }

  setClassCoverImg() {
    AppState.classes.forEach(dndClass => {
      if (dndClass.name.toUpperCase().includes("BARBARIAN")) {
        dndClass.coverImg = "https://cdn.shopify.com/s/files/1/1066/8352/files/Ultimate_5e_Barbarian_Class_Guide_large.jpg?v=1555985633"
      }
      if (dndClass.name.toUpperCase().includes("BARD")) {
        dndClass.coverImg = "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/http://www.nonfictiongaming.com/wp-content/uploads/2018/04/DND-Bard-Lute-Red.jpg"
      }
      if (dndClass.name.toUpperCase().includes("CLERIC")) {
        dndClass.coverImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53ac55df-4ffd-4ed6-bc32-e911903d5e47/delmly8-661ddd56-f250-4c90-bca9-8f73704d57ec.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzYWM1NWRmLTRmZmQtNGVkNi1iYzMyLWU5MTE5MDNkNWU0N1wvZGVsbWx5OC02NjFkZGQ1Ni1mMjUwLTRjOTAtYmNhOS04ZjczNzA0ZDU3ZWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Uwt6nOtOHS8OFLh4xC85wV0ZPDL0Qi3G0aeu1V2YQ60"
      }
      if (dndClass.name.toUpperCase().includes("DRUID")) {
        dndClass.coverImg = "https://i0.wp.com/nerdarchy.com/wp-content/uploads/2015/11/druid_by_dleoblack-d5yvham.jpg"
      }
      if (dndClass.name.toUpperCase().includes("FIGHTER")) {
        dndClass.coverImg = "https://www.dungeonsolvers.com/wp-content/uploads/2019/02/gxfpQmM.jpg"
      }
      if (dndClass.name.toUpperCase().includes("MONK")) {
        dndClass.coverImg = "https://sagegamers.com/ezoimgfmt/149658804.v2.pressablecdn.com/wp-content/uploads/2021/08/diego-vila-aasimar-monk.jpg"
      }
      if (dndClass.name.toUpperCase().includes("PALADIN")) {
        dndClass.coverImg = "https://www.gamingtierlist.com/wp-content/uploads/2019/04/paladinguide-2.jpg"
      }
      if (dndClass.name.toUpperCase().includes("RANGER")) {
        dndClass.coverImg = "https://arcaneeye.com/wp-content/uploads/2020/06/unnamed1-512x481.jpg"
      }
      if (dndClass.name.toUpperCase().includes("ROGUE")) {
        dndClass.coverImg = "https://64.media.tumblr.com/043cc6f6c86b0759699bd01803416de0/565b90c646a608c3-6c/s1280x1920/e4ddadad38b4d72c95350b2da135c4c4cd753189.jpg"
      }
      if (dndClass.name.toUpperCase().includes("SORCERER")) {
        dndClass.coverImg = "https://www.gamersdecide.com/sites/default/files/styles/news_images/public/sorc_1.jpg"
      }
      if (dndClass.name.toUpperCase().includes("WARLOCK")) {
        dndClass.coverImg = "https://64.media.tumblr.com/5a04482d4c0c441af946b9c1e3fafe72/tumblr_inline_p01n3oeIhQ1qdq19t_1280.jpg"
      }
      if (dndClass.name.toUpperCase().includes("WIZARD")) {
        dndClass.coverImg = "https://64.media.tumblr.com/d0ba6a6102cfcfb18705eb75292e774c/tumblr_inline_p1xkkj2Y4w1qdq19t_640.jpg"
      }
    })
  }
}

export const informationService = new InformationService()