export class Weapon {
  constructor(data) {
    this.name = data.name
    this.slug = data.slug
    this.category = data.category
    this.cost = data.cost
    this.damage_dice = data.damage_dice
    this.damage_type = data.damage_type
    this.weight = data.weight
    this.properties = data.properties
  }
}