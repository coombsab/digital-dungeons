import { AppState } from "../AppState.js";
import { Campaign } from "../models/Campaign.js";
import { baseApi } from "./AxiosService.js";

class CampaignsService {
  async getCampaigns() {
    const res = await baseApi.get('/api/campaigns')
    AppState.campaigns = res.data.map(p => new Campaign(p))
  }
  async getCampaignsByAccountId() {
    // const res = await
  }

  async addCampaign() {
    // const res = await
  }

  async addCampaignEncounter() {
    // const res = await
  }
}

export const campaignsService = new CampaignsService();
