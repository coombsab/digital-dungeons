import { Auth0Provider } from "@bcwdev/auth0provider";
import { campaignsService } from "../services/CampaignsService.js";
import { encountersService } from "../services/EncountersService.js";
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

  async getCampaigns(req, res, next) {
    try {
      const campaigns = await campaignsService.getCampaigns(req.query)
      res.send(campaigns)
    } catch (error) {
      next(error);
    }
  }
  async getEncountersByCampaignId(req, res, next) {
    try {
      const encounters = await encountersService.getEncountersByCampaignId(req.params.campaignId)
      res.send(encounters)
    } catch (error) {
      next(error);
    }
  }
  async addCampaign(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const campaign = await campaignsService.addCampaign(req.body)
      res.send(campaign)
    } catch (error) {
      next(error);
    }
  }
}
