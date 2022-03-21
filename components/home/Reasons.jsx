export function Reasons() {
  return (
    <section className='reasons'>
      <div className='reasons__container container'>
        <h2 className='reasons__heading jsActivateAnimation' data-animation='fadeInUp'>
          Підстави працювати з нами
        </h2>

        <ul className='ability__list'>
          <li className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
            <div className='ability__content'>
              <h3 className='ability__title'>Відповідальність - довгострокові відносини</h3>
              <p className='ability__description'>
                Наш головний актив - довіра клієнтів. Завданням у взаєминах з клієнтом є довгострокові відносини. Такі
                відносини в юридичному бізнесі можна побудувати лише, виконуючи взяті на себе перед клієнтом
                зобов{"'"}язання. Ми несемо повну відповідальність за результати своєї діяльності перед клієнтом. Ми ніколи
                не будемо клієнту радити непотрібні або свідомо програшні ходи з метою збільшення чека.
              </p>
            </div>
            <a href='{{HOST}}rasons/{{lang}}/' className='ability__link btn-default'>
              ДЕТАЛЬНІШЕ
            </a>
          </li>
          <li className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
            <div className='ability__content'>
              <h3 className='ability__title'>Спеціалізація</h3>
              <p className='ability__description'>
                Члени нашої команди живуть за принципом «знайди улюблену справу - і тобі не доведеться працювати жодного
                дня». Кожен член нашої команди має вузьку спеціалізацію, якою він по-справжньому живе. Ми ніколи не
                беремося за надання послуг в тих сферах, в яких у нас немає компетенції. Такий підхід дає перевагу нам і
                нашим клієнтам. Ми на практиці успішно вирішували більшість проблем, які бувають в тих напрямках, в яких
                ми спеціалізуємося.
              </p>
            </div>
            <a href='{{HOST}}business-solutions/{{lang}}/' className='ability__link btn-default'>
              ДЕТАЛЬНІШЕ
            </a>
          </li>
          <li className='ability__item jsActivateAnimation' data-animation='fadeInUp'>
            <div className='ability__content'>
              <h3 className='ability__title'>Репутація</h3>
              <p className='ability__description'>
                Наша компанія підтримує системні багаторічні відносини з багатьма представниками великого бізнесу в
                Україні, а також з провідними юридичними компаніями і представниками різних гілок влади. Ми стежимо за
                своєю репутацією, тож ми повністю откриті і чесні зі своїми клієнтами.
              </p>
            </div>
            <a href='{{HOST}}our-team/{{lang}}/' className='ability__link btn-default'>
              ДЕТАЛЬНІШЕ
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
