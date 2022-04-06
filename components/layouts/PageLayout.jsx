import { useEffect } from 'react'
import { Header, Footer } from '../common'

export function PageLayout({ children, lang = 'uk', title = '', currentPage = '' }) {
  useEffect(() => {
    document.body.classList = ''
  }, [])
  return (
    <>
      <Header key='headerKey' lang={lang} title={title} currentPage={currentPage} />
      <main>{children}</main>
      <Footer key='footerKey' lang={lang} />
    </>
  )
}
