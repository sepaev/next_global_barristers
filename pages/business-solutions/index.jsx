import { PageLayout, AsideLayout } from '../../components/layouts'
import OurSolutions from '../../components/asides/OurSolutions'
import { ourSolutionsHtml } from '../../constants/pageNames'

function ourSolutions({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={ourSolutionsHtml[1][lang]} currentPage={ourSolutionsHtml[0]}>
      <AsideLayout lang={lang} currentPage={ourSolutionsHtml[0]} headerAlt='Абстракція'>
        <OurSolutions lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default ourSolutions
