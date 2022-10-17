import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Campaign.js').Campaign} */
  campaigns: [],
  /** @type {import('./models/Campaign.js').Campaign || null} */
  activeCampaign: null,
  /** @type {import('./models/Encounter.js').Encounter} */
  encounters: [],
  /** @type {import('./models/Encounter.js').Encounter || null} */
  activeEncounter: {},
  /** @type {import('./models/Monster.js').Monster[]} */
  monsters: [],
  /** @type {import('./models/Monster.js').Monster || null} */
  activeMonster: null,
  /** @type {import('./models/Spell.js').Spell} */
  spells: [],
  /** @type {import('./models/Spell.js').Spell} */
  activeSpell: null,




  nextPage: null,
  previousPage: null,
  count: null,
});
