import { Header } from '../common'

export function PageLayout({ children, lang = 'uk', title = '' }) {
  return (
    <>
      <Header lang={lang} title={title} />
      <main>{children}</main>
    </>
  )
}
