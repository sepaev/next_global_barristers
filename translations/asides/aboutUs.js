export function getTranslations(lang) {
  let lawyersText, actionsText, branchesText, titleParagraph, mainTextParagraphs, benefitsTitle, benefits
  switch (lang) {
    case 'ru':
      lawyersText =
        'Адвокат по корпоративным спорам;Адвокат по вопросам детей;Адвокат по взысканию дебиторской задолженности;Адвокат по спорам с недвижимости;Адвокат по разделу имущества;Адвокат по банковским и финансовым спорам;Адвокат по госзакупкам;Адвокат по судебным спорам'
      actionsText =
        'Взыскание дебиторской задолженности в судебном порядке;Разрешение споров;Защита бизнеса;Внесудебное урегулирование споров'
      branchesText =
        'Земля и недвижимость;Антирейдерство;Семейное и наследственное право;Проблемные долги;Уголовная практика;Экстрадиция'
      titleParagraph = ' объединяем людей с общими ценностями.'
      mainTextParagraphs = [
        'В сегодняшних условиях экономической нестабильности Ваш бизнес постоянно сталкивается с новыми вызовами. С Global Barrsisters Вы можете положиться на нашу команду высококвалифицированных экспертов. Мы профессиональны, современны и дружелюбны. Наши глубокие знания специфики отраслей экономики позволяют нам находить решение вопросов любого уровня сложности и масштаба.',
      ]
      benefitsTitle = 'Наши преимущества:'
      benefits = { lawyers: 'Адвокаты', actions: 'Действия', departments: 'Отрасли' }
      break
    case 'en':
      lawyersText =
        "Corporate Dispute Lawyer; Children's Lawyer; Accounts Receivable Lawyer; Real Estate Dispute Lawyer; Real Estate Dispute Lawyer; Property Division Lawyer; Banking and Financial Dispute Lawyer; Public Procurement Lawyer; Litigation Lawyer"
      actionsText =
        'Collection of receivables in court; Dispute resolution; Business protection; Out-of-court settlement of disputes'
      branchesText =
        'Land and Real Estate; Anti-Raiders; Family and Inheritance Law; Problem Debts; Criminal Practice; Extradition'
      titleParagraph = 'unite people with common values.'
      mainTextParagraphs = [
        "In today's environment of economic instability, your business is constantly facing new challenges. With Global Barrsisters you can count on our team of highly qualified experts. We are professional, modern and friendly. Our deep knowledge of the specifics of economic sectors allows us to find solutions to issues of any level of complexity and scale. ",
      ]
      benefitsTitle = 'Our benefits:'
      benefits = { lawyers: 'Lawyers', actions: 'Actions', departments: 'Departments' }
      break
    default:
      lawyersText =
        'Адвокат з корпоративних спорів;Адвокат з питань щодо дітей;Адвокат по стягненню дебіторської заборгованості;Адвокат зі спорів щодо нерухомості;Адвокат з поділу майна;Адвокат з банківських і фінансових спорів;Адвокат з держзакупівель;Адвокат з судових спорів'
      actionsText =
        'Стягнення дебіторської заборгованості в судовому порядку;Вирішення спорів;Захист бізнесу;Позасудове врегулювання спорів'
      branchesText =
        'Земля і нерухомість;Антирейдерство;Сімейне та спадкове право;Проблемні борги;Кримінальна практика;Екстрадиція'
      titleParagraph = ' об’єднуємо людей зі спільними цінностями.'
      mainTextParagraphs = [
        'В сьогоднішніх умовах економічної нестабільності Ваш бізнес постійно стикається з новими викликами. З Global Barrsisters Ви можете розраховувати на нашу команду висококваліфікованих експертів. Ми професійні, сучасні і доброзичливі. Наші глибокі знання специфіки галузей економіки дозволяють нам знаходити вирішення питань будь-якого рівня складності і масштабу.',
      ]
      benefitsTitle = 'Наші переваги:'
      benefits = { lawyers: 'Адвокати', actions: 'Дії', departments: 'Галузі' }
      break
  }
  return { lawyersText, actionsText, branchesText, titleParagraph, mainTextParagraphs, benefitsTitle, benefits }
}
