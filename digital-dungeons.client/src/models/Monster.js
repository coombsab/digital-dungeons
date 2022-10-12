export class Monster {

  constructor(data) {
    this.id = data.id
    this.index = data.index
    this.desc = data.desc
    this.name = data.name
    this.encounterId = data.encounterId
    this.hit_points = data.hit_points
    this.type = data.type
    this.size = data.size
    this.alignment = data.alignment
    this.icon = data.icon
    this.initiative = data.initiative
  }
}