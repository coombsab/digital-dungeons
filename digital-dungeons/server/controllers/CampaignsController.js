import { Auth0Provider } from "@bcwdev/auth0provider";
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
    } catch (error) {
      next(error);
    }
  }
}
