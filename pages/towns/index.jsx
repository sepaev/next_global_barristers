import { PageLayout, AsideLayout } from '../../components/layouts'
import Towns from '../../components/asides/Towns'
import { ourTownsHtml, ourSolutionsHtml } from '../../constants/pageNames'

function towns({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={ourTownsHtml[1][lang]} currentPage={ourTownsHtml[0]} headerAlt='Годинник'>
      <AsideLayout lang={lang} currentPage={ourTownsHtml[0]}>
        <Towns lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default towns
