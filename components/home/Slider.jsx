import slide01 from '../../images/slider/slide_01.jpg'
import slide02 from '../../images/slider/slide_02.jpg'
import slide03 from '../../images/slider/slide_03.jpg'

import React, { useEffect, useState, useMemo, useRef } from 'react'

export function Slider({ lang = 'uk' }) {
  const [counter, setCounter] = useState(1)
  const sliderBackgroundRef = useRef()
  const sliderHeadingRef = useRef()

  function inputHandler(e) {
    console.log(e)
  }
  function formSubmit(e) {
    e.preventDefault
    alert('Заявка відправлена')
  }
  function slideLeft(e) {
    e.preventDefault
    console.log('slide', counter)
    sliderBackgroundRef.current.style.backgroundImage = `url(${sliders[counter - 1]})`
    sliderHeadingRef.current.innerText = sliderHeading[counter - 1]
    setCounter(prev => (prev === 1 ? sliders.length : prev - 1))
  }
  function slideRight(e) {
    e.preventDefault
    console.log('slide', counter)
    console.dir(sliderBackgroundRef)
    sliderBackgroundRef.current.style.backgroundImage = `url(${sliders[counter - 1]})`
    sliderHeadingRef.current.innerText = sliderHeading[counter - 1]
    setCounter(prev => (prev === sliders.length ? 1 : prev + 1))
  }

  function getTranslate(lang) {
    console.log(lang)
    let sliderHeading = []
    let buttonText
    const sliders = [slide01.src, slide02.src, slide03.src]
    switch (lang) {
      case 'ru':
        sliderHeading = [
          'Global Barristers – наши клиенты нас рекомендуют друзьям и знакомым, а также повторно обращаются с новыми проблемами, решение которых требует квалифицированных специалистов.',
          'Global Barristers - наши специалисты по автомобильному праву, помагают водителям защитить свои права на автодорогах',
          'Global Barristers - наши клиенты нам доверяют самое главное',
        ]
        buttonText = 'Получить консультацию'

        break
      case 'en':
        sliderHeading = [
          'Global Barristers - our clients recommend us to friends and acquaintances, as well as re-apply for new problems, the solution of which requires qualified professionals.',
          'Global Barristers - our specialists in car rights, help the waters to protect their rights from the swave on the highways ',
          'Global Barristers - our clients trust us with their own head',
        ]
        buttonText = 'Request a consultation'
        break
      default:
        sliderHeading = [
          'Global Barristers - клієнти завжди нас рекомендують своїм друзям і знайомим.',
          'Global Barristers - наші вузькопрофільні спеціалісти, допомагають відстояти свої права',
          'Global Barristers - наші клієнти нам довіряють найголовніше',
        ]
        buttonText = 'Отримати консультацію'
        break
    }
    return { sliderHeading, buttonText, sliders }
  }

  const { sliderHeading, buttonText, sliders } = getTranslate(lang)

  return (
    <section className='slider'>
      <div className='slider__backgrnd' ref={sliderBackgroundRef} style={{ backgroundImage: `url(${sliders[0]})` }}>
        <div className='slider__container container'>
          <h1 className='slider__heading' ref={sliderHeadingRef}>
            {sliderHeading[0]}
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
                    {buttonText}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <button onClick={slideLeft} className='slider__button left'>
            {'>'}
          </button>
          <button onClick={slideRight} className='slider__button right'>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}
