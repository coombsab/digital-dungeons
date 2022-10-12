
// @ts-ignore
import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CampaignSchema } from "../models/Campaign.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Campaign = mongoose.model('Campaign', CampaignSchema)

}

export const dbContext = new DbContext()
