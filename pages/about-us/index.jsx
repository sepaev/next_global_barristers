import { PageLayout } from '../../components/layouts'
import Image from 'next/image'
import Link from 'next/link'
import { aboutUsHtml } from '../../constants/pageNames'

function OurTeam({ lang = 'uk' }) {
  let title
  switch (lang) {
    case 'ru':
      title = 'О нас'
      // details = 'Подробнее'
      break
    case 'en':
      title = 'About us'
      // details = 'More details'
      break
    default:
      title = 'Про нас'
      // details = 'Детальніше'
      break
  }

  return (
    <PageLayout lang={lang} title={title} currentPage={aboutUsHtml}>
      <main className='our-team__header'>
        <Image
          src='/our-team/header.jpg'
          alt='Towers'
          layout='fill'
          objectFit='cover'
          loading='lazy'
          objectPosition='center'
        />
      </main>
      <div className='container our-team__container'>
        <aside className='our-team__aside'>
          <ul className='our-team__aside-list'>
            <li className='our-team__aside-item'>
              <Link href={'/' + aboutUsHtml + '/' + lang}>
                <a className='js-disabled-link'>{title}</a>
              </Link>
            </li>
          </ul>
        </aside>

        <div className='content team-content'>
          <h1>Команда</h1>
          <div className='breadcrumbs'>
            <p id='breadcrumbs'>
              <span>
                <span>
                  <a href='https://mitrax.com.ua/uk/'>Главная страница</a> &gt;{' '}
                  <span className='breadcrumb_last' aria-current='page'>
                    Команда
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
              В сьогоднішніх умовах економічної нестабільності Ваш бізнес постійно стикається з новими викликами. З
              Mitrax Ви можете розраховувати на нашу команду висококваліфікованих визнаних експертів. Ми професійні,
              сучасні і доброзичливі. Наші глибокі знання специфіки галузей економіки дозволяють нам знаходити вирішення
              питань будь-якого рівня складності і масштабу.
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
              <span
                className='practices-select-item practices-select-item-desk'
                data-practice='simeyni-ta-maynovi-spori'
              >
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
              <span
                className='practices-select-item practices-select-item-desk'
                data-practice='advokat-s-nedvizhimosti'
              >
                Адвокат зі спорів щодо нерухомості
              </span>
              <span className='practices-select-item practices-select-item-desk' data-practice='kriminalna-praktika'>
                Кримінальна практика
              </span>
              <span
                className='practices-select-item practices-select-item-desk'
                data-practice='advokat-z-derzhzakypivel'
              >
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
      </div>
    </PageLayout>
  )
}

export default OurTeam

// <div class="team-list"> 			            			            			                                    <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/yana-babenko/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2022/02/14.021-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2022/02/14.021-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2022/02/14.021-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2022/02/14.021-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2022/02/14.021.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/yana-babenko/"><h2>Яна Бабенко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/yana-babenko/">
//             <p style="opacity: 1;">
//                 Адвокат Практики вирішення цивільних спорів  (Київский офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/simeyni-ta-maynovi-spori/" rel="tag">Сімейне та спадкове право</a>; <a href="https://mitrax.com.ua/uk/practices/majno/" rel="tag">Адвокат з поділу майна</a>; <a href="https://mitrax.com.ua/uk/practices/finansovi-i-bankovski-spory/" rel="tag">Адвокат з банківських і фінансових спорів</a>; <a href="https://mitrax.com.ua/uk/practices/dity/" rel="tag">Адвокат з питань щодо дітей</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                                                                 <a href="mailto:babenko.yana@mitrax.com.ua" class="team-member-contacts-email">babenko.yana@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/mariya-komarniczka/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/12/22.12_1-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/12/22.12_1-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/12/22.12_1-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/12/22.12_1-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/12/22.12_1.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/mariya-komarniczka/"><h2>Марія Комарницька</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/mariya-komarniczka/">
//             <p style="opacity: 1;">
//                 Помічник адвоката практики вирішення спорів (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                                                         </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/dmitro-konovalenko/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/07/dmitrij-konovalenko-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/07/dmitrij-konovalenko-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/07/dmitrij-konovalenko-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/07/dmitrij-konovalenko-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/07/dmitrij-konovalenko.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/dmitro-konovalenko/"><h2>Дмитро Коноваленко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/dmitro-konovalenko/">
//             <p style="opacity: 1;">
//                 Адвокат з питань екстрадиції та Інтерполу (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (093) 821 41 26" class="team-member-contacts-phone">+38 (093) 821 41 26</a>
//                                                                                                 <a href="mailto:konovalenko@mitrax.com.ua" class="team-member-contacts-email">konovalenko@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/igor-proczenko/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/proczenko-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/proczenko-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/proczenko-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/proczenko-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/proczenko.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/igor-proczenko/"><h2>Ігор Проценко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/igor-proczenko/">
//             <p style="opacity: 1;">
//                 Радник, адвокат, керівник практики кримінального права                                         </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+380 (50) 422 27 58" class="team-member-contacts-phone">+380 (50) 422 27 58</a>
//                                                                                                 <a href="mailto:office@mitrax.com.ua" class="team-member-contacts-email">office@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/ganna-dondik/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/donik-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/donik-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/donik-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/donik-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/donik.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/ganna-dondik/"><h2>Ганна Дондик</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/ganna-dondik/">
//             <p style="opacity: 1;">
//                 Адвокат Практики вирішення спорів (Запорізький офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+ 38 (067) 593 13 87" class="team-member-contacts-phone">+ 38 (067) 593 13 87</a>
//                                                                                                 <a href="mailto:dondikanna@gmail.com" class="team-member-contacts-email">dondikanna@gmail.com</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/mikola-kolomi%d1%94cz/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/kolomiєcz-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/kolomiєcz-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/kolomiєcz-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/kolomiєcz-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/kolomiєcz.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/mikola-kolomi%d1%94cz/"><h2>Микола Коломієць</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/mikola-kolomi%d1%94cz/">
//             <p style="opacity: 1;">
//                 Помічник адвоката Практики вирішення спорів (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                                                                 <a href="mailto:kolomiets@mitrax.com.ua" class="team-member-contacts-email">kolomiets@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/darina-redka/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/redka-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/redka-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/redka-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/redka-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/redka.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/darina-redka/"><h2>Дарина Редька</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/darina-redka/">
//             <p style="opacity: 1;">
//                 Помічник адвоката Практики вирішення цивільних  спорів (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                                                         </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/alina-borovecz/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/borovecz-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/borovecz-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/borovecz-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/borovecz-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/borovecz.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/alina-borovecz/"><h2>Аліна Боровець</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/alina-borovecz/">
//             <p style="opacity: 1;">
//                 Помічник адвоката практики вирішення спорів (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+ 38 (095) 470 01 56" class="team-member-contacts-phone">+ 38 (095) 470 01 56</a>
//                                                                                                 <a href="mailto:borovets@mitrax.com.ua" class="team-member-contacts-email">borovets@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/nadiya-anastasiya-fomina/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/fomina-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/fomina-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/fomina-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/fomina-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/fomina.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/nadiya-anastasiya-fomina/"><h2>Надія-Анастасія Фоміна</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/nadiya-anastasiya-fomina/">
//             <p style="opacity: 1;">
//                 Помічник адвоката практики вирішення цивільних спорів (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+ 38 (066) 895 98 88" class="team-member-contacts-phone">+ 38 (066) 895 98 88</a>
//                                                                                                 <a href="mailto:fomina@mitrax.com.ua" class="team-member-contacts-email">fomina@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/alina-gorb/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2020/12/gorb-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2020/12/gorb-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2020/12/gorb-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2020/12/gorb-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2020/12/gorb.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/alina-gorb/"><h2>Аліна Горб</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/alina-gorb/">
//             <p style="opacity: 1;">
//                 Помічник юриста практики вирішення цивільних спорів (Київський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                                                         </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/vladislav-skirda/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2021/06/skirda-v.є.-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2021/06/skirda-v.є.-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2021/06/skirda-v.є.-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2021/06/skirda-v.є.-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2021/06/skirda-v.є..jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/vladislav-skirda/"><h2>Владислав Скирда</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/vladislav-skirda/">
//             <p style="opacity: 1;">
//                 Адвокат, керівник Практики по роботі з проблемною заборгованністю (Київський офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/problemni-borgi/" rel="tag">Проблемні борги</a>; <a href="https://mitrax.com.ua/uk/practices/finansovi-i-bankovski-spory/" rel="tag">Адвокат з банківських і фінансових спорів</a>; <a href="https://mitrax.com.ua/uk/practices/pozasudove-vregulyuvannja-sporiv/" rel="tag">Позасудове врегулювання спорів</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+ 38 (098) 01-01-564" class="team-member-contacts-phone">+ 38 (098) 01-01-564</a>
//                                                                                                 <a href="mailto:skyrda@mitrax.com.ua" class="team-member-contacts-email">skyrda@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/aleksandr-strokan/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2018/05/strokan-a.v.-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2018/05/strokan-a.v.-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2018/05/strokan-a.v.-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2018/05/strokan-a.v.-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2018/05/strokan-a.v..jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/aleksandr-strokan/"><h2>Олександр Строкань</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/aleksandr-strokan/">
//             <p style="opacity: 1;">
//                 Партнер, адвокат, керівник практики вирішення спорів (Київський офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/korporativny-spory/" rel="tag">Адвокат з корпоративних спорів</a>; <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>; <a href="https://mitrax.com.ua/uk/practices/problemni-borgi/" rel="tag">Проблемні борги</a>; <a href="https://mitrax.com.ua/uk/practices/antireyderstvo/" rel="tag">Антирейдерство</a>; <a href="https://mitrax.com.ua/uk/practices/zahist-biznesu/" rel="tag">Захист бізнесу</a>; <a href="https://mitrax.com.ua/uk/practices/ekstraditsiya/" rel="tag">Екстрадиція</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (063) 491 61 73" class="team-member-contacts-phone">+38 (063) 491 61 73</a>
//                                                                                                 <a href="mailto:strokan@mitrax.com.ua" class="team-member-contacts-email">strokan@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/leonid-sivakov/" class="team__item-photo">
//     <img width="539" height="810" src="https://mitrax.com.ua/wp-content/uploads/2020/08/b•i-®ђ•≠®-1.png" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2020/08/b•i-®ђ•≠®-1.png 539w, https://mitrax.com.ua/wp-content/uploads/2020/08/b•i-®ђ•≠®-1-200x300.png 200w" sizes="(max-width: 539px) 100vw, 539px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/leonid-sivakov/"><h2>Леонід Сіваков</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/leonid-sivakov/">
//             <p style="opacity: 1;">
//                 Асоційований партнер, керівник практики захисту бізнесу                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/zahist-biznesu/" rel="tag">Захист бізнесу</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (067) 010 44 00" class="team-member-contacts-phone">+38 (067) 010 44 00</a>
//                                                                                         </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/mihajlo-tverdohlib/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2020/07/tverdohleb-m.g-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2020/07/tverdohleb-m.g-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2020/07/tverdohleb-m.g-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2020/07/tverdohleb-m.g-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2020/07/tverdohleb-m.g.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/mihajlo-tverdohlib/"><h2>Михайло Твердохліб</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/mihajlo-tverdohlib/">
//             <p style="opacity: 1;">
//                 Партнер, адвокат, керівник практики кримінального права                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/kriminalna-praktika/" rel="tag">Кримінальна практика</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (067) 403 56 56" class="team-member-contacts-phone">+38 (067) 403 56 56</a>
//                                                                                                 <a href="mailto:mt-lex@ukr.net" class="team-member-contacts-email">mt-lex@ukr.net</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/arsenij-salalajko/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2020/07/salalajko-a.a.-1-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2020/07/salalajko-a.a.-1-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2020/07/salalajko-a.a.-1-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2020/07/salalajko-a.a.-1-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2020/07/salalajko-a.a.-1.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/arsenij-salalajko/"><h2>Арсеній Салалайко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/arsenij-salalajko/">
//             <p style="opacity: 1;">
//                 СЕО, адвокат                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/korporatyvne-pravo/" rel="tag">Корпоративне право</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38(066) 895  98 88" class="team-member-contacts-phone">+38(066) 895  98 88</a>
//                                                                                                 <a href="mailto:salalaiko@mitrax.com.ua" class="team-member-contacts-email">salalaiko@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/maksim-gluhanchuk/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2018/08/gluhanchuk-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2018/08/gluhanchuk-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2018/08/gluhanchuk-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2018/08/gluhanchuk-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2018/08/gluhanchuk.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/maksim-gluhanchuk/"><h2>Максим Глуханчук</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/maksim-gluhanchuk/">
//             <p style="opacity: 1;">
//                 Партнер, адвокат, керівник Одеського офісу                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>; <a href="https://mitrax.com.ua/uk/practices/neruhomist/" rel="tag">Земля і нерухомість</a>; <a href="https://mitrax.com.ua/uk/practices/zahist-biznesu/" rel="tag">Захист бізнесу</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (093) 791 37 64" class="team-member-contacts-phone">+38 (093) 791 37 64</a>
//                                                                                                 <a href="mailto:maxgluhanchuk@gmail.com" class="team-member-contacts-email">maxgluhanchuk@gmail.com</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/denis-tkach/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2019/05/tkach-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2019/05/tkach-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2019/05/tkach-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2019/05/tkach-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2019/05/tkach.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/denis-tkach/"><h2>Денис Ткач</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/denis-tkach/">
//             <p style="opacity: 1;">
//                 Партнер, адвокат, керівник Запорізького офісу                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>; <a href="https://mitrax.com.ua/uk/practices/zahist-biznesu/" rel="tag">Захист бізнесу</a>; <a href="https://mitrax.com.ua/uk/practices/kriminalna-praktika/" rel="tag">Кримінальна практика</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (050) 456 73 75" class="team-member-contacts-phone">+38 (050) 456 73 75</a>
//                                                                                                 <a href="mailto:tkach@mitrax.com.ua" class="team-member-contacts-email">tkach@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/andrij-sereda/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2019/05/sereda-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2019/05/sereda-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2019/05/sereda-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2019/05/sereda-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2019/05/sereda.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/andrij-sereda/"><h2>Андрій Середа</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/andrij-sereda/">
//             <p style="opacity: 1;">
//                 Радник, адвокат Практики захисту бізнеса та вирішення спорів (Запорізький офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/zahist-biznesu/" rel="tag">Захист бізнесу</a>; <a href="https://mitrax.com.ua/uk/practices/kriminalna-praktika/" rel="tag">Кримінальна практика</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+380 (67) 714 65 20" class="team-member-contacts-phone">+380 (67) 714 65 20</a>
//                                                                                                 <a href="mailto:sereda@mitrax.com.ua" class="team-member-contacts-email">sereda@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/yurij-babenko/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2020/11/babenko-yu.s.-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2020/11/babenko-yu.s.-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2020/11/babenko-yu.s.-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2020/11/babenko-yu.s.-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2020/11/babenko-yu.s..jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/yurij-babenko/"><h2>Юрій Бабенко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/yurij-babenko/">
//             <p style="opacity: 1;">
//                 Адвокат, керівник практики вирішення цивільних спорів                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/simeyni-ta-maynovi-spori/" rel="tag">Сімейне та спадкове право</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+ 38 (066) 895 98 88" class="team-member-contacts-phone">+ 38 (066) 895 98 88</a>
//                                                                                                 <a href="mailto:babenko@mitrax.com.ua" class="team-member-contacts-email">babenko@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/legenchenko-elena-andreevna/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2018/08/legenchenko-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2018/08/legenchenko-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2018/08/legenchenko-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2018/08/legenchenko-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2018/08/legenchenko.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/legenchenko-elena-andreevna/"><h2>Олена Легенченко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/legenchenko-elena-andreevna/">
//             <p style="opacity: 1;">
//                 Адвокат, керівник Практики вирішення спорів (Одеський офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/simeyni-ta-maynovi-spori/" rel="tag">Сімейне та спадкове право</a>; <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (067) 956 08 25" class="team-member-contacts-phone">+38 (067) 956 08 25</a>
//                                                                                                 <a href="mailto:legenchenko@mitrax.com.ua" class="team-member-contacts-email">legenchenko@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/katerina-ponomarenko/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2019/02/pokomarenko-k.s.-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2019/02/pokomarenko-k.s.-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2019/02/pokomarenko-k.s.-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2019/02/pokomarenko-k.s.-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2019/02/pokomarenko-k.s..jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/katerina-ponomarenko/"><h2>Катерина Пономаренко</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/katerina-ponomarenko/">
//             <p style="opacity: 1;">
//                 Адвокат Практики вирішення спорів (Київський офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (068) 595 70 75" class="team-member-contacts-phone">+38 (068) 595 70 75</a>
//                                                                                                 <a href="mailto:ponomarenko@mitrax.com.ua" class="team-member-contacts-email">ponomarenko@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/goncharuk-irina-vladimirovna/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2018/08/goncharuk-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2018/08/goncharuk-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2018/08/goncharuk-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2018/08/goncharuk-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2018/08/goncharuk.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/goncharuk-irina-vladimirovna/"><h2>Ірина Гончарук</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/goncharuk-irina-vladimirovna/">
//             <p style="opacity: 1;">
//                 Адвокат Практики вирішення спорів (Одеський офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (063) 471 34 38" class="team-member-contacts-phone">+38 (063) 471 34 38</a>
//                                                                                                 <a href="mailto:honcharuk@mitrax.com.ua" class="team-member-contacts-email">honcharuk@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/ganna-olijnik/" class="team__item-photo">
//     <img width="684" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2019/06/GEX_9921_R-684x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2019/06/GEX_9921_R-684x1024.jpg 684w, https://mitrax.com.ua/wp-content/uploads/2019/06/GEX_9921_R-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2019/06/GEX_9921_R-768x1150.jpg 768w" sizes="(max-width: 684px) 100vw, 684px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/ganna-olijnik/"><h2>Ганна Олійник</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/ganna-olijnik/">
//             <p style="opacity: 1;">
//                 Юрист Практики вирішення спорів (Київський офіс)                                        </p>
//         </a>

//             <p class="spec-title" style="opacity: 1;">Компетенции: </p>

//             <p style="opacity: 1;">
//                 <a href="https://mitrax.com.ua/uk/practices/virishennya-sporiv/" rel="tag">Вирішення спорів</a>; <a href="https://mitrax.com.ua/uk/practices/neruhomist/" rel="tag">Земля і нерухомість</a>
//                 <!--  -->

//             </p>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (063) 877 32 57" class="team-member-contacts-phone">+38 (063) 877 32 57</a>
//                                                                                                 <a href="mailto:oleynik@mitrax.com.ua" class="team-member-contacts-email">oleynik@mitrax.com.ua</a>
//                                                 </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
//                                                                                         <div class="team__item">
// <a href="https://mitrax.com.ua/uk/team/dmitro-kalyuzhnij/" class="team__item-photo">
//     <img width="683" height="1024" src="https://mitrax.com.ua/wp-content/uploads/2019/10/kalyuzhnij-683x1024.jpg" class="attachment-large size-large" alt="" loading="lazy" srcset="https://mitrax.com.ua/wp-content/uploads/2019/10/kalyuzhnij-683x1024.jpg 683w, https://mitrax.com.ua/wp-content/uploads/2019/10/kalyuzhnij-200x300.jpg 200w, https://mitrax.com.ua/wp-content/uploads/2019/10/kalyuzhnij-768x1152.jpg 768w, https://mitrax.com.ua/wp-content/uploads/2019/10/kalyuzhnij.jpg 800w" sizes="(max-width: 683px) 100vw, 683px">                            </a>

// <div class="team__item-info">
//     <div class="team__item-info-content">

//         <a href="https://mitrax.com.ua/uk/team/dmitro-kalyuzhnij/"><h2>Дмитро Калюжний</h2></a>
//                                             <a href="https://mitrax.com.ua/uk/team/dmitro-kalyuzhnij/">
//             <p style="opacity: 1;">
//                 Помічник адвоката Практики вирішення спорів (Одеський офіс)                                        </p>
//         </a>

//     </div>
//     <div class="btn-wrapper">
//         <div class="team-member-contacts">
//                                                         <a href="tel:+38 (068) 635 35 25" class="team-member-contacts-phone">+38 (068) 635 35 25</a>
//                                                                                         </div>
//         <div class="consult-btn">
//             <a class="js-send-request" href="##">Отправить запрос</a>
//         </div>
//     </div>
// </div>
// </div>
// </div>
