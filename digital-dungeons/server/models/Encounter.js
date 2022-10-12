import { Schema } from "mongoose";
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils";

export const EncounterSchema = new Schema ({

  name: { type: String },
  description: { type: String },
  campaignId: { type: OBJECT_ID },
  type: { type: String, enum: ["fight", "stealth", "strength", "slight of hand"] },
  isCompleted: { type: Boolean },
  coverImg: { type: String },
  musicUrl: { type: String }

}, SCHEMA_OPTIONS)