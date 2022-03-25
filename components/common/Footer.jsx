import Image from 'next/image'
import Link from 'next/link'

import director from '../../images/director.jpg'
import liqpay from '../../images/liqpay.webp'
import { getTranslations } from '../../translations/common/footer'

export function Footer({ lang = 'uk' }) {
  console.log('Footer', lang)

  const { titles, practices, disputes, business, familyLaw, supervisor, other } = getTranslations(lang)
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__wrapper'>
          <div className='part'>
            <div className='title-block'>{titles[0]}</div>
            <div className='menu-menyu-v-podvale-pervyj-stolbik-ukr-container'>
              <ul id='menu-menyu-v-podvale-pervyj-stolbik-ukr' className='menu'>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6300'>
                  <Link href={'/practices/' + lang + '/virishennya-sporiv/'}>
                    <a>{practices[0]}</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6301'>
                      <Link href={'/practices/' + lang + '/advokat-zi-trudovyh-sporiv/'}>
                        <a>{disputes[0]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6302'>
                      <Link href={'/practices/' + lang + '/finansovi-i-bankovski-spory/'}>
                        <a>{disputes[1]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6303'>
                      <Link href={'/practices/' + lang + '/sudovi-spory/'}>
                        <a>{disputes[2]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6304'>
                      <Link href={'/practices/' + lang + '/advokat-s-nedvizhimosti/'}>
                        <a>{disputes[3]}</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6305'>
                  <Link href={'/practices/' + lang + '/zahist-biznesu/'}>
                    <a>{practices[1]}</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6306'>
                      <a href={'/practices/' + lang + '/zahist-biznesu-vid-rejderstva/ejderstva/'}>{business[0]}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='part custom'>
            <div className='menu-menyu-v-podvale-vtoroj-stolbik-ukr-container'>
              <ul id='menu-menyu-v-podvale-vtoroj-stolbik-ukr' className='menu'>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6307'>
                  <Link href={'/practices/' + lang + '/simeyni-ta-maynovi-spori/'}>
                    <a>{practices[2]}</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6308'>
                      <Link href={'/practices/' + lang + '/rozluchennja/'}>
                        <a>{familyLaw[0]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6309'>
                      <Link href={'/practices/' + lang + '/majno/'}>
                        <a>{familyLaw[1]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6310'>
                      <Link href={'/practices/' + lang + '/podil-biznesu/'}>
                        <a>{familyLaw[2]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6311'>
                      <Link href={'/practices/' + lang + '/advokat-z-alimentiv/'}>
                        <a>{familyLaw[3]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6312'>
                      <Link href={'/practices/' + lang + '/usynovlennya/'}>
                        <a>{familyLaw[4]}</a>
                      </Link>
                    </li>
                    <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6313'>
                      <Link href={'/practices/' + lang + '/pozbavlennja-batkivskih-prav/'}>
                        <a>{familyLaw[5]}</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6314'>
                  <a href={'/practices/' + lang + '/problemni-borgi/'}>{practices[3]}</a>
                </li>
              </ul>
            </div>
            <div className='title-block custom-title'>{titles[1]}</div>
            <div className='menu-drugoe-ukr-container'>
              <ul id='menu-drugoe-ukr' className='menu other'>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6315'>
                  <Link href='https://docs.google.com/document/d/11ShtqmzccqXU1X3DOjEFdn3e67-SrQtnqrdpAKCVeMY/edit?usp=sharing'>
                    <a target='_blank' rel='noopener noreferrer'>
                      {other[0]}
                    </a>
                  </Link>
                </li>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6316'>
                  <Link href='https://docs.google.com/document/d/1ZD1is_KoVzo6J3tw9cOMcdd11-NEzb94NTp6vflCb68/edit?usp=sharing'>
                    <a target='_blank' rel='noopener noreferrer'>
                      {other[1]}
                    </a>
                  </Link>
                </li>
                <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-6317'>
                  <Link href='https://docs.google.com/document/d/1MtydG7nDOpIN_uVf0UibY1mJts1eS2uE4vUFNomX07o/edit?usp=sharing'>
                    <a target='_blank' rel='noopener noreferrer'>
                      {other[2]}
                    </a>
                  </Link>
                </li>
                <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9558'>
                  <Link href={'/about-us/' + lang}>
                    <a>{other[3]}</a>
                  </Link>
                </li>
                <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-9559'>
                  <Link href={'/mission-and-values/' + lang}>
                    <a>{other[4]}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='part'>
            <div className='title-block'>{titles[2]}</div>
            <ul className='contact-wrap'>
              <li className='place'>
                <a href='tel:380504621551'>+38 (099) 603 24 54 </a>
              </li>
              <li className='place'>
                <a href='tel:380504621551'>+38 (098) 235 02 70 </a>
              </li>
            </ul>
            <div className='liq'>
              <Image src={liqpay.src} alt='liqpay' width={120} height={53.5} />
            </div>

            <div className='social__links'>
              <a href='https://www.facebook.com/' target='_blank' className='icon-Facebook' rel='noreferrer'>
                facebook
              </a>
              <a href='https://www.instagram.com/' target='_blank' className='icon-Instagram' rel='noreferrer'>
                instagram
              </a>
              <a href='https://www.linkedin.com/' target='_blank' className='icon-LinkedIn' rel='noreferrer'>
                linkedin
              </a>
              <a href='https://www.youtube.com/' target='_blank' className='icon-Youtube' rel='noreferrer'>
                youtube
              </a>
            </div>
          </div>
          <div className='part custom-part'>
            <div className='writeSupervisor left'>
              <Image className='supervisorImg lazy' alt='supervisor' src={director.src} width={90} height={90} />
              <div className='supervisorTitle'>
                <p style={{ opacity: 1 }}>{supervisor[0]}</p>
              </div>
              <div className='text'>{supervisor[1]}</div>
              <a href='#' target='_blank' className='btn-default js-get-contact'>
                {supervisor[2]}
              </a>
            </div>
          </div>
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
