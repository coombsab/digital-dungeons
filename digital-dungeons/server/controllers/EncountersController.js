import { Auth0Provider } from "@bcwdev/auth0provider";
import { encountersService } from "../services/EncountersService";
import { monstersService } from "../services/MonstersService";
import BaseController from "../utils/BaseController";

export class EncountersController extends BaseController {
  constructor() {
    super("api/encounters");
    this.router
      .get("/:encounterId/monsters", this.getMonstersByEncounterId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addEncounter)
      .delete("/:encounterId", this.removeEncounter);
  }

  async getMonstersByEncounterId(req, res, next) {
    try {
      const monsters = await monstersService.getMonstersByEncounterId(
        req.params.id
      );
      res.send(monsters);
    } catch (error) {
      next(error);
    }
  }

  async addEncounter(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const encounter = await encountersService.addEncounter(req.body);
      res.send(encounter);
    } catch (error) {
      next(error);
    }
  }
  async removeEncounter(req, res, next) {
    try {
      const encounter = await encountersService.removeEncounter(
        req.params.id,
        req.userInfo
      );
      res.send(encounter);
    } catch (error) {
      next(error);
    }
  }
}
