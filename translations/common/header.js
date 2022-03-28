import {
  aboutUsHtml,
  ourTeamHtml,
  ourPracticesHtml,
  ourTownsHtml,
  ourSolutionsHtml,
  ourPartnersHtml,
  ourAffiliatesHtml,
  kyivHtml,
  kharkivHtml,
  odessaHtml,
  dniproHtml,
  zaporizhzhiaHtml,
  kryviyRihHtml,
  criminalLawHtml,
  economicLawHtml,
  familyLawHtml,
  taxLawHtml,
  civilLawHtml,
  customsLawHtml,
  immigrationLegislationHtml,
  bankingDisputesHtml,
  autoLawHtml,
} from '../../constants/pageNames'
export function getTranslations(lang) {
  let enActive, ruActive, ukActive, keywords, navTitle, description, consultButton, navTranslations, subMenuTranslations
  switch (lang) {
    case 'ru':
      ruActive = ' active'
      keywords = 'Адвокат,Адвокат Киев,Консультации'
      navTitle = 'Адвокатское объединение'
      description = navTitle + ' «Global Barristers» ≡ Адвокат Киев ≡ Консультации'
      consultButton = 'Заказать консультацию'
      navTranslations = {
        [aboutUsHtml]: 'О нас',
        [ourTeamHtml]: 'Наша команда',
        [ourPracticesHtml]: 'Отрасли',
        [ourTownsHtml]: 'Города',
        [ourSolutionsHtml]: 'Бизнес решение',
        [ourPartnersHtml]: 'Партнеры',
        [ourAffiliatesHtml]: 'Контакты',
      }
      subMenuTranslations = {
        [kyivHtml]: 'Офис в Киеве',
        [kharkivHtml]: 'Офис в Харькове',
        [odessaHtml]: 'Офис в Одессе',
        [dniproHtml]: 'Офис в Днепре',
        [zaporizhzhiaHtml]: 'Офис в Запорожье',
        [kryviyRihHtml]: 'Офис в Кривом Рогу',
        [criminalLawHtml]: 'Уголовное Право',
        [economicLawHtml]: 'Хозяйственное Право',
        [familyLawHtml]: 'Семейное Право',
        [taxLawHtml]: 'Налоговое Право',
        [civilLawHtml]: 'Гражданское Право',
        [customsLawHtml]: 'Таможенное Право',
        [immigrationLegislationHtml]: 'Иммиграционное Законодательство',
        [bankingDisputesHtml]: 'Споры с банком',
        [autoLawHtml]: 'Автомобильное Право',
      }
      break

    case 'en':
      enActive = ' active'
      keywords = 'Lawyer, Lawyer Kiev, Consulting'
      navTitle = 'Lawyers Association'
      description = navTitle + ' «Global Barristers» ≡ [kyivHtml] Lawyer ≡ Consultations'
      consultButton = 'Request consultation'
      navTranslations = {
        [aboutUsHtml]: 'About us',
        [ourTeamHtml]: 'Our team',
        [ourPracticesHtml]: 'Departments',
        [ourTownsHtml]: 'Cities',
        [ourSolutionsHtml]: 'Business solutions',
        [ourPartnersHtml]: 'Partners',
        [ourAffiliatesHtml]: 'Contacts',
      }
      subMenuTranslations = {
        [kyivHtml]: 'Office in Kyiv',
        [kharkivHtml]: 'Office in Kharkiv',
        [odessaHtml]: 'Office in Odessa',
        [dniproHtml]: 'Office in Dnipro',
        [zaporizhzhiaHtml]: 'Office in Zaporozhye',
        [kryviyRihHtml]: 'Office in Kryvyi Rih',
        [criminalLawHtml]: 'Criminal Law',
        [economicLawHtml]: 'Commercial Law',
        [familyLawHtml]: 'Family Law',
        [taxLawHtml]: 'Tax Law',
        [civilLawHtml]: 'Civil Law',
        [customsLawHtml]: 'Customs Law',
        [immigrationLegislationHtml]: 'Immigration Law',
        [bankingDisputesHtml]: 'Bank Disputes',
        [autoLawHtml]: 'Auto Law',
      }
      break

    default:
      console.log('default')
      ukActive = ' active'
      keywords = 'Адвокат,Адвокат Київ,Консультації'
      navTitle = "Адвокатське об'єднання"
      description = navTitle + ' «Global Barristers» ≡ Адвокат Київ ≡ Консультації'
      consultButton = 'Замовити консультацію'
      navTranslations = {
        [aboutUsHtml]: 'Про нас',
        [ourTeamHtml]: 'Наша команда',
        [ourPracticesHtml]: 'Галузі',
        [ourTownsHtml]: 'Міста',
        [ourSolutionsHtml]: 'Бізнес рішення',
        [ourPartnersHtml]: 'Партнери',
        [ourAffiliatesHtml]: 'Контакти',
      }
      subMenuTranslations = {
        [kyivHtml]: 'Офіс в Києві',
        [kharkivHtml]: 'Офіс в Харкові',
        [odessaHtml]: 'Офіс в Одесі',
        [dniproHtml]: 'Офіс в Дніпрі',
        [zaporizhzhiaHtml]: 'Офіс в Запоріжжі',
        [kryviyRihHtml]: 'Офіс в Кривому Розі',
        [criminalLawHtml]: 'Кримінальне Право',
        [economicLawHtml]: 'Господарське Право',
        [familyLawHtml]: 'Сімейне Право',
        [taxLawHtml]: 'Податкове Право',
        [civilLawHtml]: 'Цивільне Право',
        [customsLawHtml]: 'Митне Право',
        [immigrationLegislationHtml]: 'Імміграційне Законодавство',
        [bankingDisputesHtml]: 'Спори з банком',
        [autoLawHtml]: 'Автомобільне Право',
      }
      break
  }
  return {
    enActive,
    ruActive,
    ukActive,
    keywords,
    navTitle,
    description,
    consultButton,
    navTranslations,
    subMenuTranslations,
  }
}
