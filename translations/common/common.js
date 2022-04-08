export function getCommonTranslations(lang) {
  let sendSuccessText,
    sendFailureText,
    sendToText,
    numberErrorText,
    writeToSupervisorText,
    requestConsultationText,
    requestConsultationWithText,
    waitText
  switch (lang) {
    case 'ru':
      sendSuccessText = 'Запрос отправлен'
      sendFailureText = 'Запрос не отправлен'
      sendToText = 'Отправлен запрос на консультацию с'
      numberErrorText = 'Введите верный номер телефона'
      writeToSupervisorText = 'Написать директору'
      requestConsultationText = 'Заказать консультацию'
      requestConsultationWithText = 'Заказать консультацию c '
      waitText = 'Ожидайте. Мы свяжемся с Вами.'
      break
    case 'en':
      sendSuccessText = 'Request sent'
      sendFailureText = 'Request not sent'
      sendToText = 'A request for a consultation has been sent to'
      numberErrorText = 'Enter valid phone number'
      writeToSupervisorText = 'Write to the manager'
      requestConsultationText = 'Request a consultation'
      requestConsultationWithText = 'Request a consultation with '
      waitText = 'Please wait. We will contact you.'
      break
    default:
      sendSuccessText = 'Запит надіслано'
      sendFailureText = 'Запит не надіслано'
      sendToText = 'Відправлено запит на консультацію з'
      numberErrorText = 'Введіть вірий номер телефону'
      writeToSupervisorText = 'Написати керівнику'
      requestConsultationText = 'Замовити консультацію'
      requestConsultationWithText = 'Замовити консультацію з '
      waitText = "Чекайте. Ми зв'яжемось з Вами."
      break
  }
  return {
    sendSuccessText,
    sendFailureText,
    sendToText,
    numberErrorText,
    writeToSupervisorText,
    requestConsultationText,
    requestConsultationWithText,
    waitText,
  }
}
