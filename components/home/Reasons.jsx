import Link from 'next/link'
import { useMemo } from 'react'
import { getTranslate } from '../../translations/home/reasons'

export function Reasons({ lang }) {
  const { details, reasonsHeading, abilityTitles, abilityDescriptions } = useMemo(() => getTranslate(lang), [lang])

  return (
    <section className='reasons'>
      <div className='reasons__container container'>
        <h2 className='reasons__heading jsActivateAnimation' data-animation='fadeInUp'>
          {reasonsHeading}
        </h2>

        <ul className='ability__list'>
          <li className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
            <div className='ability__content'>
              <h3 className='ability__title'>{abilityTitles[0]}</h3>
              <p className='ability__description'>{abilityDescriptions[0]}</p>
            </div>
            <Link href={'/rasons/' + { lang } + '/'}>
              <a className='ability__link btn-default'>{details}</a>
            </Link>
          </li>
          <li className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
            <div className='ability__content'>
              <h3 className='ability__title'>{abilityTitles[1]}</h3>
              <p className='ability__description'>{abilityDescriptions[1]}</p>
            </div>
            <Link href={'/business-solutions/' + { lang } + '/'}>
              <a className='ability__link btn-default'>{details}</a>
            </Link>
          </li>
          <li className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
            <div className='ability__content'>
              <h3 className='ability__title'>{abilityTitles[2]}</h3>
              <p className='ability__description'>{abilityDescriptions[2]}</p>
            </div>
            <Link href={'/our-team/' + { lang } + '/'}>
              <a className='ability__link btn-default'>{details}</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
