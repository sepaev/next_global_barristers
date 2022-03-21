import background from '../../images/slider/site_slide_bg-4-2.webp'
export function Slider() {
  function inputHandler(e) {
    console.log(e)
  }
  function formSubmit(e) {
    e.preventDefault
    alert('Заявка відправлена')
  }
  return (
    <section className='slider'>
      <div className='slider__backgrnd' style={{ backgroundImage: `url(${background.src})` }}>
        <div className='slider__container container'>
          <h1 className='slider__heading'>
            Global Barristers - практика приватних клієнтів відзначена рейтингом The Legal 500 EMEA 2021 серед кращих
            юридичних фірм України
          </h1>

          <div className='form__container'>
            <form action='submit' className='slider__form' onSubmit={formSubmit}>
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
                    onChange={inputHandler}
                  />
                </span>
                <div className='form__submit-bg'>
                  <button type='submit' className='form__submit-btn'>
                    Отримати консультацію
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
