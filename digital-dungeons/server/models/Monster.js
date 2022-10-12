import { Schema } from 'mongoose'
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils"

export const MonsterSchema = new Schema ({
  name: { type: String },
  image: { type: String },
  index: { type: String },
  desc: { type: String },
  encounterId: { type: OBJECT_ID },
  hit_points: { type: Number },
  type: { type: String },
  size: { type: String },
  alignment: { type: String },
  icon: { type: String },
  initiative: {type: Number, min: 1 }

}, SCHEMA_OPTIONS)

MonsterSchema.virtual("encounter", {
  localField: "encounterId",
  foreignField: "_id",
  justOne: true,
  ref: "Encounter"
})