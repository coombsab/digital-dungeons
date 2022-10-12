import { dbContext } from "../db/DbContext.js"

class CampaignService {

  async getCampaigns(query) {
    const campaigns = await dbContext.Campaign.find({ query })
      .populate('creator', 'name picture')
    return campaigns
  }

  async addCampaign() {

  }

  async getEncountersByCampaignId() {

  }


  //TODO - This is a future goal
  // async getCharactersByCampaignId() {

  // }

}
export const campaignsService = new CampaignService