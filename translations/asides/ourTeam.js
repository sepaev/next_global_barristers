export function getTranslations(lang) {
  let lawyersTitle, competationsTitle
  switch (lang) {
    case 'ru':
      lawyersTitle = 'Наши адвокаты'
      competationsTitle = 'Компетенции:'
      break
    case 'en':
      lawyersTitle = 'Our lawyers'
      competationsTitle = 'Competences:'
      break
    default:
      lawyersTitle = 'Наші адвокати'
      competationsTitle = 'Компетенції:'
      break
  }
  return { lawyersTitle, competationsTitle }
}
