import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../images/svg/logo.svg'

export function Header({ lang = 'uk', title = '' }) {
  return (
    <>
      <Head>
        <title>{'«Global Barristers» ≡ ' + title}</title>
        <meta name='viewport' content='Generated by create next app' />
        <meta charset='UTF-8' />
        <meta name='keywords' content='Адвокат,Адвокат Київ,Консультації' />
        <meta name='description' content="Адвокатське об'єднання «Global Barristers» ≡ Адвокат Київ ≡ Консультації" />
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin /> */}
        {/* <link
      href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap'
      rel='stylesheet'
    /> */}
      </Head>
      <header>
        <section className='header__pre'></section>
        <section className='header'>
          <div className='top-menu'>
            <div className='top-menu__container container'>
              <div className='top-menu__numbers'>
                <Link className='top-menu__link' href='tel:+38 (099) 603 24 54'>
                  <a>+38 (099) 603 24 54</a>
                </Link>
                <Link className='top-menu__link' href='tel:+38 (098) 235 02 70'>
                  <a>+38 (098) 235 02 70</a>
                </Link>
              </div>

              <div className='lang'>
                <div className='lang__wrapper'>
                  <Link href='/en/' className='lang__link lang_en'>
                    <a>en</a>
                  </Link>
                  <Link href='/ru/' className='lang__link lang_ru'>
                    <a>ru</a>
                  </Link>
                  <Link href='/uk/' className='lang__link lang_uk'>
                    <a>uk</a>
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
                      width={306.531}
                      height={45}
                    />
                  </a>
                </Link>
              </div>
              <div className='menu'>
                <ul id={'menu-' + lang + '/'} className='menu__list'>
                  <li className='menu__item'>
                    <Link href={'/about-us/' + lang + '/'}>
                      <a>Про нас</a>
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link href={'/our-team/' + lang + '/'}>
                      <a>Наша команда</a>
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link href={'/practices/' + lang + '/'}>
                      <a>Галузі</a>
                    </Link>
                    <ul className='sub-menu'>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/criminal-law/' + lang + '/'}>
                          <a> Кримінальне Право </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/economic-law/' + lang + '/'}>
                          <a> Господарське Право </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/family-law/' + lang + '/'}>
                          <a> Сімейне Право </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/tax-_law/' + lang + '/'}>
                          <a> Податкове Право </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/civil-law/' + lang + '/'}>
                          <a> Цивільне Право </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/customs-law/' + lang + '/'}>
                          <a> Митне Право </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/immigration-legislation/' + lang + '/'}>
                          <a>Імміграційне Законодавство</a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/banking-disputes/' + lang + '/'}>
                          <a> Спори з банком </a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/practices/auto-law/' + lang + '/'}>
                          <a> Автомобільне Право </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu__item'>
                    <Link href={'/towns/' + lang + '/'}>
                      <a>Міста</a>
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link href={'/business-solutions/' + lang + '/'}>
                      <a>Бізнес рішення</a>
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link href={'/towns/' + lang + '/'}>
                      <a>Партнери</a>
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link href={'/contacts/kyiv/' + lang + '/'}>
                      <a>Контакти</a>
                    </Link>
                    <ul className='sub-menu'>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/contacts/kyiv/' + lang + '/'}>
                          <a>Офіс в Києві</a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/contacts/kharkiv/' + lang + '/'}>
                          <a>Офіс в Харкові</a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/contacts/odessa/' + lang + '/'}>
                          <a>Офіс в Одессі</a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/contacts/dnipro/' + lang + '/'}>
                          <a>Офіс в Дніпрі</a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/contacts/zaporizhzhia/' + lang + '/'}>
                          <a>Офіс в Запоріжжі</a>
                        </Link>
                      </li>
                      <li className='menu__item sub-menu__item'>
                        <Link href={'/contacts/kryviy-rih/' + lang + '/'}>
                          <a>Офіс в Кривому Розі</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='menu__button'>
                <Link className='menu__button-link consult-btn' href='#'>
                  Замовити консультацію
                </Link>
              </div>
            </div>
          </nav>
        </section>
      </header>
    </>
  )
}
