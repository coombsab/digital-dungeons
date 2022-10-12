import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors.js";

class EncountersService {
  async removeEncounter(encounterId, userId) {
    const encounter = await dbContext.Encounter.findById(encounterId);

    // @ts-ignore
    if (encounter.creatorId.toString() != userId) {
      throw new BadRequest("You Ain't You Sir!");
    }
    if (!encounter) {
      throw new BadRequest("Bad encounter Id");
    }

    await encounter.remove();
    return "Encounter Has Been Deleted!";
  }

  async getEncountersByCampaignId(campaignId) {
    const encounters = await dbContext.Encounter.find({ campaignId }).populate(
      "campaign"
    );
    return encounters;
  }

  async addEncounter(encounterData) {
    const encounter = await dbContext.Encounter.create(encounterData);
    await encounter.populate("campaign");
    return encounter;
  }
}

export const encountersService = new EncountersService();
