import { PageLayout, AsideLayout } from '../../components/layouts'
import Practices from '../../components/asides/Practices'
import { ourPracticesHtml } from '../../constants/pageNames'

function practices({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={ourPracticesHtml[1][lang]} currentPage={ourPracticesHtml[0]}>
      <AsideLayout lang={lang} currentPage={ourPracticesHtml[0]}>
        <Practices lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default practices
