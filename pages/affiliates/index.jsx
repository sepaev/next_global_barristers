import { PageLayout, AsideLayout } from '../../components/layouts'
import Affiliates from '../../components/asides/Affiliates'
import { ourAffiliatesHtml } from '../../constants/pageNames'

function affiliates({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={ourAffiliatesHtml[1][lang]} currentPage={ourAffiliatesHtml[0]}>
      <AsideLayout lang={lang} currentPage={ourAffiliatesHtml[0]} headerAlt='Вечірне місто'>
        <Affiliates lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default affiliates
