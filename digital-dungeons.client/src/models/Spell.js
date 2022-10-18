export class Spell {
  setactive
  constructor(data) {
    this.slug = data.slug
    this.name = data.name
    this.desc = data.desc
    this.higher_level = data.higher_level
    this.page = data.page
    this.range = data.range
    this.components = data.components
    this.material = data.material
    this.ritual = data.ritual
    this.duration = data.duration
    this.concentration = data.concentration
    this.casting_time = data.casting_time
    this.level = data.level
    this.school = data.school
    this.dnd_class = data.dnd_class
    this.archetype = data.archetype
    this.circles = data.circles
    this.schoolImg = data.schoolImg || "https://thiscatdoesnotexist.com"
    // this.document__slug = data.document__slug
    // this.document__title = data.document__title
    // this.document__license_url = data.document__license_url
  }
}