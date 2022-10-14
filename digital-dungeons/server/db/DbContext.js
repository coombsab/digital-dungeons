

import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CampaignSchema } from "../models/Campaign.js";
import { CampEncounterSchema } from "../models/CampaignEncounterSchema.js";
import { EncounterSchema } from "../models/Encounter.js";
import { MonsterSchema } from "../models/Monster.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Monsters = mongoose.model('Monster', MonsterSchema)

  Encounters = mongoose.model('Encounter', EncounterSchema)

  Campaigns = mongoose.model('Campaign', CampaignSchema)

  CampaignEncounter = mongoose.model('CampaignEncounter', CampEncounterSchema)

}

export const dbContext = new DbContext()
