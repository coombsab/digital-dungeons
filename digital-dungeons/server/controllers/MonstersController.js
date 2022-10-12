import BaseController from "../utils/BaseController.js";

export class MonstersController extends BaseController {
  constructor() {
    super('api/monsters'),
      this.router
        .get('', this.getMonsters)


  }


  async getMonsters(req, res, next) {
    try {

    } catch (error) {

    }
  }



  addMonster(req, res, next) {
    try {

    } catch (error) {

    }
  }







}