import { Header, Footer } from '../common'

export function PageLayout({ children, lang = 'uk', title = '' }) {
  return (
    <>
      <Header key={'headerKey'} lang={lang} title={title} />
      <main>{children}</main>
      <Footer key={'footerKey'} lang={lang} />
    </>
  )
}
