import { ownerEmail } from '../../constants/contacts'
import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail'

export default async function sendMailApi(req, res) {
  const { dateString, user } = req.body
  dotenv.config()
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: ownerEmail,
    from: 'Global.Barristers.Ukraine@gmail.com',
    subject: 'Новый запрос на обратный звонок с сайта ' + user.host,
    text: `Привет, Алексей. ${dateString} новый клиент: cтрана - [${user.country}], город - [${user.city}], ip - [${user.ip}], палтформа [${user.platform}], язык [${user.language}], Форма заявки [${user.request}], имя [${user.name}], почта [${user.mail}], телефон [${user.phone}], сообщение [${user.message}] оставил заявку обратного звонка со странички - [${user.siteUrl}]`,
    html:
      '<h1>Привет, Алексей.</h1>' +
      `<p>Внимание, ${dateString} <strong>новый клиент</strong>:</p>` +
      `<ul><li>Cтрана - [${user.country}],</li>` +
      `<li>Город - [${user.city}], (город может не совпадать если использовался мобильный интернет)</li>` +
      `<li>IP - [${user.ip}],</li>` +
      `<li>Палтформа - [${user.platform}],</li>` +
      `<hr>` +
      `<li>Имя - [<strong>${user.name}</strong>],</li>` +
      `<li>Почта - [<strong>${user.mail}</strong>],</li>` +
      `<li>Телефон - [<strong>${user.phone}</strong>],</li>` +
      `<li>Выбранный язык на сайте - [<strong>${user.language}</strong>],</li>` +
      `<li>Форма заявки - [<strong>${user.request}</strong>],</li>` +
      `<li>Сообщение - [<strong>${user.message}</strong>] ,</li></ul>` +
      `<p>оставил заявку обратного звонка со странички - [${user.siteUrl}]</p>`,
  }

  const result = await sgMail
    .send(msg)
    .then(() => {
      return 'Email sent'
    })
    .catch(error => {
      return error
    })

  console.log('Backend - ' + result)
  if (result === 'Email sent') {
    res.status(200).end(JSON.stringify(result))
  } else {
    res.status(405).end()
  }
}
