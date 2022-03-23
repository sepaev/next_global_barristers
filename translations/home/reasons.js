export function getTranslate(lang) {
  let details, reasonsHeading, abilityTitles, abilityDescriptions
  switch (lang) {
    case 'ru':
      details = 'Подробнее'
      reasonsHeading = 'Основания работать с нами'
      abilityTitles = ['Ответственность - долгосрочные отношения', 'Специализация', 'Репутация']
      abilityDescriptions = [
        'Наш главный актив - доверие клиентов. Задачей во взаимоотношениях с клиентом являются долгосрочные отношения. Такие отношения в юридическом бизнесе можно построить только, выполняя взятые на себя перед клиентом обязательства. Мы несем полную ответственность за результаты своей деятельности перед клиентом. Мы никогда не будем клиенту рекомендовать ненужные или заведомо проигрышные ходы с целью увеличения чека.',
        'Члены нашей команды живут по принципу «найди любимое дело - и тебе не придется работать ни одного дня». Каждый член нашей команды имеет узкую специализацию, которой он по-настоящему живет. Мы никогда не беремся за предоставление услуг в тех сферах, в которых у нас нет компетенции. Такой подход дает преимущество нам и нашим клиентам. Мы на практике успешно решали многие проблемы, которые бывают в тех направлениях, в которых мы специализируемся.',
        'Наша компания поддерживает системные многолетние отношения со многими представителями крупного бизнеса в Украине, а также с ведущими юридическими компаниями и представителями различных ветвей власти. Мы следим за своей репутацией, поэтому мы полностью открытым и честны со своими клиентами.',
      ]
      break
    case 'en':
      details = 'Details'
      reasonsHeading = 'Reasons to work with us'
      abilityTitles = ['Responsibility and long-term relationships', 'Specialization', 'Reputation']
      abilityDescriptions = [
        'Our main asset is the trust of our clients. The goal in customer relationships is long-term relationships. Such relationships in the legal business can only be built by fulfilling the obligations assumed to the client. We are fully responsible for the results of our activities to the client. We will never recommend unnecessary or deliberately losing moves to a client in order to increase the check.',
        "Members of our team live by the principle find your favorite business - and you won't have to work any day. Each member of our team has a narrow specialization, which he truly lives. We never take on the provision of services in areas in which we have no competence. This approach benefits us and our customers. In practice, we have successfully solved many problems that occur in the areas in which we specialize.",
        'Our company maintains systematic long-term relationships with many representatives of large businesses in Ukraine, as well as with leading law firms and representatives of various branches of government. We care about our reputation, so we are completely open and honest with our customers.',
      ]
      break
    default:
      details = 'Детальніше'
      reasonsHeading = 'Підстави працювати з нами'
      abilityTitles = ['Відповідальність - довгострокові відносини', 'Спеціалізація', 'Репутація']
      abilityDescriptions = [
        "Наш головний актив - довіра клієнтів. Завданням у взаєминах з клієнтом є довгострокові відносини. Такі відносини в юридичному бізнесі можна побудувати лише, виконуючи взяті на себе перед клієнтом зобов'язання. Ми несемо повну відповідальність за результати своєї діяльності перед клієнтом. Ми ніколи не будемо клієнту радити непотрібні або свідомо програшні ходи з метою збільшення чека.",
        'Члени нашої команди живуть за принципом «знайди улюблену справу - і тобі не доведеться працювати жодного дня». Кожен член нашої команди має вузьку спеціалізацію, якою він по-справжньому живе. Ми ніколи не беремося за надання послуг в тих сферах, в яких у нас немає компетенції. Такий підхід дає перевагу нам і нашим клієнтам. Ми на практиці успішно вирішували більшість проблем, які бувають в тих напрямках, в яких ми спеціалізуємося.',
        'Наша компанія підтримує системні багаторічні відносини з багатьма представниками великого бізнесу в Україні, а також з провідними юридичними компаніями і представниками різних гілок влади. Ми стежимо за своєю репутацією, тож ми повністю откриті і чесні зі своїми клієнтами.',
      ]
      break
  }
  return { details, reasonsHeading, abilityTitles, abilityDescriptions }
}
