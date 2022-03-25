import Image from 'next/image'
import arrow from '../../images/svg/arrow.svg'
import list from '../../images/svg/list.svg'
import projectsOrignImg from '../../images/projectsOrignImg.jpg'
import projects263Img from '../../images/projects263Img.jpg'
import projects768Img from '../../images/projects768Img.jpg'
import Link from 'next/link'

export function Projects({ lang }) {
  return (
    <section className='projects'>
      <div className='container'>
        <div className='projects__info'>
          <div className='projects__picture-box jsActivateAnimation' data-animation='fadeInUpBig'>
            <Image
              width={801}
              height={913}
              src={projectsOrignImg}
              className='projects__picture-img attachment-full size-full'
              alt=''
              loading='lazy'
              srcSet={projectsOrignImg + ' 801w,' + projects768Img + ' 768w,' + projects263Img + ' 263w'}
              sizes='(max-width: 801px) 100vw, 801px'
            />
          </div>

          <ul className='projects__list'>
            <h2 className='projects__title jsActivateAnimation' data-animation='fadeInUp'>
              Проекти
            </h2>
            <p className='projects__text'>Наша результативність визначає вибір і довіру клієнтів</p>

            <li className='projects__item'>
              <Link href='https://mitrax.com.ua/uk/projects/bitva-dvoh-zakoniv-yak-bezbolisno-pereuklasti-dogovir-orendi-derzhmajna-pri-zmini-zakonodavstva/'>
                <a className='projects__item-link'>
                  <span className='projects__item-pre'>
                    <Image src={list.src} width='14px' height='15px' alt='list' className='projects__img-list' />
                  </span>
                  <h4 className='projects__item-title'>
                    Битва двох законів: як безболісно переукласти договір оренди держмайна при зміні законодавства
                  </h4>
                  <span className='projects__item-post'>
                    <Image src={arrow.src} width='30px' height='30px' alt='arrow' className='projects__img-arrow' />
                  </span>
                </a>
              </Link>
            </li>
            <li className='projects__item'>
              <Link href='https://mitrax.com.ua/uk/projects/yak-zahistiti-pravo-ditini-na-koristuvannya-zhitlom-yakshho-zakon-ne-na-vashomu-boczi/'>
                <a className='projects__item-link'>
                  <span className='projects__item-pre'>
                    <Image src={list.src} width='14px' height='15px' alt='list' className='projects__img-list' />
                  </span>
                  <h4 className='projects__item-title'>
                    Як захистити право дитини на користування житлом, якщо закон не на вашому боці
                  </h4>
                  <span className='projects__item-post'>
                    <Image src={arrow.src} width='30px' height='30px' alt='arrow' className='projects__img-arrow' />
                  </span>
                </a>
              </Link>
            </li>
            <li className='projects__item'>
              <Link href='https://mitrax.com.ua/uk/projects/spir-z-minoboroni-yak-uniknuti-shtrafnih-sankczij-u-25-mln-grn-za-dogovorom-budivelnogo-pidryadu/'>
                <a className='projects__item-link'>
                  <span className='projects__item-pre'>
                    <Image src={list.src} width='14px' height='15px' alt='list' className='projects__img-list' />
                  </span>
                  <h4 className='projects__item-title'>
                    Спір з Міноборони: як уникнути штрафних санкцій у 2,5 млн грн за договором будівельного підряду
                  </h4>
                  <span className='projects__item-post'>
                    <Image src={arrow.src} width='30px' height='30px' alt='arrow' className='projects__img-arrow' />
                  </span>
                </a>
              </Link>
            </li>

            <a href={'/business-solutions/' + lang} className='btn-default'>
              Усі проекти
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}
