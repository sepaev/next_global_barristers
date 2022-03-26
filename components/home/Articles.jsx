import Image from 'next/image'
import arrow from '../../images/svg/arrow.svg'
import list from '../../images/svg/list.svg'
import articlesOrignImg from '../../images/articlesOrignImg.jpg'
import articles263Img from '../../images/articles263Img.jpg'
import articles768Img from '../../images/articles768Img.jpg'
import Link from 'next/link'
import { useMemo } from 'react'
import { getTranslate } from '../../translations/home/articles'

export function Articles({ lang }) {
  const { articlesHeading, articlesCommonText, articlesButton, articles } = useMemo(() => getTranslate(lang), [lang])

  return (
    <section className='articles'>
      <div className='container'>
        <div className='articles__info'>
          <div className='articles__picture-box jsActivateAnimation' data-animation='fadeInUpBig'>
            <Image
              width={801}
              height={913}
              src={articlesOrignImg}
              className='articles__picture-img attachment-full size-full'
              alt=''
              loading='lazy'
              srcSet={articlesOrignImg + ' 801w,' + articles768Img + ' 768w,' + articles263Img + ' 263w'}
              sizes='(max-width: 801px) 100vw, 801px'
            />
          </div>

          <ul className='articles__list'>
            <h2 className='articles__title jsActivateAnimation' data-animation='fadeInUp'>
              {articlesHeading}
            </h2>
            <p className='articles__text'>{articlesCommonText}</p>

            {articles.map((article, index) => {
              return (
                <li key={'article_' + index} className='articles__item'>
                  <Link href={'/articles/' + lang + '/' + article.articleLink}>
                    <a className='articles__item-link'>
                      <span className='articles__item-pre'>
                        <Image src={list.src} width='14px' height='15px' alt='list' className='articles__img-list' />
                      </span>
                      <h4 className='articles__item-title'>{article.mainBlock.title}</h4>
                      <span className='articles__item-post'>
                        <Image src={arrow.src} width='30px' height='30px' alt='arrow' className='articles__img-arrow' />
                      </span>
                    </a>
                  </Link>
                </li>
              )
            })}
            <a href={'/business-solutions/' + lang} className='btn-default'>
              {articlesButton}
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}
