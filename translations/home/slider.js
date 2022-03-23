export function getTranslate(lang) {
  let sliderHeading = []
  let buttonText
  switch (lang) {
    case 'ru':
      sliderHeading = [
        'Global Barristers – клиенты всегда нас рекомендуют своим друзьям и знакомым.',
        'Global Barristers - наши узкопрофильные специалисты, помогают отстоять свои права.',
        'Global Barristers - наши клиенты нам доверяют самое главное.',
      ]
      buttonText = 'Получить консультацию'

      break
    case 'en':
      sliderHeading = [
        'Global Barristers - customers always recommend us to their friends and acquaintances.',
        'Global Barristers - our specialized specialists help to defend their rights.',
        'Global Barristers - our clients trust us with their own head',
      ]
      buttonText = 'Request a consultation'
      break
    default:
      sliderHeading = [
        'Global Barristers - клієнти завжди нас рекомендують своїм друзям і знайомим.',
        'Global Barristers - наші вузькопрофільні спеціалісти, допомагають відстояти свої права.',
        'Global Barristers - наші клієнти нам довіряють найголовніше.',
      ]
      buttonText = 'Отримати консультацію'
      break
  }
  return { sliderHeading, buttonText }
}
