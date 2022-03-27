import slide01 from '../../images/slider/slide_01.jpg'
import slide02 from '../../images/slider/slide_02.jpg'
import slide03 from '../../images/slider/slide_03.jpg'
import { getTranslate } from '../../translations/home/slider'
import React, { useEffect, useState, useMemo, useRef } from 'react'

export function Slider({ lang = 'uk' }) {
  const sliders = [slide01.src, slide02.src, slide03.src]
  const [counter, setCounter] = useState(2)
  const [formInput, setFormInput] = useState('')
  // const [auto, setAuto] = useState(true)

  const sliderBackgroundRef = useRef()
  const sliderHeadingRef = useRef()

  function inputChange(e) {}
  function inputHandler({ key, keyCode }) {
    //backspace
    if (keyCode === 8) {
      setFormInput(prev => prev.substring(0, prev.length - 1))
      return
    }
    //delete
    if (keyCode === 46) {
      setFormInput('')
      return
    }
    //didgits
    if (keyCode >= 48 && keyCode <= 57) {
      if (formInput.length === 9) return
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
    const number = inputMask()
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
  function inputMask() {
    const [d1 = '_', d2 = '_', d3 = '_', d4 = '_', d5 = '_', d6 = '_', d7 = '_', d8 = '_', d9 = '_'] = formInput
    return '+380 (' + d1 + d2 + ') ' + d3 + d4 + d5 + ' ' + d6 + d7 + ' ' + d8 + d9
  }
  const { sliderHeading, buttonText } = useMemo(() => getTranslate(lang), [lang])

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
                    value={inputMask()}
                    className='form__input'
                    size={40}
                    aria-required='true'
                    placeholder='+380 (__) ___-__-__'
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
            {'<'}
          </button>
          <button onClick={slideRight} className='slider__button right'>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}
