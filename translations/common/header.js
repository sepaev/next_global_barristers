export function getTranslations(lang) {
  let enActive, ruActive, ukActive, keywords, description, consultButton, menuItems, practicesItems, offices
  switch (lang) {
    case 'ru':
      ruActive = ' active'
      keywords = 'Адвокат,Адвокат Киев,Консультации'
      description = 'Адвокатское объединение «Global Barristers» ≡ Адвокат Киев ≡ Консультации'
      consultButton = 'Заказать консультацию'
      menuItems = ['О нас', 'Наша команда', 'Отрасли', 'Города', 'Бизнес решения', 'Партнеры', 'Контакты']
      practicesItems = [
        'Уголовное Право',
        'Хозяйственное Право',
        'Семейное Право',
        'Налоговое Право',
        'Гражданское Право',
        'Таможенное Право',
        'Иммиграционное Законодательство',
        'Споры с банком',
        'Автомобильное Право',
      ]
      offices = [
        'Офис в Киеве',
        'Офис в Харькове',
        'Офис в Одессе',
        'Офис в Днепре',
        'Офис в Запорожье',
        'Офис в Кривом Роге',
      ]
      break

    case 'en':
      enActive = ' active'
      keywords = 'Lawyer, Lawyer Kiev, Consulting'
      description = 'Law Firm «Global Barristers» ≡ Kyiv Lawyer ≡ Consultations'
      consultButton = 'Request consultation'
      menuItems = ['About us', 'Our team', 'Departments', 'Cities', 'Business solutions', 'Partners', 'Contacts']
      practicesItems = [
        'Criminal Law',
        'Commercial Law',
        'Family Law',
        'Tax Law',
        'Civil Law',
        'Customs Law',
        'Immigration Law',
        'Bank Disputes',
        'Car Law',
      ]
      offices = [
        'Office in Kyiv',
        'Office in Kharkiv',
        'Office in Odessa',
        'Office in the Dnieper',
        'Office in Zaporozhye',
        'Office in Kryvyi Rih',
      ]
      break

    default:
      console.log('default')
      ukActive = ' active'
      keywords = 'Адвокат,Адвокат Київ,Консультації'
      description = "Адвокатське об'єднання «Global Barristers» ≡ Адвокат Київ ≡ Консультації"
      consultButton = 'Замовити консультацію'
      menuItems = ['Про нас', 'Наша команда', 'Галузі', 'Міста', 'Бізнес рішення', 'Партнери', 'Контакти']
      practicesItems = [
        'Кримінальне Право',
        'Господарське Право',
        'Сімейне Право',
        'Податкове Право',
        'Цивільне Право',
        'Митне Право',
        'Імміграційне Законодавство',
        'Спори з банком',
        'Автомобільне Право',
      ]
      offices = [
        'Офіс в Києві',
        'Офіс в Харкові',
        'Офіс в Одесі',
        'Офіс в Дніпрі',
        'Офіс в Запоріжжі',
        'Офіс в Кривому Розі',
      ]
      break
  }
  return { enActive, ruActive, ukActive, keywords, description, consultButton, menuItems, practicesItems, offices }
}
