export function getCommonTranslations(lang) {
  let sendText, sendToText, numberError
  switch (lang) {
    case 'ru':
      sendText = 'Запрос отправлен'
      sendToText = 'Отправлен запрос на консультацию с'
      numberError = 'Введите правильный номер телефона'
      break
    case 'en':
      sendText = 'Request sent'
      sendToText = 'A request for a consultation has been sent to'
      numberError = 'Enter valid phone number'
      break
    default:
      sendText = 'Запит надіслано'
      sendToText = 'Відправлено запит на консультацію з'
      numberError = 'Введіть вірий номер телефону'
      break
  }
  return { sendText, sendToText, numberError }
}
