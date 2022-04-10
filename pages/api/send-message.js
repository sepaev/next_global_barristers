import { ownerEmail, ownerName } from '../../constants/contacts'
import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail'

export default async function sendMailApi(req, res) {
  const { dateString, user } = req.body
  dotenv.config()
  const { SENDGRID_API_KEY, TELEGRAM_BOT_API_KEY, TELEGRAM_CHANNEL } = process.env
  sgMail.setApiKey(SENDGRID_API_KEY)

  const mailText =
    `Привет, ${ownerName}. ${dateString} новый клиент: cтрана - [${user.country}], ` +
    `город - [${user.city}], ip - [${user.ip}], платформа [${user.platform}], ` +
    `язык [${user.language}], Форма заявки [${user.request}], имя [${user.name}], ` +
    `почта [${user.mail}], телефон [${user.phone}], сообщение [${user.message}] ` +
    `оставил заявку обратного звонка со странички - [${user.siteUrl}]`

  const mailHtml =
    `<div style="font-family: monospace;"><h1 style="color: #323a43;">Привет, ${ownerName}.</h1>` +
    `<p>Внимание, ${dateString} <strong>новый клиент</strong>:</p>` +
    `<ul style="list-style: circle;"><li>Cтрана - [${user.country}],</li>` +
    `<li>Город - [${user.city}], (город может не совпадать если использовался мобильный интернет)</li>` +
    `<li>IP - [${user.ip}],</li>` +
    `<li>Платформа - [${user.platform}],</li>` +
    `<hr>` +
    `<li>Имя - [<strong>${user.name}</strong>],</li>` +
    `<li>Почта - [<strong>${user.mail}</strong>],</li>` +
    `<li>Телефон - [<strong>${user.phone}</strong>],</li>` +
    `<li>Выбранный язык на сайте - [<strong>${user.language}</strong>],</li>` +
    `<li>Форма заявки - [<strong>${user.request}</strong>],</li>` +
    `<li>Сообщение:<div style="background: lightgray;border: 1px solid black;padding: 0 20px;"><p>${user.messageArray.join(
      '</p><p>',
    )}</p></div></li></ul>` +
    `<p>оставил заявку обратного звонка со странички - [${user.siteUrl}]</p></div>`

  const textTelegram =
    `<strong>Привет, ${ownerName}.</strong>` +
    `%0A Внимание, появился новый клиент:` +
    `%0A · IP - [${user.ip}],` +
    `%0A · Платформа - [${user.platform}],` +
    `%0A · Cтрана - [${user.country}],` +
    `%0A · Город - [${user.city}],` +
    `%0A<code>(город может не совпадать если использовался мобильный интернет)</code>` +
    `%0A--------------------------------` +
    `%0A · Имя - [<b>${user.name}</b>],` +
    `%0A · Почта - [<b>${user.mail}</b>],` +
    `%0A · Телефон - [<b>%2B${user.phone.slice(1)}</b>],` +
    `%0A · Выбранный язык на сайте - [<b>${user.language}</b>],` +
    `%0A · Форма заявки - [<b>${user.request}</b>],` +
    `%0A · Сообщение: %0A<code>${user.messageArray.join('%0A')}</code>` +
    `%0A Клиент оставил заявку обратного звонка со странички - %0A${user.siteUrl}`

  const msg = {
    to: ownerEmail,
    from: 'Global.Barristers.Ukraine@gmail.com',
    subject: 'Новый запрос на обратный звонок с сайта ' + user.host,
    text: mailText,
    html: mailHtml,
  }
  const mailResult = await sgMail
    .send(msg)
    .then(() => {
      return 'Email sent'
    })
    .catch(error => {
      return error
    })
  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_API_KEY}/sendMessage?chat_id=${TELEGRAM_CHANNEL}&text=${textTelegram}&parse_mode=HTML`

  console.log('textTelegram', textTelegram)
  try {
    const telegramResult = await fetch(telegramUrl).then(data => data.json())
    if (telegramResult.ok) {
      console.log('Сообщение отправлено в телеграм канал')
    } else {
      console.log('Сообщение не отправлено в телеграм')
      console.log('Ответ сервера', telegramResult)
    }
  } catch (error) {
    console.log(error)
  }
  console.log('Backend - ' + mailResult)
  if (mailResult === 'Email sent') {
    res.status(200).end(JSON.stringify(mailResult))
  } else {
    res.status(405).end()
  }
}
