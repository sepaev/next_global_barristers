import { Header } from '../common'

export function PageLayout({ children, lang = 'uk', title = '' }) {
  console.log('PageLayout', lang)
  return (
    <>
      <Header lang={lang} title={title} />
      <main>{children}</main>
    </>
  )
}
