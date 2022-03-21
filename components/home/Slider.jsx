import background from '../../images/slider/site_slide_bg-4-2.webp'
export function Slider() {
  return (
    <section className='slider'>
      <div className='slider__backgrnd' style={{ backgroundImage: `url(${background.src})` }}>
        <div className='slider__container container'>
          <h1 className='slider__heading'>
            Global Barristers - практика приватних клієнтів відзначена рейтингом The Legal 500 EMEA 2021 серед кращих
            юридичних фірм України
          </h1>

          <div className='form__container'>
            <form action='submit' className='slider__form'>
              <div className='form__line'>
                <span className='form__mask'>
                  <input
                    type='tel'
                    name='mask-500'
                    value=''
                    className='form__input'
                    size={40}
                    aria-required='true'
                    placeholder='+38 (___) ___-__-__'
                    data-mask='+38 (___) ___-__-__'
                    tabIndex={-1}
                  />
                </span>
                <div className='form__submit-bg'>
                  <input type='submit' value='Отримати консультацію' className='form__submit-btn' tabIndex={-1} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
