export class Armor {
  constructor(data) {
    this.name = data.name
    this.slug = data.slug
    this.category = data.category
    this.ac_string = data.ac_string
    this.strength_requirement = data.strength_requirement
    this.cost = data.cost
    this.weight = data.weight
    this.stealth_disadvantage = data.stealth_disadvantage
    this.document__slug = data.document__slug
    this.document__title = data.document__title
    this.document__license_url = data.document__license_url
  }
}