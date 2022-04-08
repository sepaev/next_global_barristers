import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from '../../translations/home/info'
import { useMemo } from 'react'
import { ourTeamHtml } from '../../constants/pageNames'

export function Info({ lang }) {
  const { infoHeading, paragraphs, buttonText } = useMemo(() => getTranslations(lang), [lang])
  return (
    <section className='info'>
      <div className='info__container container'>
        <div className='info__photo-block'>
          <div className='info__text-block'>
            <div className='info__heading-container'>
              <h2 className='info__heading jsActivateAnimation' data-animation='fadeInUp'>
                {infoHeading}
              </h2>
              <div className='info__image-container jsActivateAnimation inline' data-animation='fadeInUpBig'>
                <Image
                  src='/home/info.jpg'
                  className='info__image-img'
                  alt='Tunnel'
                  loading='lazy'
                  objectPosition='center'
                  objectFit='cover'
                  layout='fill'
                />
              </div>
            </div>
            {paragraphs.map((paragraph, index) => {
              return (
                <p key={'info_' + index} className='info__text-p'>
                  {paragraph}
                </p>
              )
            })}
            <Link href={'/' + ourTeamHtml[0] + '/' + lang}>
              <a className='btn-default'>{buttonText}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='info__image-container jsActivateAnimation outer' data-animation='fadeInUpBig'>
        <div className='absolute__image-wrapper'>
          <Image
            src='/home/info.jpg'
            className='info__image-img'
            alt='Tunnel'
            priority={true}
            // loading='lazy'
            objectPosition='center'
            objectFit='cover'
            layout='fill'
          />
        </div>
      </div>
    </section>
  )
}
