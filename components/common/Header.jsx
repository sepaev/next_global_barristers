import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef } from 'react'
import { phones } from '../../constants/contacts'
import { navigation } from '../../constants/navigation'

import logo from '../../images/svg/logo.svg'
import { getTranslations } from '../../translations/common/header'

export function Header({ lang = 'uk', title = '', currentPage = '' }) {
  const menuRef = useRef(null)
  const {
    enActive = '',
    ruActive = '',
    ukActive = '',
    keywords,
    navTitle,
    description,
    consultButton,
    navTranslations,
    subMenuTranslations,
  } = useMemo(() => getTranslations(lang), [lang])

  const openModal = ({ target }) => {
    menuRef.current.classList.toggle('opened')
    if (target.nodeName === 'SPAN') {
      target.parentNode.classList.toggle('opened')
      return
    }
    target.classList.toggle('opened')
  }
  console.dir(navigation)
  return (
    <>
      <Head>
        <title>{'«Global Barristers» ≡ ' + title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        ></meta>

        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <header>
        <section className='header__pre'></section>
        <section className='header'>
          <div className='top-menu'>
            <div className='top-menu__container container'>
              <div className='top-menu__numbers'>
                {phones.map((phone, index) => {
                  return (
                    <a key={'header-phones_' + index} href={phone} className='top-menu__link'>
                      {phone}
                    </a>
                  )
                })}
              </div>

              <div className='lang'>
                <div className='lang__wrapper'>
                  <Link href={'/' + currentPage + '/en'}>
                    <a className={'lang__link lang_en' + enActive}> en </a>
                  </Link>
                  <Link href={'/' + currentPage + '/ru'}>
                    <a className={'lang__link lang_en' + ruActive}> ru </a>
                  </Link>
                  <Link href={'/' + currentPage + '/uk'}>
                    <a className={'lang__link lang_en' + ukActive}> uk </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className='navigation'>
            <div className='navigation__container container'>
              <div className='navigation__top-wrapper'>
                <div className='navigation__logo'>
                  <Link href={'/' + lang}>
                    <a className='navigation__logo-link'>
                      <Image
                        className='navigation__logo-img'
                        src={logo.src}
                        alt='Global Barristers'
                        width='306.5px'
                        height='45px'
                      />
                    </a>
                  </Link>
                </div>
                <h1 className='navigation__title'>{navTitle}</h1>
                <div className='navigation__button'>
                  <Link href='#'>
                    <a className='navigation__button-link consult-btn'>{consultButton}</a>
                  </Link>
                </div>
                <div className='navigation__menu-button' onClick={openModal} id='nav-icon3'>
                  <span className='navigation__menu-line'></span>
                  <span className='navigation__menu-line'></span>
                  <span className='navigation__menu-line'></span>
                </div>
              </div>
              <div className='menu'>
                <ul id={'menu-' + lang} ref={menuRef} className='menu__list'>
                  {navigation.map(({ navPage, pages, key }) => {
                    return (
                      <li key={'nav_' + key} className='menu__item'>
                        <Link href={'/' + navPage[0] + '/' + lang}>
                          <a className='menu__item-link'>{navPage[1][lang]}</a>
                        </Link>
                        {/* sub-menu */}
                        {pages.length > 0 && (
                          <ul className='sub-menu'>
                            {pages.map((page, index) => {
                              return (
                                <li key={'subMenu_' + key + '_' + index} className='menu__item sub-menu__item'>
                                  <Link href={'/' + navPage[0] + '/' + page[0] + '/' + lang}>
                                    <a className='sub-menu__item-link'>{page[1][lang]}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </header>
    </>
  )
}
