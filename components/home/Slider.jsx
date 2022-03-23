import slide01 from '../../images/slider/slide_01.jpg'
import slide02 from '../../images/slider/slide_02.jpg'
import slide03 from '../../images/slider/slide_03.jpg'

import React, { useEffect, useState, useMemo, useRef } from 'react'

export function Slider({ lang = 'uk' }) {
  const [counter, setCounter] = useState(1)
  const [auto, setAuto] = useState(true)
  const [formInput, setFormInput] = useState('')

  const sliderBackgroundRef = useRef()
  const sliderHeadingRef = useRef()

  function inputChange(e) {}
  function inputHandler({ key, keyCode }) {
    if (keyCode === 8) {
      setFormInput(prev => prev.substring(0, prev.length - 1))
      return
    }
    if (keyCode === 46) {
      setFormInput('')
      return
    }
    if (keyCode >= 48 && keyCode <= 57) {
      if (formInput.length === 9) return
      console.log('here')
      setFormInput(prev => prev + key)
      return
    }
  }
  function formSubmit(e) {
    e.preventDefault
    if (formInput.length < 9) {
      alert('введите номер')
      return
    }
    const number = formValue()
    alert(number + ' - заявка відправлена')
  }
  function setSlide(index) {
    console.log('slide', index + 1)
    sliderBackgroundRef.current.style.backgroundImage = `url(${sliders[index]})`
    sliderHeadingRef.current.innerText = sliderHeading[index] ? sliderHeading[index] : sliderHeading[0]
  }
  function slideLeft() {
    setSlide(counter - 1)
    setCounter(prev => (prev === 1 ? sliders.length : prev - 1))
  }
  function slideRight() {
    setSlide(counter - 1)
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
  function formValue() {
    const [d1 = '_', d2 = '_', d3 = '_', d4 = '_', d5 = '_', d6 = '_', d7 = '_', d8 = '_', d9 = '_'] = formInput
    console.log(formInput)
    return '+380 (' + d1 + d2 + ') ' + d3 + d4 + d5 + ' ' + d6 + d7 + ' ' + d8 + d9
  }
  const { sliderHeading, buttonText, sliders } = getTranslate(lang)

  // useEffect(() => {
  //   if (!auto) return
  //   const interval = setTimeout(_ => {
  //     slideRight()
  //   }, 5000)
  //   return _ => clearTimeout(interval)
  // }, [auto, slideRight])
  return (
    <section className='slider'>
      <div className='slider__backgrnd' ref={sliderBackgroundRef} style={{ backgroundImage: `url(${sliders[0]})` }}>
        <div className='slider__container container'>
          <h1 className='slider__heading' ref={sliderHeadingRef}>
            {sliderHeading[0]}
          </h1>

          <div className='form__container'>
            <div className='slider__form'>
              <div className='form__line'>
                <span className='form__mask'>
                  <input
                    // type='tel'
                    name='mask-500'
                    value={formValue()}
                    className='form__input'
                    size={40}
                    aria-required='true'
                    placeholder='+380 (__) ___-__-__'
                    // data-mask='+380 (__) ___-__-__'
                    onKeyDown={inputHandler}
                    onChange={inputChange}
                  />
                </span>
                <div className='form__submit-bg'>
                  <button onClick={formSubmit} className='form__submit-btn'>
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
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
