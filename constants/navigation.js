export const aboutUs = 'about-us'
export const ourTeam = 'our-team'
export const ourPractices = 'practices'
export const ourTowns = 'towns'
export const ourSolutions = 'business-solutions'
export const ourPartners = 'partners'
export const ourAffiliates = 'affiliates'

export const navigation = [
  { navName: aboutUs, key: 101, pages: [] },
  { navName: ourTeam, key: 102, pages: [] },
  {
    navName: ourPractices,
    key: 103,
    pages: [
      'criminal-law',
      'economic-law',
      'family-law',
      'tax-law',
      'civil-law',
      'customs-law',
      'immigration-legislation',
      'banking-disputes',
      'auto-law',
    ],
  },
  { navName: ourTowns, key: 104, pages: [] },
  { navName: ourSolutions, key: 105, pages: [] },
  { navName: ourPartners, key: 106, pages: [] },
  { navName: ourAffiliates, key: 107, pages: ['kyiv', 'kharkiv', 'odessa', 'dnipro', 'zaporizhzhia', 'kryviy-rih'] },
]
