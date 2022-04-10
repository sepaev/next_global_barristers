import { getTranslations } from '../../translations/asides/ourTeam'
import { getCommonTranslations } from '../../translations/common/common'
import { useMemo } from 'react'
import { lawyers } from '../../constants/lawyers'
import uniqid from 'uniqid'
import Image from 'next/image'
import { useRef } from 'react'

export default function OurTeam({ lang, toggleModalForm }) {
  const { lawyersTitle, competationsTitle } = useMemo(() => getTranslations(lang), [lang])
  const { requestConsultationText } = useMemo(() => getCommonTranslations(lang), [lang])
  const lawyerButton = useRef(null)
  return (
    <>
      <h2 className='lawyers__title'>{lawyersTitle}</h2>
      <div className='lawyers__container'>
        <ul className='lawyers__list'>
          {lawyers.map(({ fileName, pib, description, competencies }) => {
            return (
              <li key={uniqid()} className='lawyer'>
                <div className='lawyer__photo'>
                  <Image
                    src={'/lawyers/' + fileName}
                    className='lawyer__photo-img'
                    alt={pib[lang]}
                    priority={true}
                    objectPosition='center'
                    objectFit='cover'
                    layout='fill'
                  />
                </div>

                <div className='lawyer__info'>
                  <h3 className='lawyer__name'>{pib[lang]}</h3>
                  <div className='lawyer__description'>{description[lang]}</div>

                  <div className='competations'>
                    <div className='competations__title'>{competationsTitle}</div>
                    <ul className='competations__list'>
                      {competencies[lang].split(';').map(competence => {
                        return (
                          <li className='competations__item' key={uniqid()}>
                            {competence}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <button
                    className='lawyer__button consult-btn js-consult-btn'
                    onClick={e => toggleModalForm(e, 'lawyer__button', pib)}
                    ref={lawyerButton}
                  >
                    {requestConsultationText}
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
