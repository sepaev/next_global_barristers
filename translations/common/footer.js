export function getTranslations(lang) {
  let titles, practices, disputes, business, familyLaw, supervisor, other

  switch (lang) {
    case 'ru':
      titles = ['Популярные услуги', 'Другое', 'Наши контакты']
      practices = [
        'Решение споров',
        'Защита бизнеса',
        'Адвокат по семейным спорам',
        'Адвокат по взысканию задолженности',
      ]
      disputes = [
        'Адвокат по трудовым спорам',
        'Адвокат по банковским и финансовым спорам',
        'Адвокат по судебным спорам',
        'Адвокат по спорам по недвижимости',
      ]
      business = ['Защита бизнеса от рейдерства']
      familyLaw = [
        'Адвокат по разводу',
        'Адвокат по разделу имущества',
        'Адвокат по разделу бизнеса',
        'Адвокат по алиментам',
        'Усыновление ребенка',
        'Лишение родительских прав',
      ]
      supervisor = [
        'Написать руководителю',
        'Если вы остались недовольны нашей работой или что-то пошло не так. Напишите руководителю компании',
        'Написать',
      ]
      other = ['Политика конфиденциальности', 'Договор оферты', 'Прайс', 'О нас', 'Миссия, ценности, стандарты']
      break

    case 'en':
      titles = ['Popular Services', 'Other', 'Our Contacts']
      practices = ['Settlement of Disputes', 'Business protection', 'Family Dispute Lawyer', 'Debt collection lawyer']
      disputes = [
        'Labor Dispute Lawyer',
        'Lawyer for banking and financial disputes',
        'Lawyer for litigation',
        'Real Estate Dispute Lawyer',
      ]
      business = ['Protecting Business from Raiders']
      familyLaw = [
        'Divorce Attorney',
        'Property Division Lawyer',
        'Business Division Lawyer',
        'Alimony Lawyer',
        'Adoption of a child',
        'Deprivation of parental rights',
      ]
      supervisor = [
        'Write to the manager',
        'If you are not happy with our work or something went wrong. Write to the head of the company ',
        'Write',
      ]
      other = ['Privacy Policy', 'Offer Agreement', 'Price', 'About Us', 'Mission, Values, Standards']
      break

    default:
      titles = ['Популярні послуги', 'Інше', 'Наші контакти']
      practices = [
        'Вирішення спорів',
        'Захист бізнесу',
        'Адвокат зі сімейних спорів',
        'Адвокат по стягненню заборгованності',
      ]
      disputes = [
        'Адвокат з трудових спорів',
        'Адвокат з банківських і фінансових спорів',
        'Адвокат з судових спорів',
        'Адвокат зі спорів щодо нерухомості',
      ]
      business = ['Захист бізнесу від рейдерства']
      familyLaw = [
        'Адвокат з розлучення',
        'Адвокат з поділу майна',
        'Адвокат з поділу бізнесу',
        'Адвокат з аліментів',
        'Усиновлення дитини',
        'Позбавлення батьківських прав',
      ]
      supervisor = [
        'Написати керівнику',
        'Якщо ви залишилися не задоволені нашою роботою або щось пішло не так. Напишіть керівнику компанії',
        'Написати',
      ]
      other = ['Політика конфіденційності', 'Договір оферти', 'Прайс', 'Про нас', 'Місія, цінності, стандарти']
      break
  }
  return { titles, practices, disputes, business, familyLaw, supervisor, other }
}
