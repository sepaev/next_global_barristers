import Link from 'next/link'
import Image from 'next/image'
import uniqid from 'uniqid'
import { getTranslations } from '../../translations/asides/practices'
import { useMemo } from 'react'

import {
  criminalLawHtml,
  economicLawHtml,
  familyLawHtml,
  taxLawHtml,
  civilLawHtml,
  customsLawHtml,
  immigrationLegislationHtml,
  bankingDisputesHtml,
  autoLawHtml,
} from '../../constants/pageNames'

export default function Practices({ lang }) {
  const practices = [
    criminalLawHtml,
    economicLawHtml,
    familyLawHtml,
    taxLawHtml,
    civilLawHtml,
    customsLawHtml,
    immigrationLegislationHtml,
    bankingDisputesHtml,
    autoLawHtml,
  ]
  const { paragraphs } = useMemo(() => getTranslations(lang), [lang])

  return (
    <>
      <div className='practices__container container'>
        <ul className='practices__list'>
          {practices.map(([html, text]) => {
            return (
              <li key={uniqid()} className='practices__item'>
                <Link href={'/practices/' + html + '/' + lang}>
                  <a className='practices__item-link'>
                    <div className='practices__item-picture'>
                      <Image
                        src={`/asides/practices/${html}.jpg`}
                        alt={text[lang]}
                        layout='fill'
                        objectFit='cover'
                        loading='lazy'
                        objectPosition='center'
                      />
                    </div>
                    <div className='practices__item-overlay'>
                      <h2 className='practices__item-title'>{text[lang]}</h2>
                      <p className='practices__item-paragraph'>{paragraphs[html]}</p>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
