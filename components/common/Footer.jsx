import Image from 'next/image'
import Link from 'next/link'

import superV from '../../images/supervisor.jpg'
import liqpay from '../../images/liqpay.webp'
import { getTranslations } from '../../translations/common/footer'
import { phones, social } from '../../constants/contacts'
import { useMemo } from 'react'

export function Footer({ lang = 'uk' }) {
  const { titles, partOne, partTwo, supervisor, other } = useMemo(() => getTranslations(lang), [lang])
  function writeSuperV(e) {
    e.preventDefault
    alert('вы написали Директору')
  }
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__wrapper'>
          <section className='footer__services left'>
            <h4 className='footer__title'>{titles.services}</h4>
            <div className='footer-menu part-one'>
              <ul className='footer-menu__list'>
                {partOne.map(({ html, text, subMenu }, partOneIndex) => {
                  return (
                    <>
                      <li key={'footer-menu_' + partOneIndex} className='footer-menu__item'>
                        <Link href={'/articles/' + lang + '/' + html + '/'}>
                          <a className='footer-menu__link'>{text}</a>
                        </Link>
                      </li>
                      {subMenu.length > 0 && (
                        <ul className='footer-menu-sub__list'>
                          {subMenu.map(({ html, text }, subMenuIndex) => {
                            return (
                              <li key={'footer-sub-menu_' + subMenuIndex} className='footer-menu-sub__item'>
                                <Link href={'/articles/' + lang + '/' + html + '/'}>
                                  <a className='footer-menu-sub__link'>{text}</a>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </>
                  )
                })}
              </ul>
            </div>
          </section>
          <section className='footer__services right'>
            <div className='footer-menu part-two'>
              <ul className='footer-menu__list part-two'>
                {partTwo.map(({ html, text, subMenu }, partTwoIndex) => {
                  return (
                    <>
                      <li key={'footer-menu_' + partTwoIndex} className='footer-menu__item'>
                        <Link href={'/articles/' + lang + '/' + html + '/'}>
                          <a className='footer-menu__link'>{text}</a>
                        </Link>
                      </li>
                      {subMenu.length > 0 && (
                        <ul className='footer-menu-sub__list'>
                          {subMenu.map(({ html, text }, subMenuIndex) => {
                            return (
                              <li key={'footer-sub-menu_' + subMenuIndex} className='footer-menu-sub__item'>
                                <Link href={'/articles/' + lang + '/' + html + '/'}>
                                  <a className='footer-menu-sub__link'>{text}</a>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </>
                  )
                })}
              </ul>
            </div>
            <h4 className='footer__title'>{titles.other}</h4>
            <div className='footer-menu other'>
              <ul id='menu-drugoe-ukr' className='footer-menu__list'>
                {other.map(({ html, text }, index) => {
                  return (
                    <li key={'other_' + index} className='footer-menu__item'>
                      <Link href={'/' + html + '/' + lang}>
                        <a className='footer-menu__link' target='_blank' rel='noopener noreferrer'>
                          {text}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
          <section className='footer__contacts'>
            <h4 className='footer__title'>{titles.contacts}</h4>
            <ul className='footer-phone__list'>
              {phones.map((phone, index) => {
                return (
                  <li key={'footer-phones_' + index} className='footer-phone__item'>
                    <a className='footer-menu__link phone' href={phone}>
                      {phone}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className='footer-liq'>
              <Image src={liqpay.src} alt='liqpay' width={120} height={53.5} className='footer-liq__image' />
            </div>

            <ul className='footer-social__list'>
              {social.map(({ name, href }, index) => {
                return (
                  <li key={'footer-social_' + index} className='footer-social__item'>
                    <a href={href} target='_blank' className={'footer-social__link icon-' + name} rel='noreferrer'>
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
          <section className='footer__supervisor supervisor'>
            <div className='supervisor__container'>
              <div className='supervisor__image lazy'>
                <Image alt='supervisor' src={superV.src} width={90} height={90} />
              </div>
              <h4 className='supervisor__title'>{supervisor.title}</h4>
              <p className='supervisor__text'>{supervisor.text}</p>
              <a href='#' target='_blank' onClick={writeSuperV} className='btn-default supervisor__button'>
                {supervisor.button}
              </a>
            </div>
          </section>
        </div>

        {/* <div className='copy-rights'>
          <div className='part'>
            <p>© 2022 Mitrax. All Rights Reserved.</p>
          </div>
          <div className='part'>
            <p>Київ. Одеса. Запоріжжя. Україна.</p>
          </div>
          <div className='part'>
            <p>
              <a href='https://dl.agency/' target='_blank' rel='noreferrer'>
                Created by DL agency
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
