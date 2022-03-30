import Image from 'next/image'
import Link from 'next/link'
import { headerNav } from '../../constants/headerNav'
import uniqid from 'uniqid'

export function AsideLayout({ children, lang = 'uk', currentPage = '404' }) {
  const menuItem = headerNav.find(item => item.navPage[0] === currentPage)
  return (
    <>
      <section className={currentPage + '__header section__page-with-aside'}>
        <Image
          src={'/asides/' + currentPage + '/header.jpg'}
          alt='Buildings'
          layout='fill'
          objectFit='cover'
          loading='lazy'
          objectPosition='center'
        />
      </section>
      <div className='container aside__container'>
        <aside className='aside'>
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
        {children}
      </div>
    </>
  )
}
