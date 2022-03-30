import { PageLayout, AsideLayout } from '../../components/layouts'
import OurTeam from '../../components/asides/OurTeam'
import { ourTeamHtml } from '../../constants/pageNames'

function ourTeam({ lang = 'uk' }) {
  return (
    <PageLayout lang={lang} title={ourTeamHtml[1][lang]} currentPage={ourTeamHtml[0]} headerAlt='Архітектура'>
      <AsideLayout lang={lang} currentPage={ourTeamHtml[0]}>
        <OurTeam lang={lang} />
      </AsideLayout>
    </PageLayout>
  )
}

export default ourTeam
