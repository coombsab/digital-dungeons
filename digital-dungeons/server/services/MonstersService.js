import { dbContext } from "../db/DbContext";

class MonstersService {
  async editMonster(monsterData) {

  }

  async deleteMonster(monsterId, userId) {
  }

  async addMonster(monsterData) {
    const monster = await dbContext.Monster.create(monsterData);
    await monster.populate("encounter")
    return monster
  }

  async getMonstersByEncounterId(encounterId) {
    const monsters = await dbContext.Monster.find({ encounterId }).populate(
      "encounter"
    );
    return monsters;
  }

}

export const monstersService = new MonstersService();
