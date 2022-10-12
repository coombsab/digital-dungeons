import { Auth0Provider } from "@bcwdev/auth0provider";
import { encountersService } from "../services/EncountersService";
import BaseController from "../utils/BaseController";

export class EncountersController extends BaseController {
  constructor() {
    super("api/encounters")
    this.router
      .get("/:encounterId/monsters", this.getMonstersByEncounterId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addEncounter)
  }


  async getMonstersByEncounterId(req, res, next) {
    try {

    }
    catch (error) {
      next(error)
    }
  }

  async addEncounter(req, res, next) {
    try {

    }
    catch (error) {
      next(error)
    }
  }
}
