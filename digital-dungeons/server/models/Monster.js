import { Schema } from "mongoose";
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils";

export const MonsterSchema = new Schema(
  {
    encounterId: { type: OBJECT_ID, required: true },
    creatorId: { type: OBJECT_ID, required: true },

    slug: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true },
    subtype: { type: String, default: "No subtype" },
    group: { type: String, default: "No group" },
    alignment: { type: String, default: "No alignment" },
    armor_class: { type: Number, default: null },
    armor_desc: { type: String, default: "No armor desc" },
    hit_dice: { type: String, default: "No hit dice" },
    speed: { type: Object, default: null },
    strength: { type: Number, default: null },
    dexterity: { type: Number, default: null },
    constitution: { type: Number, default: null },
    intelligence: { type: Number, default: null },
    wisdom: { type: Number, default: null },
    charisma: { type: Number, default: null },
    strength_save: { type: Number, default: null },
    dexterity_save: { type: Number, default: null },
    constitution_save: { type: Number, default: null },
    intelligence_save: { type: Number, default: null },
    wisdom_save: { type: Number, default: null },
    charisma_save: { type: Number, default: null },
    perception: { type: Number, default: null },
    skills: { type: Object, default: null },
    damage_vulnerabilities: { type: String, default: "No damage vulnerabilities" },
    damage_resistances: { type: String, default: "No damage resistances" },
    damage_immunities: { type: String, default: "No damage immunities" },
    condition_immunities: { type: String, default: "No condition immunities" },
    senses: { type: String, default: "No senses" },
    languages: { type: String, default: "No languages" },
    challenge_rating: { type: String, default: "No challenge rating" },
    actions: { type: Array, default: null },
    reactions: { type: String, default: "No reactions" },
    legendary_desc: { type: String, default: "No legendary desc" },
    legendary_actions: { type: String, default: "No legendary actions" },
    special_abilities: { type: Array, default: null },
    spell_list: { type: Array, default: null },
    img_main: { type: String, default: "No image" },
    document__slug: { type: String, default: "No document slug" },
    document__title: { type: String, default: "No document title" },
    document__license_url: { type: String, default: "No license url" },

    //EDITABLE FIELDS
    icon: { type: String },
    initiative: { type: Number, min: 1 },
    image: { type: String },
    desc: { type: String, maxlength: 500 },
    nickName: { type: String, maxlength: 50, minlength: 1 },
    quantity: { type: Number, min: 1, max: 1000000 },
    hit_points: { type: Number, required: true },
  },
  SCHEMA_OPTIONS
);

MonsterSchema.virtual("encounter", {
  localField: "encounterId",
  foreignField: "_id",
  justOne: true,
  ref: "Encounter",
});
