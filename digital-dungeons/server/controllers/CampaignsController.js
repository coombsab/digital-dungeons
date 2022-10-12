import { Auth0Provider } from "@bcwdev/auth0provider";
import { campaignsService } from "../services/CampaignsService.js";
import BaseController from "../utils/BaseController.js";

export class CampaignsController extends BaseController {
  constructor() {
    super("api/campaigns");
    this.router
      .get("", this.getCampaigns)
      .get("/:campaignId/encounters", this.getEncountersByCampaignId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addCampaign);
  }

  async getCampaigns(res, req, next) {
    try {
      const campaigns = await campaignsService.getCampaigns(req.query)
      res.send(campaigns)
    } catch (error) {
      next(error);
    }
  }
  async getEncountersByCampaignId(res, req, next) {
    try {

    } catch (error) {
      next(error);
    }
  }
  async addCampaign(res, req, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const campaign = await campaignsService.addCampaign(req.body)
      res.send(campaign)
    } catch (error) {
      next(error);
    }
  }
}
