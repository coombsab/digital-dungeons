
// @ts-ignore
import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CampaignSchema } from "../models/Campaign.js";
import { CampEncounterSchema } from "../models/CampaignEncounterSchema.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Campaign = mongoose.model('Campaign', CampaignSchema)

  CampaignEncounter = mongoose.model('CampaignEncounter', CampEncounterSchema)

}

export const dbContext = new DbContext()
