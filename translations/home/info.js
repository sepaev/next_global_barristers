export function getTranslations(lang) {
  let paragraphs = []
  let infoHeading
  let buttonText
  switch (lang) {
    case 'ru':
      infoHeading = 'О нас'
      paragraphs = [
        'GLOBAL BARRISTERS –  адвокатское объединение, которое предоставляет юридические услуги только в тех сферах, в которых имеет исключительный опыт и специализацию.',
        'Мы считаем, что для того, чтобы стать профессионалом в какой-то деятельности, ею необходимо результативно заниматься ежедневно много лет. Поэтому наша компания объединяет узкопрофильных специалистов, которые ведут практику в конкретных отраслях права. В нашу специализацию входит разрешение споров, защита бизнеса, семейное и наследственное право, уголовное право, проблемные долги и антирейдерство.',
      ]
      buttonText = 'ПОДРОБНЕЕ'

      break
    case 'en':
      infoHeading = 'About us'
      paragraphs = [
        'GLOBAL BARRISTERS is a law firm that provides legal services only in those areas in which it has exceptional experience and specialization.',
        'We believe that in order to become a professional in an activity, you need to do it effectively for many years. That is why our company unites narrow-profile specialists who practice in specific areas of law. Our specialization includes dispute resolution, business protection, family and inheritance law, criminal law, problem debts and anti-raiding. ',
      ]
      buttonText = 'DETAILS'
      break
    default:
      infoHeading = 'Про нас'
      paragraphs = [
        'GLOBAL BARRISTERS – адвокатське об’єднання, яке надає юридичні послуги тільки в тих сферах, в яких має винятковий досвід і спеціалізацію.',
        'Ми вважаємо, що для того, щоб стати професіоналом в якійсь діяльності, нею необхідно результативно займатися щодня багато років. Тому наша компанія об’єднує вузькопрофільних фахівців, які ведуть практику в конкретних галузях права. В нашу спеціалізацію входить вирішення спорів, захист бізнесу, сімейне та спадкове право, кримінальне право, проблемні борги і антирейдерство.',
      ]
      buttonText = 'ДЕТАЛЬНІШЕ'
      break
  }
  return { infoHeading, paragraphs, buttonText }
}
