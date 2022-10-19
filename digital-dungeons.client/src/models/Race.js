export class Race {
  constructor(data) {
    this.coverImg = data.coverImg
    this.name = data.name
    this.slug = data.slug
    this.desc = data.desc
    this.asi_desc = data.asi_desc
    this.asi = data.asi
    this.age = data.age
    this.alignment = data.alignment
    this.size = data.size
    this.speed = data.speed
    this.speed_desc = data.speed_desc
    this.languages = data.languages
    this.vision = data.vision
    this.traits = data.traits
    this.subraces = data.subraces
    this.document__slug = data.document__slug
    this.document__title = data.document__title
    this.document__license_url = data.document__license_url

  }
}