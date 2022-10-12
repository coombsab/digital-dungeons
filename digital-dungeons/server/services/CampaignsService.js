import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CampaignService {

  async getCampaigns(query) {
    const campaigns = await dbContext.Campaign.find({ ...query })
      .populate('creator', 'name picture')
    return campaigns
  }

  async addCampaign(campaignData) {
    const campaign = await dbContext.Campaign.create(campaignData)
    await campaign.populate('creator', 'name picture')
    return campaign
  }

  async getCampaignById(campaignId) {
    const campaign = await dbContext.Campaign.findById(campaignId).populate('creator', 'name picture')
    if (!campaign) {
      throw new BadRequest('Could not get Campaign due to invalid Id')
    }
    return campaign
  }


  async deleteCampaign(campaignId, userId) {
    const campaign = await this.getCampaignById(campaignId)
    // @ts-ignore
    if (campaign.creatorId.toString() != userId) {
      throw new Forbidden('Campaign is not owned by you')
    }
    await campaign.remove()
    return campaign
  }


  //TODO - This is a future goal
  // async getCharactersByCampaignId() {

  // }

}
export const campaignsService = new CampaignService