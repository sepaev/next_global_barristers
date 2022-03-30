import { Header, Footer } from '../common'

export function PageLayout({ children, lang = 'uk', title = '', currentPage = '' }) {
  return (
    <>
      <Header key={'headerKey'} lang={lang} title={title} currentPage={currentPage} />
      <main>{children}</main>
      <Footer key={'footerKey'} lang={lang} />
    </>
  )
}
