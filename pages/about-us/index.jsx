import { PageLayout, AsideLayout } from '../../components/layouts'
import AboutUs from '../../components/asides/AboutUs'
import { aboutUsHtml } from '../../constants/pageNames'

function aboutUs({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={aboutUsHtml[1][lang]} currentPage={aboutUsHtml[0]}>
      <AsideLayout lang={lang} currentPage={aboutUsHtml[0]} headerAlt='Київ'>
        <AboutUs lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default aboutUs
