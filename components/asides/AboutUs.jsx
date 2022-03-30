import { aboutUsHtml, homeHtml } from '../../constants/pageNames'

export default function AboutUs({ lang }) {
  return (
    <>
      <div className='content team-content'>
        <h1>{aboutUsHtml[1][lang]}</h1>
        <div className='breadcrumbs'>
          <p id='breadcrumbs'>
            <span>
              <span>
                <a href={'/' + homeHtml[0] + '/' + lang}>{homeHtml[1][lang]}</a> &gt;{' '}
                <span className='breadcrumb_last' aria-current='page'>
                  {aboutUsHtml[1][lang]}
                </span>
              </span>
            </span>
          </p>{' '}
        </div>

        <div className='practice-inner'>
          <h2>
            <span>MITRAX ОБ’ЄДНУЄ ЛЮДЕЙ ЗІ СПІЛЬНИМИ ЦІННОСТЯМИ.</span>
          </h2>
          <p>
            В сьогоднішніх умовах економічної нестабільності Ваш бізнес постійно стикається з новими викликами. З Mitrax
            Ви можете розраховувати на нашу команду висококваліфікованих визнаних експертів. Ми професійні, сучасні і
            доброзичливі. Наші глибокі знання специфіки галузей економіки дозволяють нам знаходити вирішення питань
            будь-якого рівня складності і масштабу.
          </p>
          <p> </p>
          <div className='practices-select'>
            <span className='practices-select-label'>Практики: </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='korporatyvne-pravo'>
              Корпоративне право
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='korporativny-spory'>
              Адвокат з корпоративних спорів
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='simeyni-ta-maynovi-spori'>
              Сімейне та спадкове право
            </span>
            <span
              className='practices-select-item practices-select-item-desk'
              data-practice='stjagnennja-debitorskoi-zaborgovanosti'
            >
              Адвокат по стягненню дебіторської заборгованості
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='sudovi-spory'>
              Адвокат з судових спорів
            </span>
            <span
              className='practices-select-item practices-select-item-desk'
              data-practice='stjagnennja-zaborgovanosti-v-sudi'
            >
              Стягнення дебіторської заборгованості в судовому порядку
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='virishennya-sporiv'>
              Вирішення спорів
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='problemni-borgi'>
              Проблемні борги
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='majno'>
              Адвокат з поділу майна
            </span>
            <span
              className='practices-select-item practices-select-item-desk'
              data-practice='finansovi-i-bankovski-spory'
            >
              Адвокат з банківських і фінансових спорів
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='neruhomist'>
              Земля і нерухомість
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='dity'>
              Адвокат з питань щодо дітей
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='antireyderstvo'>
              Антирейдерство
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='zahist-biznesu'>
              Захист бізнесу
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='advokat-s-nedvizhimosti'>
              Адвокат зі спорів щодо нерухомості
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='kriminalna-praktika'>
              Кримінальна практика
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='advokat-z-derzhzakypivel'>
              Адвокат з держзакупівель
            </span>
            <span className='practices-select-item practices-select-item-desk' data-practice='ekstraditsiya'>
              Екстрадиція
            </span>
            <span
              className='practices-select-item practices-select-item-desk'
              data-practice='pozasudove-vregulyuvannja-sporiv'
            >
              Позасудове врегулювання спорів
            </span>
            <aside className='mobile-aside practices-dropdown'>
              <div className='category-select'>
                <div className='active'>Не выбрано</div>

                <div className='dropdown-list'>
                  <ul>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='korporatyvne-pravo'>
                        Корпоративне право
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='korporativny-spory'>
                        Адвокат з корпоративних спорів
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='simeyni-ta-maynovi-spori'>
                        Сімейне та спадкове право
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='stjagnennja-debitorskoi-zaborgovanosti'>
                        Адвокат по стягненню дебіторської заборгованості
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='sudovi-spory'>
                        Адвокат з судових спорів
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='stjagnennja-zaborgovanosti-v-sudi'>
                        Стягнення дебіторської заборгованості в судовому порядку
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='virishennya-sporiv'>
                        Вирішення спорів
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='problemni-borgi'>
                        Проблемні борги
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='majno'>
                        Адвокат з поділу майна
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='finansovi-i-bankovski-spory'>
                        Адвокат з банківських і фінансових спорів
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='neruhomist'>
                        Земля і нерухомість
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='dity'>
                        Адвокат з питань щодо дітей
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='antireyderstvo'>
                        Антирейдерство
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='zahist-biznesu'>
                        Захист бізнесу
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='advokat-s-nedvizhimosti'>
                        Адвокат зі спорів щодо нерухомості
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='kriminalna-praktika'>
                        Кримінальна практика
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='advokat-z-derzhzakypivel'>
                        Адвокат з держзакупівель
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='ekstraditsiya'>
                        Екстрадиція
                      </span>
                    </li>
                    <li className='practices-select-item-wrap'>
                      <span className='practices-select-item' data-practice='pozasudove-vregulyuvannja-sporiv'>
                        Позасудове врегулювання спорів
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className='team-list-wrap'>
          <div className='loader'>
            <section>
              <div className='sk-folding-cube'>
                <div className='sk-cube sk-cube-1'></div>
                <div className='sk-cube sk-cube-2'></div>
                <div className='sk-cube sk-cube-4'></div>
                <div className='sk-cube sk-cube-3'></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
