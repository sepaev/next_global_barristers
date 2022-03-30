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
    html: virishennyaSporivHtml[0],
    text: virishennyaSporivHtml[1],
    subMenu: [
      { html: trudoviSporyHtml[0], text: trudoviSporyHtml[1] },
      { html: bankiSporyHtml[0], text: bankiSporyHtml[1] },
      { html: sudoviSporyHtml[0], text: sudoviSporyHtml[1] },
      { html: neruhomostiHtml[0], text: neruhomostiHtml[1] },
    ],
  },
  {
    html: zahistBiznesuHtml[0],
    text: zahistBiznesuHtml[1],
    subMenu: [{ html: zahistVidRejderstvaHtml[0], text: zahistVidRejderstvaHtml[1] }],
  },
  {
    html: advocatHtml[0],
    text: advocatHtml[1],
    subMenu: [],
  },
  {
    html: neruhomostiHtml[0],
    text: neruhomostiHtml[1],
    subMenu: [],
  },
]

export const partTwo = [
  {
    html: simeyniSporyHtml[0],
    text: simeyniSporyHtml[1],
    subMenu: [
      { html: rozluchennyaHtml[0], text: rozluchennyaHtml[1] },
      { html: majnoHtml[0], text: majnoHtml[1] },
      { html: podilBiznesuHtml[0], text: podilBiznesuHtml[1] },
      { html: alimentyHtml[0], text: alimentyHtml[1] },
      { html: usynovlennyaHtml[0], text: usynovlennyaHtml[1] },
      { html: pozbavlennjaBatkivskihPravHtml[0], text: pozbavlennjaBatkivskihPravHtml[1] },
    ],
  },
  { html: problemnyBorgyHtml[0], text: problemnyBorgyHtml[1], subMenu: [] },
]

export const other = [
  { html: privacyPolicyHtml[0], text: privacyPolicyHtml[1] },
  { html: offerAgreementHtml[0], text: offerAgreementHtml[1] },
  { html: priceHtml[0], text: priceHtml[1] },
  { html: aboutUsHtml[0], text: aboutUsHtml[1] },
  { html: missionHtml[0], text: missionHtml[1] },
]
