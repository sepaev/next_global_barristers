import {
  trudoviSporyHtml,
  bankiSporyHtml,
  sudoviSporyHtml,
  neruhomostiHtml,
  virishennyaSporivHtml,
  zahistBiznesuHtml,
  simeyniSporyHtml,
  problemnyBorgyHtml,
  zahistVidRejderstvaHtml,
  rozluchennyaHtml,
  majnoHtml,
  podilBiznesuHtml,
  alimentyHtml,
  usynovlennyaHtml,
  pozbavlennjaBatkivskihPravHtml,
  privacyPolicyHtml,
  offerAgreementHtml,
  priceHtml,
  aboutUsHtml,
  missionHtml,
  advocatHtml,
} from './pageNames'

export const partOne = [
  {
    html: virishennyaSporivHtml,
    subMenu: [
      { html: trudoviSporyHtml },
      { html: bankiSporyHtml },
      { html: sudoviSporyHtml },
      { html: neruhomostiHtml },
    ],
  },
  {
    html: zahistBiznesuHtml,
    subMenu: [{ html: zahistVidRejderstvaHtml }],
  },
  {
    html: advocatHtml,
    subMenu: [],
  },
  {
    html: neruhomostiHtml,
    subMenu: [],
  },
]

export const partTwo = [
  {
    html: simeyniSporyHtml,
    subMenu: [
      { html: rozluchennyaHtml },
      { html: majnoHtml },
      { html: podilBiznesuHtml },
      { html: alimentyHtml },
      { html: usynovlennyaHtml },
      { html: pozbavlennjaBatkivskihPravHtml },
    ],
  },
  { html: problemnyBorgyHtml, subMenu: [] },
]

export const other = [
  { html: privacyPolicyHtml },
  { html: offerAgreementHtml },
  { html: priceHtml },
  { html: aboutUsHtml },
  { html: missionHtml },
]
