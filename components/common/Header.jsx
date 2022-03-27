import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { phones } from '../../constants/contacts'
import { navigation } from '../../constants/navigation'

import logo from '../../images/svg/logo.svg'
import { getTranslations } from '../../translations/common/header'

export function Header({ lang = 'uk', title = '' }) {
  const {
    enActive = '',
    ruActive = '',
    ukActive = '',
    keywords,
    description,
    consultButton,
    navTranslations,
    subMenuTranslations,
  } = useMemo(() => getTranslations(lang), [lang])
  return (
    <>
      <Head>
        <title>{'«Global Barristers» ≡ ' + title}</title>
        <meta name='viewport' content='Generated by create next app' />

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
                  <Link href='/en/'>
                    <a className={'lang__link lang_en' + enActive}> en </a>
                  </Link>
                  <Link href='/ru/'>
                    <a className={'lang__link lang_en' + ruActive}> ru </a>
                  </Link>
                  <Link href='/uk/'>
                    <a className={'lang__link lang_en' + ukActive}> uk </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className='navigation'>
            <div className='navigation__container container'>
              <div className='navigation__logo'>
                <Link href={'/' + lang + '/'}>
                  <a>
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
              <div className='menu__button'>
                <Link href='#'>
                  <a className='menu__button-link consult-btn'>{consultButton}</a>
                </Link>
              </div>
              <div className='menu'>
                <ul id={'menu-' + lang + '/'} className='menu__list'>
                  {navigation.map(({ navName, pages, key }, pageIndex) => {
                    return (
                      <li key={'nav_' + key} className='menu__item'>
                        <Link href={'/' + navName + '/' + lang + '/'}>
                          <a>{navTranslations[navName]}</a>
                        </Link>
                        {/* sub-menu */}
                        {pages.length > 0 && (
                          <ul className='sub-menu'>
                            {pages.map((pageName, index) => {
                              return (
                                <li key={'subMenu_' + key + '_' + index} className='menu__item sub-menu__item'>
                                  <Link href={'/' + navName + '/' + pageName + '/' + lang + '/'}>
                                    <a>{subMenuTranslations[pageName]}</a>
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
