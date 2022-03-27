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
} from '../../constants/pageNames'

export function getTranslations(lang) {
  let titles, partOne, partTwo, supervisor, other

  switch (lang) {
    case 'ru':
      titles = { services: 'Популярные услуги', other: 'Другое', contacts: 'Наши контакты' }
      partOne = [
        {
          html: virishennyaSporivHtml,
          text: 'Решение споров',
          subMenu: [
            { html: trudoviSporyHtml, text: 'Адвокат по трудовым спорам' },
            { html: bankiSporyHtml, text: 'Адвокат по банковским и финансовым спорам' },
            { html: sudoviSporyHtml, text: 'Адвокат по судебным спорам' },
            { html: neruhomostiHtml, text: 'Адвокат по спорам по недвижимости' },
          ],
        },
        {
          html: zahistBiznesuHtml,
          text: 'Защита бизнеса',
          subMenu: [{ html: zahistVidRejderstvaHtml, text: 'Защита бизнеса от рейдерства' }],
        },
      ]
      partTwo = [
        {
          html: simeyniSporyHtml,
          text: 'Адвокат по семейным спорам',
          subMenu: [
            { html: rozluchennyaHtml, text: 'Адвокат по разводу' },
            { html: majnoHtml, text: 'Адвокат по разделу имущества' },
            { html: podilBiznesuHtml, text: 'Адвокат по разделу бизнеса' },
            { html: alimentyHtml, text: 'Адвокат по алиментам' },
            { html: usynovlennyaHtml, text: 'Усыновление ребенка' },
            { html: pozbavlennjaBatkivskihPravHtml, text: 'Лишение родительских прав' },
          ],
        },
        { html: problemnyBorgyHtml, text: 'Адвокат по взысканию задолженности', subMenu: [] },
        {
          html: '',
          text: 'Адвокат Киев',
          subMenu: [],
        },
        {
          html: neruhomostiHtml,
          text: 'Юрист по недвижимости',
          subMenu: [],
        },
      ]
      supervisor = {
        title: 'Написать руководителю',
        text: 'Если вы остались недовольны нашей работой или что-то пошло не так. Напишите руководителю компании.',
        button: 'Написать',
      }
      other = [
        { html: privacyPolicyHtml, text: 'Политика конфиденциальности' },
        { html: offerAgreementHtml, text: 'Договор оферты' },
        { html: priceHtml, text: 'Прайс' },
        { html: aboutUsHtml, text: 'О нас' },
        { html: missionHtml, text: 'Миссия, ценности, стандарты' },
      ]
      break

    case 'en':
      titles = { services: 'Popular Services', other: 'Other', contacts: 'Our Contacts' }
      partOne = [
        {
          html: virishennyaSporivHtml,
          text: 'Settlement of Disputes',
          subMenu: [
            { html: trudoviSporyHtml, text: 'Labor Dispute Lawyer' },
            { html: bankiSporyHtml, text: 'Lawyer for banking and financial disputes' },
            { html: sudoviSporyHtml, text: 'Lawyer for litigation' },
            { html: neruhomostiHtml, text: 'Real Estate Dispute Lawyer' },
          ],
        },
        {
          html: zahistBiznesuHtml,
          text: 'Business protection',
          subMenu: [{ html: zahistVidRejderstvaHtml, text: 'Protecting Business from Raiders' }],
        },
        {
          html: '',
          text: 'Lawyer in Kyiv',
          subMenu: [],
        },
        {
          html: neruhomostiHtml,
          text: 'Real estate lawyer',
          subMenu: [],
        },
      ]
      partTwo = [
        {
          html: simeyniSporyHtml,
          text: 'Family Dispute Lawyer',
          subMenu: [
            { html: rozluchennyaHtml, text: 'Divorce Attorney' },
            { html: majnoHtml, text: 'Property Division Lawyer' },
            { html: podilBiznesuHtml, text: 'Business Division Lawyer' },
            { html: alimentyHtml, text: 'Alimony Lawyer' },
            { html: usynovlennyaHtml, text: 'Adoption of a child' },
            { html: pozbavlennjaBatkivskihPravHtml, text: 'Deprivation of parental rights' },
          ],
        },
        { html: problemnyBorgyHtml, text: 'Debt collection lawyer', subMenu: [] },
      ]
      supervisor = {
        title: 'Write to the manager',
        text: 'If you are not happy with our work or something went wrong. Write to the director of the company.',
        button: 'Write letter',
      }

      other = [
        { html: privacyPolicyHtml, text: 'Privacy Policy' },
        { html: offerAgreementHtml, text: 'Offer Agreement' },
        { html: priceHtml, text: 'Price' },
        { html: aboutUsHtml, text: 'About Us' },
        { html: missionHtml, text: 'Mission, Values, Standards' },
      ]
      break

    default:
      titles = { services: 'Популярні послуги', other: 'Інше', contacts: 'Наші контакти' }
      partOne = [
        {
          html: virishennyaSporivHtml,
          text: 'Вирішення спорів',
          subMenu: [
            { html: trudoviSporyHtml, text: 'Адвокат з трудових спорів' },
            { html: bankiSporyHtml, text: 'Адвокат з банківських і фінансових спорів' },
            { html: sudoviSporyHtml, text: 'Адвокат з судових спорів' },
            { html: neruhomostiHtml, text: 'Адвокат зі спорів щодо нерухомості' },
          ],
        },
        {
          html: zahistBiznesuHtml,
          text: 'Захист бізнесу',
          subMenu: [{ html: zahistVidRejderstvaHtml, text: 'Захист бізнесу від рейдерства' }],
        },
        {
          html: '',
          text: 'Адвокат Київ',
          subMenu: [],
        },
        {
          html: neruhomostiHtml,
          text: 'Юрист з нерухомості',
          subMenu: [],
        },
      ]
      partTwo = [
        {
          html: simeyniSporyHtml,
          text: 'Адвокат зі сімейних спорів',
          subMenu: [
            { html: rozluchennyaHtml, text: 'Адвокат з розлучення' },
            { html: majnoHtml, text: 'Адвокат з поділу майна' },
            { html: podilBiznesuHtml, text: 'Адвокат з поділу бізнесу' },
            { html: alimentyHtml, text: 'Адвокат з аліментів' },
            { html: usynovlennyaHtml, text: 'Усиновлення дитини' },
            { html: pozbavlennjaBatkivskihPravHtml, text: 'Позбавлення батьківських прав' },
          ],
        },
        { html: problemnyBorgyHtml, text: 'Адвокат по стягненню заборгованності', subMenu: [] },
      ]
      supervisor = {
        title: 'Написати керівнику',
        text: 'Якщо ви залишилися не задоволені нашою роботою або щось пішло не так. Напишіть керівнику компанії',
        button: 'Написати',
      }
      other = [
        { html: privacyPolicyHtml, text: 'Політика конфіденційності' },
        { html: offerAgreementHtml, text: 'Договір оферти' },
        { html: priceHtml, text: 'Прайс' },
        { html: aboutUsHtml, text: 'Про нас' },
        { html: missionHtml, text: 'Місія, цінності, стандарти' },
      ]
      break
  }
  return { titles, partOne, partTwo, supervisor, other }
}
