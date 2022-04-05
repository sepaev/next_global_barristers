import Image from 'next/image'
import arrow from '../../images/svg/arrow.svg'
import list from '../../images/svg/list.svg'
import Link from 'next/link'
import { useMemo } from 'react'
import { getTranslations } from '../../translations/home/articles'
import { ourSolutionsHtml } from '../../constants/pageNames'

export function Articles({ lang }) {
  const { articlesHeading, articlesCommonText, articlesButton, articles } = useMemo(() => getTranslations(lang), [lang])
  return (
    <section className='articles'>
      <div className='articles__container container'>
        <div className='articles__info'>
          <div className='articles__picture-box jsActivateAnimation outer' data-animation='fadeInUpBig'>
            <Image
              src='/home/projects.jpg'
              alt='Будівля'
              loading='lazy'
              objectPosition='center'
              objectFit='cover'
              layout='fill'
            />
          </div>
          <div className='articles__wrapper'>
            <div className='articles__head'>
              <div className='articles__picture-box jsActivateAnimation inline' data-animation='fadeInUpBig'>
                <Image
                  src='/home/projects.jpg'
                  alt='Будівля'
                  loading='lazy'
                  objectPosition='center'
                  objectFit='cover'
                  layout='fill'
                />
              </div>
              <h2 className='articles__title jsActivateAnimation' data-animation='fadeInUp'>
                {articlesHeading}
                <p className='articles__text'>{articlesCommonText}</p>
              </h2>
            </div>
            <ul className='articles__list'>
              {articles.map(({ articleLink, mainBlock }, index) => {
                return (
                  <li key={'article_' + index} className='articles__item'>
                    <Link href={'/articles/' + lang + '/' + articleLink}>
                      <a className='articles__item-link'>
                        <span className='articles__item-pre'>
                          <Image src={list.src} width='14px' height='15px' alt='list' className='articles__img-list' />
                        </span>
                        <h4 className='articles__item-title'>{mainBlock.title}</h4>
                        <span className='articles__item-post'>
                          <Image
                            src={arrow.src}
                            width='30px'
                            height='30px'
                            alt='arrow'
                            className='articles__img-arrow'
                          />
                        </span>
                      </a>
                    </Link>
                  </li>
                )
              })}
              <a href={'/' + ourSolutionsHtml[0] + '/' + lang} className='btn-default'>
                {articlesButton}
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
