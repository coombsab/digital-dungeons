export class Monster {

  // constructor(data) {
  //   this.id = data.id
  //   this.slug = data.slug
  //   this.name = data.name
  //   this.encounterId = data.encounterId
  //   this.hit_points = data.hit_points
  //   this.type = data.type
  //   this.size = data.size
  //   this.alignment = data.alignment
  //   this.icon = data.icon
  //   this.initiative = data.initiative
  //   this.nickName = data.nickName
  // }

  constructor(data) {
    this.name = data.name
    this.slug = data.slug
    this.type = data.type
    this.subtype = data.subtype || 'N/A'
    this.alignment = data.alignment
    this.hit_points = data.hit_points
    this.hit_dice = data.hit_dice
    this.languages = data.languages
    this.size = data.size
    this.strength = data.strength
    this.intelligence = data.intelligence
    this.challenge_rating = data.challenge_rating
    this.wisdom = data.wisdom
    this.dexterity = data.dexterity
    this.charisma = data.charisma
    this.constitution = data.constitution
  }
}