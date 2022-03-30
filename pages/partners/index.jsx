import { PageLayout, AsideLayout } from '../../components/layouts'
import Partners from '../../components/asides/Partners'
import { ourPartnersHtml } from '../../constants/pageNames'

function partners({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={ourPartnersHtml[1][lang]} currentPage={ourPartnersHtml[0]} headerAlt='Ранок у місті'>
      <AsideLayout lang={lang} currentPage={ourPartnersHtml[0]}>
        <Partners lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default partners
