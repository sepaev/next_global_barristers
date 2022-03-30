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
  let titles, supervisor

  switch (lang) {
    case 'ru':
      titles = { services: 'Популярные услуги', other: 'Другое', contacts: 'Наши контакты' }
      supervisor = {
        title: 'Написать руководителю',
        text: 'Если вы остались недовольны нашей работой или что-то пошло не так. Напишите руководителю компании.',
        button: 'Написать',
      }
      break

    case 'en':
      titles = { services: 'Popular Services', other: 'Other', contacts: 'Our Contacts' }
      supervisor = {
        title: 'Write to the manager',
        text: 'If you are not happy with our work or something went wrong. Write to the director of the company.',
        button: 'Write letter',
      }
      break

    default:
      titles = { services: 'Популярні послуги', other: 'Інше', contacts: 'Наші контакти' }
      supervisor = {
        title: 'Написати керівнику',
        text: 'Якщо ви залишилися не задоволені нашою роботою або щось пішло не так. Напишіть керівнику компанії',
        button: 'Написати',
      }
      break
  }
  return { titles, supervisor }
}
