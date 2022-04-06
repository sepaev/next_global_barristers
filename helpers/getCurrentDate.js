export default function getCurrentDate() {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const days = ['в воскресенье', 'в понедельник', 'во вторник', 'в среду', 'в четверг', 'в пятницу', 'в субботу']
  const d = new Date()
  const day = days[d.getDay()]
  const month = months[d.getMonth()]

  const hr = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
  const min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()

  const date = d.getDate()
  const year = d.getFullYear()

  return day + ' ' + date + 'го ' + month + ' ' + year + 'г. ровно в ' + hr + ':' + min
}
