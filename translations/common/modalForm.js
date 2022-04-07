export function getTranslations(lang) {
  let clientName, clientPhone, clientMail, clientMessage, buttonText
  switch (lang) {
    case 'ru':
      clientName = 'Имя'
      clientPhone = 'Телефон'
      clientMail = 'Почта'
      clientMessage = 'Сообщение'
      buttonText = 'Отправить'
      break

    case 'en':
      clientName = 'Name'
      clientPhone = 'Phone'
      clientMail = 'E-mail'
      clientMessage = 'Message'
      buttonText = 'Send'
      break

    default:
      clientName = "Ім'я"
      clientPhone = 'Телефон'
      clientMail = 'Пошта'
      clientMessage = 'Повідомлення'
      buttonText = 'Надіслати'
      break
  }
  return {
    clientName,
    clientPhone,
    clientMail,
    clientMessage,
    buttonText,
  }
}
