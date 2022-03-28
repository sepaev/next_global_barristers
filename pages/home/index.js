import { useRouter } from 'next/router'
import { PageLayout } from '../../components/layouts'
import { GoToTopBtn } from '../../components/common'
import { Info, Articles, Reasons, Seo, Slider } from '../../components/home'

function Home({ lang = 'uk' }) {
  const router = useRouter()
  let title, details
  switch (lang) {
    case 'ru':
      title = 'Главная страница'
      details = 'Подробнее'
      break
    case 'en':
      title = 'Home page'
      details = 'More details'
      break
    default:
      title = 'Головна сторінка'
      details = 'Детальніше'
      break
  }
  return (
    <>
      <PageLayout lang={lang} title={title}>
        <Slider key={'slider'} lang={lang}></Slider>
        <Reasons key={'reasons'} lang={lang} details={details}></Reasons>
        <Info key={'info'} lang={lang}></Info>
        <Articles key={'articles'} lang={lang}></Articles>
        <Seo key={'seo'} lang={lang}></Seo>
        <GoToTopBtn key={'goToTopBtn'} />
      </PageLayout>
    </>
  )
}

export default Home
