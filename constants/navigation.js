import {
  aboutUsHtml,
  ourTeamHtml,
  ourPracticesHtml,
  ourTownsHtml,
  ourSolutionsHtml,
  ourPartnersHtml,
  ourAffiliatesHtml,
  criminalLawHtml,
  economicLawHtml,
  familyLawHtml,
  taxLawHtml,
  civilLawHtml,
  customsLawHtml,
  immigrationLegislationHtml,
  bankingDisputesHtml,
  autoLawHtml,
  kyivHtml,
  kharkivHtml,
  odessaHtml,
  dniproHtml,
  zaporizhzhiaHtml,
  kryviyRihHtml,
} from './pageNames'

export const navigation = [
  { navPage: aboutUsHtml, key: 101, pages: [] },
  { navPage: ourTeamHtml, key: 102, pages: [] },
  {
    navPage: ourPracticesHtml,
    key: 103,
    pages: [
      criminalLawHtml,
      economicLawHtml,
      familyLawHtml,
      taxLawHtml,
      civilLawHtml,
      customsLawHtml,
      immigrationLegislationHtml,
      bankingDisputesHtml,
      autoLawHtml,
    ],
  },
  { navPage: ourTownsHtml, key: 104, pages: [] },
  { navPage: ourSolutionsHtml, key: 105, pages: [] },
  { navPage: ourPartnersHtml, key: 106, pages: [] },
  {
    navPage: ourAffiliatesHtml,
    key: 107,
    pages: [kyivHtml, kharkivHtml, odessaHtml, dniproHtml, zaporizhzhiaHtml, kryviyRihHtml],
  },
]
