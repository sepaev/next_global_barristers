import { useMemo } from 'react'
import uniqid from 'uniqid'
import { getTranslations } from '../../translations/asides/aboutUs'

export default function AboutUs({ lang }) {
  const { lawyersText, actionsText, branchesText, titleParagraph, mainTextParagraphs, benefitsTitle, benefits } =
    useMemo(() => getTranslations(lang), [lang])

  function stopAnimation({ target }) {
    const { style } = target.parentNode
    style.animationPlayState = 'paused'
  }
  function runAnimation({ target }) {
    const { style } = target.parentNode
    style.animationPlayState = 'initial'
  }

  // function pauseAnimation({ target }) {
  //   const { style } = target.parentNode
  //   if (style.animationPlayState === 'paused') {
  //     style.animationPlayState = 'initial'
  //   } else {
  //     //element.setAttribute('style', 'animation-play-state:paused !important');
  //     // element.style.setProperty("display", "inline", "important")
  //     style.animationPlayState = 'paused'
  //   }
  // }

  function writeSpans(paragrapnName, cicles, color, text) {
    let items = []
    const textArray = text.split(';')
    const counter = textArray.length * cicles
    for (let index = 0; index < cicles; index++) {
      items = items.concat(textArray)
    }
    return (
      <p
        className={'about-us-practices__text-sub ' + paragrapnName}
        style={{ animation: `runningText ${(counter + 10) * 6}s infinite linear` }}
      >
        {items.map(item => (
          <span
            className={'about-us-practices__text-span ' + color}
            // onClick={pauseAnimation}
            onMouseOver={stopAnimation}
            onMouseOut={runAnimation}
            key={uniqid()}
          >
            {item}
          </span>
        ))}
      </p>
    )
  }
  return (
    <div className='about-us'>
      <h2 className='about-us__title'>
        GLOBAL BARRISTERS
        <p className='about-us__title-p'>{titleParagraph}</p>
      </h2>
      {mainTextParagraphs.map(paragraph => {
        return (
          <p key={uniqid()} className='about-us__text'>
            {paragraph}
          </p>
        )
      })}

      <ul className='about-us-practices'>
        <h3 className='about-us-practices__heading visually-hidden'>{benefitsTitle}</h3>
        <li className='about-us-practices__item'>
          <h4 className='about-us-practices__heading-sub'>{benefits.lawyers}</h4>
          {writeSpans('lawyers', 8, 'aqua', lawyersText)}
        </li>
        <li className='about-us-practices__item'>
          <h4 className='about-us-practices__heading-sub'>{benefits.actions}</h4>
          {writeSpans('actions', 11, 'orange', actionsText)}
        </li>
        <li className='about-us-practices__item'>
          <h4 className='about-us-practices__heading-sub'>{benefits.departments}</h4>
          {writeSpans('branches', 13, 'gray', branchesText)}
        </li>
      </ul>
    </div>
  )
}
