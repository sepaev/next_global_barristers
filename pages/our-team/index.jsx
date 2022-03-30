import { PageLayout } from '../../components/layouts'

function OurTeam({ lang = 'uk' }) {
  let title
  switch (lang) {
    case 'ru':
      title = 'Наша команда'
      //   details = 'Подробнее'
      break
    case 'en':
      title = 'Our team'
      //   details = 'More details'
      break
    default:
      title = 'Наша команда'
      //   details = 'Детальніше'
      break
  }
  return (
    <PageLayout lang={lang} title={title}>
      <div>{title}</div>
    </PageLayout>
  )
}

export default OurTeam
