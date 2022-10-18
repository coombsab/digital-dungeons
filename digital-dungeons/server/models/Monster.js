import { Schema } from "mongoose";
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils";

export const MonsterSchema = new Schema(
  {
    index: { type: String },
    creatorId: { type: OBJECT_ID, required: true },
    encounterId: { type: OBJECT_ID, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: String, required: true },
    alignment: { type: String },
    subtype: { type: String },
    hit_dice: { type: String },
    languages: { type: String },
    strength: { type: Number },
    intelligence: { type: Number },
    challenge_rating: { type: Number },
    wisdom: { type: Number },
    dexterity: { type: Number },
    constitution: { type: Number },
    charisma: { type: Number },

    //EDITABLE FIELDS
    hit_points: { type: Number, required: true },
    nickName: { type: String, maxlength: 50, minlength: 1 },
    desc: { type: String, maxlength: 500 },
    image: { type: String },
    icon: { type: String },
    initiative: { type: Number, min: 1 },
    quantity: { type: Number, min: 1, max: 1000000 },
  },
  SCHEMA_OPTIONS
);

MonsterSchema.virtual("encounter", {
  localField: "encounterId",
  foreignField: "_id",
  justOne: true,
  ref: "Encounter",
});
