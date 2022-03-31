import uniqid from 'uniqid'

export default function AboutUs({ lang }) {
  const lawersText =
    'Адвокат з корпоративних спорів;Адвокат з питань щодо дітей;Адвокат по стягненню дебіторської заборгованості;Адвокат зі спорів щодо нерухомості;Адвокат з поділу майна;Адвокат з банківських і фінансових спорів;Адвокат з держзакупівель;Адвокат з судових спорів'
  const actionsText =
    'Стягнення дебіторської заборгованості в судовому порядку;Вирішення спорів;Захист бізнесу;Позасудове врегулювання спорів'
  const branchesText =
    'Земля і нерухомість;Антирейдерство;Сімейне та спадкове право;Проблемні борги;Кримінальна практика;Екстрадиція'

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
        <p className='about-us__title-p'> об’єднуємо людей зі спільними цінностями.</p>
      </h2>
      <p className='about-us__text'>
        В сьогоднішніх умовах економічної нестабільності Ваш бізнес постійно стикається з новими викликами. З Global
        Barrsisters Ви можете розраховувати на нашу команду висококваліфікованих експертів. Ми професійні, сучасні і
        доброзичливі. Наші глибокі знання специфіки галузей економіки дозволяють нам знаходити вирішення питань
        будь-якого рівня складності і масштабу.
      </p>
      <ul className='about-us-practices'>
        <h3 className='about-us-practices__heading visually-hidden'>Наші переваги:</h3>
        <li className='about-us-practices__item'>
          <h4 className='about-us-practices__heading-sub'>Адвокати</h4>
          {writeSpans('lawers', 8, 'aqua', lawersText)}
        </li>
        <li className='about-us-practices__item'>
          <h4 className='about-us-practices__heading-sub'>Дії</h4>
          {writeSpans('actions', 11, 'orange', actionsText)}
        </li>
        <li className='about-us-practices__item'>
          <h4 className='about-us-practices__heading-sub'>Галузі</h4>
          {writeSpans('branches', 13, 'gray', branchesText)}
        </li>
      </ul>
    </div>
  )
}
