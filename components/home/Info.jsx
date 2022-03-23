import Image from 'next/image'
import infoOrignImg from '../../images/infoOrignImg.jpg'
import info300Img from '../../images/info300Img.jpg'
import info768Img from '../../images/info768Img.jpg'
import info1024Img from '../../images/info1024Img.jpg'
import { getTranslate } from '../../translations/home/info'
import { useMemo } from 'react'

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
            <p className='info__text-p'>{paragraphs[0]}</p>
            <p className='info__text-p'>{paragraphs[1]}</p>

            <a href='{{HOST}}our-team/uk/' className='btn-default'>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div className='info__image-container jsActivateAnimation' data-animation='fadeInUpBig'>
        <Image
          width='1075'
          height='970'
          src={infoOrignImg}
          className='info__image-img'
          alt='building'
          loading='lazy'
          srcSet={infoOrignImg + ' 1075w,' + info300Img + ' 300w,' + info1024Img + ' 1024w,' + info768Img + ' 768w'}
          sizes='(max-width: 1075px) 100vw, 1075px'
        />
      </div>
    </section>
  )
}
