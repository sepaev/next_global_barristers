import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef } from 'react'
import { phones } from '../../constants/contacts'
import { headerNav } from '../../constants/headerNav'

import logo from '../../images/svg/logo.svg'
import { getTranslations } from '../../translations/common/header'

export function Header({ lang = 'uk', title = '', currentPage = '', toggleModalForm, requestConsultationText }) {
  const ruUrl = currentPage === '' ? '/ru' : '/' + currentPage + '/ru'
  const enUrl = currentPage === '' ? '/en' : '/' + currentPage + '/en'
  const ukUrl = currentPage === '' ? '/uk' : '/' + currentPage + '/uk'
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const overlayRef = useRef(null)
  const {
    enActive = '',
    ruActive = '',
    ukActive = '',
    keywords,
    navTitle,
    description,
  } = useMemo(() => getTranslations(lang), [lang])
  const openModalMenu = () => {
    menuRef.current.classList.toggle('opened')
    menuButtonRef.current.classList.toggle('opened')
    overlayRef.current.classList.toggle('opened')
    document.body.classList.toggle('overflovHidden')
  }

  return (
    <>
      <Head>
        <title>{'«Global Barristers» ≡ ' + title}</title>
        <meta
          Class='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        ></meta>

        <meta Class='keywords' content={keywords} />
        <meta Class='description' content={description} />
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
                  <Link href={enUrl}>
                    <a className={'lang__link lang_en' + enActive}> en </a>
                  </Link>
                  <Link href={ruUrl}>
                    <a className={'lang__link lang_en' + ruActive}> ru </a>
                  </Link>
                  <Link href={ukUrl}>
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
                  <button
                    onClick={e => {
                      toggleModalForm(e, 'consult-btn')
                    }}
                    className='navigation__button-link consult-btn'
                  >
                    {requestConsultationText}
                  </button>
                </div>
                <div className='navigation__menu-button' onClick={openModalMenu} ref={menuButtonRef}>
                  <span className='navigation__menu-line'></span>
                  <span className='navigation__menu-line'></span>
                  <span className='navigation__menu-line'></span>
                </div>
              </div>
              <div className='menu'>
                <div className='menu__overlay' ref={overlayRef} onClick={openModalMenu}></div>
                <ul id={'menu-' + lang} ref={menuRef} className='menu__list'>
                  {headerNav.map(({ navPage, pages, key }) => {
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
