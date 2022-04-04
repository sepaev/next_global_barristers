import Image from 'next/image'
import Link from 'next/link'
import { headerNav } from '../../constants/headerNav'
import { homeHtml } from '../../constants/pageNames'
import uniqid from 'uniqid'
import { useRef } from 'react'

export function AsideLayout({ children, lang = 'uk', currentPage, headerAlt = 'Buildings' }) {
  const menuItem = headerNav.find(item => item.navPage[0] === currentPage)
  const asideRef = useRef(null)

  const openAside = () => asideRef.current.classList.toggle('opened')
  return (
    <>
      <section className={currentPage + '__header aside__top-image'}>
        <Image
          src={'/asides/' + currentPage + '/header.jpg'}
          alt={headerAlt}
          layout='fill'
          objectFit='cover'
          loading='lazy'
          objectPosition='center'
        />
      </section>
      <div className='container aside__container'>
        <aside className='aside' onClick={openAside} ref={asideRef}>
          <ul className='aside__list'>
            <li className='aside__item aside__item-main'>
              <Link href={'/' + menuItem.navPage[0] + '/' + lang}>
                <a className='aside__link'>{menuItem.navPage[1][lang]}</a>
              </Link>
            </li>
            {menuItem.pages.length > 0 &&
              menuItem.pages.map(pageHtml => {
                return (
                  <li key={uniqid()} className='aside__item'>
                    <Link href={'/' + menuItem.navPage[0] + '/' + pageHtml[0] + '/' + lang}>
                      <a className='aside__link'>{pageHtml[1][lang]}</a>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </aside>
        <section className='aside-page'>
          <h1 className='aside-page__title'>{menuItem.navPage[1][lang]}</h1>
          <div className='aside-page__breadcrumbs'>
            <p className='aside-page__breadcrumbs-p'>
              <Link href={'/' + lang}>
                <a className='aside-page__breadcrumbs-link'>{homeHtml[1][lang]}</a>
              </Link>
              <span className='aside-page__breadcrumbs-span'>{' >> '}</span>
              <span className='aside-page__breadcrumbs-last'>{menuItem.navPage[1][lang]}</span>
            </p>
          </div>
          {children}
        </section>
      </div>
    </>
  )
}
