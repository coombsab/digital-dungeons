import { Schema } from 'mongoose'
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils"

export const MonsterSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  index: { type: String, required: true },
  desc: { type: String, maxlength: 500 },
  encounterId: { type: OBJECT_ID, required: true },
  hit_points: { type: Number, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  alignment: { type: String },
  icon: { type: String, required: true },
  initiative: { type: Number, min: 1 },
  nickName: { type: String, maxlength: 50, minlength: 1 }

}, SCHEMA_OPTIONS)

MonsterSchema.virtual("encounter", {
  localField: "encounterId",
  foreignField: "_id",
  justOne: true,
  ref: "Encounter"
})