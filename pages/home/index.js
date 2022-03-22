import { useRouter } from 'next/router'
import { PageLayout } from '../../components/layouts'
import { GoToTopBtn } from '../../components/common'
import { Info, Projects, Reasons, Seo, Slider } from '../../components/home'

function Home({ lang = 'uk' }) {
  const router = useRouter()
  // const lang = router.query.lang ? router.query.lang : 'uk'
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
        <Slider lang={lang}></Slider>
        <Reasons lang={lang} details={details}></Reasons>
        <Info lang={lang}></Info>
        <Projects lang={lang}></Projects>
        <Seo lang={lang}></Seo>
        <GoToTopBtn></GoToTopBtn>
      </PageLayout>
    </>
  )
}

export default Home
