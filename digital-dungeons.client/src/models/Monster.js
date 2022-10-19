export class Monster {
  constructor(data) {
    this.id = data.id;
    this.encounterId = data.encounterId;
    this.creatorId = data.creatorId;
    this.icon = data.icon;
    this.initiative = data.initiative;
    this.image = data.image;
    this.desc = data.desc;
    this.nickName = data.nickName || data.name;
    this.quantity = data.quantity || 1;
    // NOTE Data below comes from Api
    this.slug = data.slug;
    this.name = data.name;
    this.size = data.size;
    this.type = data.type;
    this.subtype = data.subtype || "No SubType";
    this.group = data.group;
    this.alignment = data.alignment;
    this.armor_class = data.armor_class;
    this.armor_desc = data.armor_desc;
    this.hit_points = data.hit_points;
    this.hit_dice = data.hit_dice;
    this.speed = data.speed;
    this.strength = data.strength;
    this.dexterity = data.dexterity;
    this.constitution = data.constitution;
    this.intelligence = data.intelligence;
    this.wisdom = data.wisdom;
    this.charisma = data.charisma;
    this.strength_save = data.strength_save;
    this.dexterity_save = data.dexterity_save;
    this.constitution_save = data.constitution_save;
    this.intelligence_save = data.intelligence_save;
    this.wisdom_save = data.wisdom_save;
    this.charisma_save = data.charisma_save;
    this.perception = data.perception;
    this.skills = data.skills;
    this.damage_vulnerabilities = data.damage_vulnerabilities;
    this.damage_resistances = data.damage_resistances;
    this.damage_immunities = data.damage_immunities;
    this.condition_immunities = data.condition_immunities;
    this.senses = data.senses;
    this.languages = data.languages;
    this.challenge_rating = data.challenge_rating;
    this.actions = data.actions;
    this.reactions = data.reactions;
    this.legendary_desc = data.legendary_desc;
    this.legendary_actions = data.legendary_actions;
    this.special_abilities = data.special_abilities;
    this.spell_list = data.spell_list;
    this.img_main = data.img_main;
    // NOTE Likely Useless
    this.document__slug = data.document__slug;
    this.document__title = data.document__title;
    this.document__license_url = data.document__license_url;
  }
}
