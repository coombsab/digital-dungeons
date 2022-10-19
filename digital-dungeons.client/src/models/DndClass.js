export class DndClass {
  constructor(data) {
    this.coverImg = data.coverImg
    this.name = data.name
    this.slug = data.slug
    this.desc = data.desc
    this.hit_dice = data.hit_dice
    this.hp_at_1st_level = data.hp_at_1st_level
    this.hp_at_higher_levels = data.hp_at_higher_levels
    this.prof_armor = data.prof_armor
    this.prof_weapons = data.prof_weapons
    this.prof_tools = data.prof_tools
    this.prof_saving_throws = data.prof_saving_throws
    this.prof_skills = data.prof_skills
    this.equipment = data.equipment
    this.table = data.table
    this.spellcasting_ability = data.spellcasting_ability
    this.subtypes_name = data.subtypes_name
    this.archetypes = data.archetypes
    this.document__slug = data.document__slug
    this.document__title = data.document__title
    this.document__license_url = data.document__license_url

  }
}