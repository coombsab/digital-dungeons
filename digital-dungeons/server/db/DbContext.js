
// @ts-ignore
import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CampaignSchema } from "../models/Campaign.js";
import { CampEncounterSchema } from "../models/CampaignEncounterSchema.js";
import { EncounterSchema } from "../models/Encounter.js";
import { MonsterSchema } from "../models/Monster.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Monster = mongoose.model('Monster', MonsterSchema)

  Encounter = mongoose.model('Encounter', EncounterSchema)

  Campaign = mongoose.model('Campaign', CampaignSchema)

  CampaignEncounter = mongoose.model('CampaignEncounter', CampEncounterSchema)

}

export const dbContext = new DbContext()
