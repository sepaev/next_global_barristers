import { ourTeamHtml, homeHtml } from '../../constants/pageNames'
import { lawyers } from '../../constants/lawyers'
import uniqid from 'uniqid'
import Image from 'next/image'

export default function OurTeam({ lang }) {
  return (
    <>
      <div className='lawyers__title'>Наші адвокати</div>
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
                    loading='lazy'
                    objectPosition='center'
                    objectFit='cover'
                    layout='fill'
                  />
                </div>

                <div className='lawyer__info'>
                  <h3 className='lawyer__name'>{pib[lang]}</h3>
                  <div className='lawyer__description'>{description[lang]}</div>

                  <div className='competations'>
                    <div className='title_comp'>Компетенции: </div>
                    <ul>
                      {competencies[lang].split(';').map(competence => {
                        return <li key={uniqid()}>{competence}</li>
                      })}
                    </ul>
                  </div>

                  <a className='mail_key' href='mailto:ponomarenko@mitrax.com.ua'>
                    ponomarenko@mitrax.com.ua
                  </a>

                  <div className='consult-btn js-consult-btn'>
                    <a href='mailto:ponomarenko@mitrax.com.ua' className='key_btn'>
                      отправить запрос{' '}
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
