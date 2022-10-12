import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class EncountersController extends BaseController {
  constructor() {
    super("api/encounters")
    this.router
      .get("", this.getEncounters)
      .get("/:encounterId/monsters", this.getMonstersByEncounterId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addEncounter
  }

  async getEncounters(req, res, next) {
    try {
    
    }
    catch(error) {
      next(error)
    }
  }

  async getMonstersByEncounterId(req, res, next) {
    try {
    
    }
    catch(error) {
      next(error)
    }
  }

  async addMonster(req, res, next) {
    try {
    
    }
    catch(error) {
      next(error)
    }
  } 
}
