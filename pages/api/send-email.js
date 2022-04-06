import { ownerEmail } from '../../constants/contacts'
import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail'

export default async function sendMailApi(req, res) {
  const { dateString, userHost, siteUrl, ip, country_name, city, userPlatform, phone } = req.body
  dotenv.config()
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: ownerEmail,
    from: 'Global.Barristers.Ukraine@gmail.com',
    subject: 'Новый запрос на обратный звонок с сайта ' + userHost,
    text: `Привет, Алексей. ${dateString} неизвестный пользователь: cтрана - [${country_name}], город - [${city}], ip - [${ip}], палтформа [${userPlatform}], телефон [${phone}] оставил заявку обратного звонка со странички - [${siteUrl}]`,
    html:
      '<h1>Привет, Алексей.</h1>' +
      `<p>Внимание, ${dateString} неизвестный пользователь:</p>` +
      `<ul><li>Cтрана - [${country_name}],</li>` +
      `<li>Город - [${city}],</li>` +
      `<li>IP - [${ip}],</li>` +
      `<li>Палтформа [${userPlatform}],</li>` +
      `<li>Телефон [<strong>${phone}</strong>] ,</li></ul>` +
      `<p>оставил заявку обратного звонка со странички - [${siteUrl}]</p>`,
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
