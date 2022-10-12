import { dbContext } from "../db/DbContext"

class EncountersService {

  async getEncountersByCampaignId(campaignId) {
    const encounters = await dbContext.Encounter.find({ campaignId })
      .populate("campaign")
    return encounters
  }

  async addEncounter(encounterData) {
    const encounter = await dbContext.Encounter.create(encounterData)
    await encounter.populate('campaign')
    return encounter
  }
}

export const encountersService = new EncountersService()