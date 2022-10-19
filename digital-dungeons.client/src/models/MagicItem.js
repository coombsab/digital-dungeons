export class MagicItem {
  constructor(data) {
    this.name = data.name
    this.slug = data.slug
    this.desc = data.desc
    this.type = data.type
    this.rarity = data.rarity
    this.requires_attunement = data.requires_attunement
    this.document__slug = data.document__slug
    this.document__title = data.document__title
  }
}