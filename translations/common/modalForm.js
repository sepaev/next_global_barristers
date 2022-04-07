export function getTranslations(lang) {
  let clientName,
    clientNameError,
    clientPhone,
    clientPhoneError,
    clientMail,
    clientMailInvalid,
    clientMailError,
    clientMessage,
    clientMessageError,
    buttonText
  switch (lang) {
    case 'ru':
      clientName = 'Имя'
      clientNameError = 'Поле имя обязательное для заполнения'
      clientPhone = 'Телефон'
      clientPhoneError = 'Поле телефон обязательное для заполнения'
      clientMail = 'Почта'
      clientMailInvalid = 'Введите валидный e-mail'
      clientMailError = 'Поле почта обязательное для заполнения'
      clientMessage = 'Сообщение'
      clientMessageError = 'Поле сообщение обязательное для заполнения'
      buttonText = 'Отправить'
      break

    case 'en':
      clientName = 'Name'
      clientNameError = 'Name field is required'
      clientPhone = 'Phone'
      clientPhoneError = 'Phone field is required'
      clientMail = 'E-mail'
      clientMailInvalid = 'Please enter a valid e-mail'
      clientMailError = 'E-mail field is required'
      clientMessage = 'Message'
      clientMessageError = 'Message field is required'
      buttonText = 'Send'
      break

    default:
      clientName = "Ім'я"
      clientNameError = "Поле ім'я обов'язкове для заповнення"
      clientPhone = 'Телефон'
      clientPhoneError = "Поле телефон обов'язкове для заповнення"
      clientMail = 'Пошта'
      clientMailInvalid = 'Введіть валідний e-mail'
      clientMailError = "Поле пошта обов'язкове для заповнення"
      clientMessage = 'Повідомлення'
      clientMessageError = "Поле повідомлення обов'язкове для заповнення"
      buttonText = 'Надіслати'
      break
  }
  return {
    clientName,
    clientNameError,
    clientPhone,
    clientPhoneError,
    clientMail,
    clientMailInvalid,
    clientMailError,
    clientMessage,
    clientMessageError,
    buttonText,
  }
}
