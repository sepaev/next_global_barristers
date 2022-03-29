import { getTranslate } from '../../translations/home/slider'
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import Image from 'next/image'

export function Slider({ lang = 'uk' }) {
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)
  const slider3Ref = useRef(null)
  const countSlides = 3
  const [counter, setCounter] = useState(2)
  const [formInput, setFormInput] = useState('')
  const [auto, setAuto] = useState(true)

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
  const { sliderHeading, buttonText } = useMemo(() => getTranslate(lang), [lang])

  const setSlide = useCallback(
    index => {
      ;[slider1Ref.current, slider2Ref.current, slider3Ref.current].map((slide, i) => {
        if (i === index) {
          slide.style.height = '100%'
          slide.style.opacity = 1
          // di
        } else {
          slide.style.height = 0
          slide.style.opacity = 0
        }
      })
      // sliderBackgroundRef.current.style.backgroundImage = `url(${sliders[index]})`
      sliderHeadingRef.current.innerText = sliderHeading[index] ? sliderHeading[index] : sliderHeading[0]
    },
    [sliderHeading],
  )
  function slideLeft() {
    setSlide(counter - 1)
    setCounter(prev => (prev === 1 ? countSlides : prev - 1))
  }
  const slideRight = useCallback(() => {
    setSlide(counter - 1)
    setCounter(prev => (prev === countSlides ? 1 : prev + 1))
  }, [counter, setSlide, countSlides])
  function inputMask() {
    const [d1 = '_', d2 = '_', d3 = '_', d4 = '_', d5 = '_', d6 = '_', d7 = '_', d8 = '_', d9 = '_'] = formInput
    return '+380 (' + d1 + d2 + ') ' + d3 + d4 + d5 + ' ' + d6 + d7 + ' ' + d8 + d9
  }

  useEffect(() => {
    if (!auto) return

    const interval = setTimeout(_ => {
      slideRight()
    }, 8000)
    return _ => clearTimeout(interval)
  }, [auto, slideRight])

  //style={{ backgroundImage: `url(${sliders[0]})` }}
  return (
    <section className='slider'>
      <div className='slider__backgrnd'>
        <div className='slider__image slider__image1' ref={slider1Ref}>
          <Image src='/slides/slide_01.jpg' alt='Town' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
        <div className='slider__image slider__image2' ref={slider2Ref}>
          <Image src='/slides/slide_02.jpg' alt='Town' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
        <div className='slider__image slider__image3' ref={slider3Ref}>
          <Image src='/slides/slide_03.jpg' alt='Town' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
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
