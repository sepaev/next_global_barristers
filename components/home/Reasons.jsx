import Link from 'next/link'
import { useMemo } from 'react'
import { getTranslations } from '../../translations/home/reasons'

export function Reasons({ lang }) {
  const { detailsButtonText, reasonsHeading, reasons } = useMemo(() => getTranslations(lang), [lang])

  return (
    <section className='reasons'>
      <div className='reasons__container container'>
        <h2 className='reasons__heading jsActivateAnimation' data-animation='fadeInUp'>
          {reasonsHeading}
        </h2>

        <ul className='ability__list'>
          {reasons.map((reason, index) => {
            return (
              <li key={'reason_' + index} className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
                <div className='ability__content'>
                  <h3 className='ability__title'>{reason.reasonTitle}</h3>
                  <p className='ability__description'>{reason.reasonDescription}</p>
                </div>
                <Link href={'/' + reason.reasonLink + '/' + lang}>
                  <a className='ability__link btn-default'>{detailsButtonText}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
