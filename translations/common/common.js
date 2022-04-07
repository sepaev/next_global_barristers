export function getCommonTranslations(lang) {
  let sendSuccessText, sendFailureText, sendToText, numberErrorText, modalSupervisorText, modalConsultationText
  switch (lang) {
    case 'ru':
      sendSuccessText = 'Запрос отправлен'
      sendFailureText = 'Запрос не отправлен'
      sendToText = 'Отправлен запрос на консультацию с'
      numberErrorText = 'Введите верный номер телефона'
      modalSupervisorText = 'Написать директору'
      modalConsultationText = 'Заказать консультацию'
      break
    case 'en':
      sendSuccessText = 'Request sent'
      sendFailureText = 'Request not sent'
      sendToText = 'A request for a consultation has been sent to'
      numberErrorText = 'Enter valid phone number'
      modalSupervisorText = 'Write to the manager'
      modalConsultationText = 'Request a consultation'
      break
    default:
      sendSuccessText = 'Запит надіслано'
      sendFailureText = 'Запит не надіслано'
      sendToText = 'Відправлено запит на консультацію з'
      numberErrorText = 'Введіть вірий номер телефону'
      modalSupervisorText = 'Написати керівнику'
      modalConsultationText = 'Замовити консультацію'
      break
  }
  return { sendSuccessText, sendFailureText, sendToText, numberErrorText, modalSupervisorText, modalConsultationText }
}
