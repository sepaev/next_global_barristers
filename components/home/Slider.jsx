import { getTranslations } from '../../translations/home/slider'
import { getCommonTranslations } from '../../translations/common/common'
import Notiflix from 'notiflix'
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import Image from 'next/image'
import sendMail from '../../helpers/sendMail'
import InputMask from 'react-input-mask'

export function Slider({ lang = 'uk' }) {
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)
  const slider3Ref = useRef(null)

  const [counter, setCounter] = useState(2)
  const [statePhone, setStatePhone] = useState('')
  const sliderInterval = 8000
  const sliderHeadingRef = useRef()

  const { sliderTextArray, buttonText } = useMemo(() => getTranslations(lang), [lang])
  const { numberErrorText } = useMemo(() => getCommonTranslations(lang), [lang])
  const countSlides = sliderTextArray.length

  function formSubmit() {
    if (statePhone.includes('_') || !statePhone) {
      Notiflix.Notify.failure(numberErrorText)
      return
    }
    sendMail({ phone: statePhone, language: lang, request: 'обратный звонок' })
    setStatePhone('')
  }

  const changeSlide = useCallback(
    slideNumber => {
      const slides = [slider1Ref.current, slider2Ref.current, slider3Ref.current]
      slides.map((slide, i) => {
        if (i === slideNumber) {
          slide.style.height = '100%'
          slide.style.opacity = 1
        } else {
          slide.style.height = 0
          slide.style.opacity = 0
        }
      })
      sliderHeadingRef.current.innerText = sliderTextArray[slideNumber]
        ? sliderTextArray[slideNumber]
        : sliderTextArray[0]
    },
    [sliderTextArray],
  )
  function slideLeft() {
    changeSlide(counter - 1)
    setCounter(prev => (prev === 1 ? countSlides : prev - 1))
  }
  const slideRight = useCallback(() => {
    changeSlide(counter - 1)
    setCounter(prev => (prev === countSlides ? 1 : prev + 1))
  }, [counter, changeSlide, countSlides])

  const setValueToState = ({ target }) => setStatePhone(target.value)

  useEffect(() => {
    const interval = setTimeout(slideRight, sliderInterval)
    return () => clearTimeout(interval)
  }, [slideRight])

  return (
    <section key='sliderKey' className='slider'>
      <div className='slider__backgrnd'>
        <div className='slider__image slider__image1' ref={slider1Ref}>
          <div className='absolute__image-wrapper'>
            <Image
              src='/slides/slide_01.jpg'
              alt='Town'
              priority={true}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </div>
        <div className='slider__image slider__image2' ref={slider2Ref}>
          <div className='absolute__image-wrapper'>
            <Image src='/slides/slide_02.jpg' alt='Town' layout='fill' objectFit='cover' objectPosition='center' />
          </div>
        </div>
        <div className='slider__image slider__image3' ref={slider3Ref}>
          <div className='absolute__image-wrapper'>
            <Image src='/slides/slide_03.jpg' alt='Town' layout='fill' objectFit='cover' objectPosition='center' />
          </div>{' '}
        </div>
        <div className='slider__container container'>
          <h2 className='slider__heading' ref={sliderHeadingRef}>
            {sliderTextArray[0]}
          </h2>

          <div className='form__container'>
            <div className='slider__form'>
              <div className='form__line'>
                <span className='form__mask'>
                  <InputMask
                    type='tel'
                    name='number'
                    className='form__input'
                    onChange={setValueToState}
                    onBlur={setValueToState}
                    value={statePhone}
                    pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                    placeholder='+380 (__) ___-__-__'
                    mask='+380 (99) 999-99-99'
                    title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
                    required
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
