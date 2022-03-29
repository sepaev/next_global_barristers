// import { useRouter } from 'next/router'
import { PageLayout } from '../../components/layouts'
import { GoToTopBtn } from '../../components/common'
import { Info, Articles, Reasons, Seo, Slider } from '../../components/home'
import React, { useRef, useEffect, useCallback } from 'react'
import { throttle } from 'throttle-debounce'

function Home({ lang = 'uk' }) {
  let GoToTopBtnRef = useRef(null)
  let title, details

  function btnGoTopController(currentScreenPosition, screenBottom, btnGoTop) {
    if (!btnGoTop || !btnGoTop.style) return
    if (currentScreenPosition > screenBottom) {
      console.log(btnGoTop)
      btnGoTop.style.opacity = '1'
      btnGoTop.style.pointerEvents = 'initial'
    } else {
      btnGoTop.style.opacity = '0'
      btnGoTop.style.pointerEvents = 'none'
    }
  }

  const handleScroll = useCallback(() => {
    if (!GoToTopBtnRef) return
    const currentScreenPosition = window.pageYOffset
    const screenBottom = document.documentElement.clientHeight
    btnGoTopController(currentScreenPosition, screenBottom, GoToTopBtnRef)
  }, [GoToTopBtnRef])

  function writeRef(target) {
    GoToTopBtnRef = target.current
  }
  switch (lang) {
    case 'ru':
      title = 'Главная страница'
      details = 'Подробнее'
      break
    case 'en':
      title = 'Home page'
      details = 'More details'
      break
    default:
      title = 'Головна сторінка'
      details = 'Детальніше'
      break
  }
  useEffect(() => {
    console.log('add scroll listner')
    window.addEventListener('scroll', throttle(500, false, handleScroll))
    return _ => {
      console.log('clear scroll listner')
      window.removeEventListener('scroll', throttle(500, false, handleScroll))
    }
  }, [handleScroll])

  return (
    <>
      <PageLayout lang={lang} title={title}>
        <Slider key={'slider'} lang={lang}></Slider>
        <Reasons key={'reasons'} lang={lang} details={details}></Reasons>
        <Info key={'info'} lang={lang}></Info>
        <Articles key={'articles'} lang={lang}></Articles>
        <Seo key={'seo'} lang={lang}></Seo>
        <GoToTopBtn key={'goToTopBtn'} writeRef={writeRef} />
      </PageLayout>
    </>
  )
}

export default Home
