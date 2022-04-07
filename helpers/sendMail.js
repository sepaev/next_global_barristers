import getCurrentDate from './getCurrentDate'
import Notiflix from 'notiflix'
import { getCommonTranslations } from '../translations/common/common'

export default async function sendMail(user) {
  const { sendSuccessText, sendFailureText } = getCommonTranslations(user.language)
  user.platform = window.navigator.platform
  user.host = document.location.host
  user.siteUrl = document.URL
  if (!user.name) user.name = 'Не указано'
  if (!user.mail) user.mail = 'Не указано'
  if (!user.message) user.message = 'Текст отсутствует'
  const dateString = getCurrentDate()
  let data
  Notiflix.Loading.circle()
  try {
    data = await fetch('https://ipapi.co/json/').then(data => data.json())
  } catch (error) {
    data = { ip: 'hidden', country_name: 'hidden', city: 'hidden' }
  }

  user.ip = data.ip
  user.country = data.country_name
  user.city = data.city

  const result = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ dateString, user }),
  })
    .then(res => {
      Notiflix.Loading.remove()
      if (res.status === 200) {
        Notiflix.Notify.success(user.phone + ' - ' + sendSuccessText)
        return true
      } else {
        Notiflix.Notify.failure(user.phone + ' - ' + sendFailureText)
        return false
      }
    })
    .catch(e => {
      Notiflix.Loading.remove()
      console.log(e.message)
      return false
    })

  return result
}
