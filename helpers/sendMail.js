import getCurrentDate from './getCurrentDate'
import Notiflix from 'notiflix'

export default async function sendMail(phone, { sendSuccessText, sendFailureText }) {
  const userPlatform = window.navigator.platform
  const userHost = document.location.host
  const siteUrl = document.URL
  const dateString = getCurrentDate()
  let data
  Notiflix.Loading.circle()
  try {
    data = await fetch('https://ipapi.co/json/').then(data => data.json())
  } catch (error) {
    data = { ip: 'hidden', country_name: 'hidden', city: 'hidden' }
  }

  const { ip, country_name, city } = data
  fetch('/api/send-email', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ dateString, userHost, siteUrl, ip, country_name, city, userPlatform, phone }),
  })
    .then(res => {
      Notiflix.Loading.remove()
      if (res.status === 200) {
        Notiflix.Notify.success(phone + ' - ' + sendSuccessText)
      } else {
        Notiflix.Notify.success(phone + ' - ' + sendFailureText)
      }
    })
    .catch(e => {
      Notiflix.Loading.remove()
      console.log(e.message)
    })
}
