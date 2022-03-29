import Image from 'next/image'
import { getTranslate } from '../../translations/home/info'
import { useMemo } from 'react'
import { ourTeamHtml } from '../../constants/pageNames'

export function Info({ lang }) {
  const { infoHeading, paragraphs, buttonText } = useMemo(() => getTranslate(lang), [lang])
  return (
    <section className='info'>
      <div className='info__container container'>
        <div className='info__photo-block'>
          <div className='info__text-block'>
            <h2 className='info__heading jsActivateAnimation' data-animation='fadeInUp'>
              {infoHeading}
            </h2>
            {paragraphs.map((paragraph, index) => {
              return (
                <p key={'info_' + index} className='info__text-p'>
                  {paragraph}
                </p>
              )
            })}

            <a href={'/' + ourTeamHtml + '/' + lang} className='btn-default'>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div className='info__image-container jsActivateAnimation' data-animation='fadeInUpBig'>
        <Image
          width='1075px'
          height='970px'
          src='/home/info.jpg'
          className='info__image-img'
          alt='Tunnel'
          loading='lazy'
        />
      </div>
    </section>
  )
}
