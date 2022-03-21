import Image from 'next/image'
import infoOrignImg from '../../images/infoOrignImg.jpg'
export function Info() {
  return (
    <section className='info'>
      <div className='info__container container'>
        <div className='info__photo-block'>
          <div className='info__text-block'>
            <h2 className='info__heading jsActivateAnimation' data-animation='fadeInUp'>
              Про нас
            </h2>
            <p className='info__text-p'>
              GLOBAL BARRISTERS – адвокатське об’єднання, яке надає юридичні послуги тільки в тих сферах, в яких має
              винятковий досвід і спеціалізацію.
            </p>
            <p className='info__text-p'>
              Ми вважаємо, що для того, щоб стати професіоналом в якійсь діяльності, нею необхідно результативно
              займатися щодня багато років. Тому наша компанія об’єднує вузькопрофільних фахівців, які ведуть практику в
              конкретних галузях права. В нашу спеціалізацію входить вирішення спорів, захист бізнесу, сімейне та
              спадкове право, кримінальне право, проблемні борги і антирейдерство.
            </p>

            <a href='{{HOST}}our-team/uk/' className='btn-default'>
              ДЕТАЛЬНІШЕ
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
          srcSet={
            infoOrignImg +
            ' 1075w,https://mitrax.com.ua/wp-content/uploads/2020/05/virtual-reality-voor-architecten-en-interieurontwerpers-1-5-300x271.jpg 300w,' +
            'https://mitrax.com.ua/wp-content/uploads/2020/05/virtual-reality-voor-architecten-en-interieurontwerpers-1-5-1024x924.jpg 1024w,' +
            'https://mitrax.com.ua/wp-content/uploads/2020/05/virtual-reality-voor-architecten-en-interieurontwerpers-1-5-768x693.jpg 768w'
          }
          sizes='(max-width: 1075px) 100vw, 1075px'
        />
      </div>
    </section>
  )
}
