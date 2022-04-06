export function getCommonTranslations(lang) {
  let sendSuccessText, sendFailureText, sendToText, numberErrorText
  switch (lang) {
    case 'ru':
      sendSuccessText = 'Запрос отправлен'
      sendFailureText = 'Запрос не отправлен'
      sendToText = 'Отправлен запрос на консультацию с'
      numberErrorText = 'Введите правильный номер телефона'
      break
    case 'en':
      sendSuccessText = 'Request sent'
      sendFailureText = 'Request not sent'
      sendToText = 'A request for a consultation has been sent to'
      numberErrorText = 'Enter valid phone number'
      break
    default:
      sendSuccessText = 'Запит надіслано'
      sendFailureText = 'Запит не надіслано'
      sendToText = 'Відправлено запит на консультацію з'
      numberErrorText = 'Введіть вірий номер телефону'
      break
  }
  return { sendSuccessText, sendFailureText, sendToText, numberErrorText }
}
