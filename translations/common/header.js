export function getTranslations(lang) {
  let enActive, ruActive, ukActive, keywords, navTitle, description, consultButton
  switch (lang) {
    case 'ru':
      ruActive = ' active'
      keywords = 'Адвокат,Адвокат Киев,Консультации'
      navTitle = 'Адвокатское объединение'
      description = navTitle + ' «Global Barristers» ≡ Адвокат Киев ≡ Консультации'
      consultButton = 'Заказать консультацию'
      break

    case 'en':
      enActive = ' active'
      keywords = 'Lawyer, Lawyer Kiev, Consulting'
      navTitle = 'Lawyers Association'
      description = navTitle + ' «Global Barristers» ≡ Lawyer in Kyiv ≡ Consultations'
      consultButton = 'Request a consultation'
      break

    default:
      ukActive = ' active'
      keywords = 'Адвокат,Адвокат Київ,Консультації'
      navTitle = "Адвокатське об'єднання"
      description = navTitle + ' «Global Barristers» ≡ Адвокат Київ ≡ Консультації'
      consultButton = 'Замовити консультацію'
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
  }
}
