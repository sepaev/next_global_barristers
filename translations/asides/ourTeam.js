export function getTranslations(lang) {
  let lawyersTitle, competationsTitle, buttonText
  switch (lang) {
    case 'ru':
      lawyersTitle = 'Наши адвокаты'
      competationsTitle = 'Компетенции:'
      buttonText = 'отправить запрос'

      break
    case 'en':
      lawyersTitle = 'Our lawyers'
      competationsTitle = 'Competences:'
      buttonText = 'request a consultation'

      break
    default:
      lawyersTitle = 'Наші адвокати'
      competationsTitle = 'Компетенции:'
      buttonText = 'відправити запит'

      break
  }
  return { lawyersTitle, competationsTitle, buttonText }
}
