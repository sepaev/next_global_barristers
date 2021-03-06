export function getTranslations(lang) {
  let sliderTextArray
  let buttonText
  switch (lang) {
    case 'ru':
      sliderTextArray = [
        'Global Barristers – клиенты всегда нас рекомендуют своим друзьям и знакомым.',
        'Global Barristers - наши узкопрофильные специалисты, помогают отстоять свои права.',
        'Global Barristers - наши клиенты нам доверяют самое главное.',
      ]
      buttonText = 'Заказать обратный звонок'

      break
    case 'en':
      sliderTextArray = [
        'Global Barristers - customers always recommend us to their friends and acquaintances.',
        'Global Barristers - our specialized specialists help to defend their rights.',
        'Global Barristers - our clients trust us with their own head',
      ]
      buttonText = 'Please call me back'
      break
    default:
      sliderTextArray = [
        'Global Barristers - клієнти завжди нас рекомендують своїм друзям і знайомим.',
        'Global Barristers - наші вузькопрофільні спеціалісти, допомагають відстояти свої права.',
        'Global Barristers - наші клієнти нам довіряють найголовніше.',
      ]
      buttonText = 'Зворотній дзвінок'
      break
  }
  return { sliderTextArray, buttonText }
}
