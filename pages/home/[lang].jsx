import { useRouter } from 'next/router'
import { PageLayout } from '../../components/layouts'
import { GoToTopBtn } from '../../components/common'
import { Info, Projects, Reasons, Seo, Slider } from '../../components/home'

function Home() {
  const router = useRouter()
  const lang = router.query.lang ? router.query.lang : 'uk'
  let title
  switch (lang) {
    case 'ru':
      title = 'Главная страница'
      break
    case 'en':
      title = 'Home page'
      break
    default:
      title = 'Головна сторінка'
      break
  }
  return (
    <>
      <PageLayout lang={lang} title={title}>
        <Slider></Slider>
        {/* <Reasons></Reasons> */}
        {/* <Info></Info> */}
        {/* <Projects></Projects> */}
        {/* <Seo></Seo> */}
        {/* <GoToTopBtn></GoToTopBtn> */}
      </PageLayout>
    </>
  )
}

export default Home
