export function getTranslations(lang) {
  let enActive, ruActive, ukActive, keywords, description, consultButton, navTranslations, subMenuTranslations
  switch (lang) {
    case 'ru':
      ruActive = ' active'
      keywords = 'Адвокат,Адвокат Киев,Консультации'
      description = 'Адвокатское объединение «Global Barristers» ≡ Адвокат Киев ≡ Консультации'
      consultButton = 'Заказать консультацию'
      navTranslations = {
        'about-us': 'О нас',
        'our-team': 'Наша команда',
        practices: 'Отрасли',
        towns: 'Города',
        'business-solutions': 'Бизнес решение',
        partners: 'Партнеры',
        affiliates: 'Контакты',
      }
      subMenuTranslations = {
        kyiv: 'Офис в Киеве',
        kharkiv: 'Офис в Харькове',
        odessa: 'Офис в Одессе',
        dnipro: 'Офис в Днепре',
        zaporizhzhia: 'Офис в Запорожье',
        'kryviy-rih': 'Офис в Кривом Рогу',
        'criminal-law': 'Уголовное Право',
        'economic-law': 'Хозяйственное Право',
        'family-law': 'Семейное Право',
        'tax-law': 'Налоговое Право',
        'civil-law': 'Гражданское Право',
        'customs-law': 'Таможенное Право',
        'immigration-legislation': 'Иммиграционное Законодательство',
        'banking-disputes': 'Споры с банком',
        'auto-law': 'Автомобильное Право',
      }
      break

    case 'en':
      enActive = ' active'
      keywords = 'Lawyer, Lawyer Kiev, Consulting'
      description = 'Law Firm «Global Barristers» ≡ Kyiv Lawyer ≡ Consultations'
      consultButton = 'Request consultation'
      navTranslations = {
        'about-us': 'About us',
        'our-team': 'Our team',
        practices: 'Departments',
        towns: 'Cities',
        'business-solutions': 'Business solutions',
        partners: 'Partners',
        affiliates: 'Contacts',
      }
      subMenuTranslations = {
        kyiv: 'Office in Kyiv',
        kharkiv: 'Office in Kharkiv',
        odessa: 'Office in Odessa',
        dnipro: 'Office in Dnipro',
        zaporizhzhia: 'Office in Zaporozhye',
        'kryviy-rih': 'Office in Kryvyi Rih',
        'criminal-law': 'Criminal Law',
        'economic-law': 'Commercial Law',
        'family-law': 'Family Law',
        'tax-law': 'Tax Law',
        'civil-law': 'Civil Law',
        'customs-law': 'Customs Law',
        'immigration-legislation': 'Immigration Law',
        'banking-disputes': 'Bank Disputes',
        'auto-law': 'Auto Law',
      }
      break

    default:
      console.log('default')
      ukActive = ' active'
      keywords = 'Адвокат,Адвокат Київ,Консультації'
      description = "Адвокатське об'єднання «Global Barristers» ≡ Адвокат Київ ≡ Консультації"
      consultButton = 'Замовити консультацію'
      navTranslations = {
        'about-us': 'Про нас',
        'our-team': 'Наша команда',
        practices: 'Галузі',
        towns: 'Міста',
        'business-solutions': 'Бізнес рішення',
        partners: 'Партнери',
        affiliates: 'Контакти',
      }
      subMenuTranslations = {
        kyiv: 'Офіс в Києві',
        kharkiv: 'Офіс в Харкові',
        odessa: 'Офіс в Одесі',
        dnipro: 'Офіс в Дніпрі',
        zaporizhzhia: 'Офіс в Запоріжжі',
        'kryviy-rih': 'Офіс в Кривому Розі',
        'criminal-law': 'Кримінальне Право',
        'economic-law': 'Господарське Право',
        'family-law': 'Сімейне Право',
        'tax-law': 'Податкове Право',
        'civil-law': 'Цивільне Право',
        'customs-law': 'Митне Право',
        'immigration-legislation': 'Імміграційне Законодавство',
        'banking-disputes': 'Спори з банком',
        'auto-law': 'Автомобільне Право',
      }
      break
  }
  return {
    enActive,
    ruActive,
    ukActive,
    keywords,
    description,
    consultButton,
    navTranslations,
    subMenuTranslations,
  }
}
