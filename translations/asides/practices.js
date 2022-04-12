import {
  criminalLawHtml,
  economicLawHtml,
  familyLawHtml,
  taxLawHtml,
  civilLawHtml,
  customsLawHtml,
  immigrationLegislationHtml,
  bankingDisputesHtml,
  autoLawHtml,
} from '../../constants/pageNames'

export function getTranslations(lang) {
  let paragraphs
  switch (lang) {
    case 'ru':
      paragraphs = {
        [criminalLawHtml[0]]:
          'Работа адвоката в сфере уголовного права крайне сложна и ответственна, и требует значительного количества специфических знаний, способностей и черт характера.',
        [economicLawHtml[0]]:
          'Наши эксперты помогут предотвратить банковское и финансовое мошенничество. А также имеют большой опыт в решении различных вопросов, связанных с хозяйственной деятельностью.',
        [familyLawHtml[0]]:
          'Категория семейных споров охватывает множество ситуаций, в которых может оказаться любой человек. Некоторые из них могут казаться крайне сложными или длиться годами, для других достаточно просто уделить некоторое время. Однако все ситуации объединяет общая особенность – участие семейного адвоката позволяет решить проблему грамотно, с оптимальными временными и денежными затратами.',
        [taxLawHtml[0]]:
          'Если у Вас возникли какие-либо вопросы, касающиеся налогового законодательства или вы допустили ошибку, мы сможем предоставить высококвалифицированную консультацию и предложить пути исправления допущенных ошибок.',
        [civilLawHtml[0]]:
          'Адвокаты обеспечивают юридическое сопровождение судебного дела в судах первой, апелляционной и кассационной инстанций, Верховном Суде. Самостоятельная поправка крайне редко приводит к желаемому результату. Своевременная помощь консультанта по судебной практике позволяет просчитать и минимизировать всевозможные риски',
        [customsLawHtml[0]]:
          'Мы предоставляем качественные юридические услуги бизнесу, в том числе в сфере разрешения таможенных споров. Обратившись к нам, Вы всегда можете рассчитывать на профессиональную помощь опытного адвоката.',
        [immigrationLegislationHtml[0]]:
          'Юридическая помощь в сфере гражданства, экстрадиции, департации, миграционных вопросов позволит заранее подготовиться ко всем сложностям, встретить их во всеоружии и преодолеть с минимальными затратами времени, сил, нервов и финансов.',
        [bankingDisputesHtml[0]]:
          'Квалифицированная помощь банковского адвоката поможет Вам избежать многих проблем, возникающих при наличии спора с банком.',
        [autoLawHtml[0]]: 'Помощь автоюриста при ДТП и связанными с ним административными и/или уголовными делами.',
      }
      break
    case 'en':
      paragraphs = {
        [criminalLawHtml[0]]:
          'The work of a lawyer in the field of criminal law is very complicated and difficult, and it will require a significant amount of specific knowledge, strengths and character.',
        [economicLawHtml[0]]: 'Our experts will help to save banking and financial shakhraystvo.',
        [familyLawHtml[0]]:
          'The category of family disputes embraces impersonal situations, in which you can imagine whether you are a person. Deyakі from them can zdavatisya foldable or three times, for others it is enough just to add an hour. However, these situations have a common feature - the fate of a family lawyer allows you to solve the problem competently, with optimal hours and pennies.',
        [taxLawHtml[0]]:
          'Just as you have blamed whether or not food, if tax legislation or pardons have been allowed, we can give a highly qualified consultation and to propagate ways to correct the admission of pardons.',
        [civilLawHtml[0]]:
          'Attorneys shall provide legal support to the court and consult with the courts of the first, appellate and cassation instances, the Supreme Court. Self-improvement in the region is rare to produce a bad result. At the same time, an additional help of a consultant on judicial practice was given, allowing to clear up and minimize all risks',
        [customsLawHtml[0]]:
          'We hope to provide legal services to business, including the sphere of solving current disputes. When you return to us, you can always secure a certified lawyer for professional assistance.',
        [immigrationLegislationHtml[0]]:
          'Legal assistance in the sphere of society, extradition, departments, migratory meals to allow for a long time to prepare for all the folds, to teach them to everyone and to help them with the minimum investment of time, strength, nerves and finances.',
        [bankingDisputesHtml[0]]:
          'The assistance of a bank lawyer is qualified to help you solve a lot of problems, as they claim to be open to a dispute with the bank.',
        [autoLawHtml[0]]:
          'Assistance of a car lawyer in case of an accident and owing to her by administrative and/or criminal rights.',
      }
      break
    default:
      paragraphs = {
        [criminalLawHtml[0]]:
          'Робота адвоката в сфері кримінального права вкрай складна та відповідальна, та потребує значної кількості специфічних знань, здібностей та рис характеру.',
        [economicLawHtml[0]]:
          "Наші експерти допоможуть запобігти банківське та фінансове шахрайство. А також мають великий досвід у вирішенні різних питань пов'язаних із господарською діяльністю.",
        [familyLawHtml[0]]:
          'Категорія сімейних спорів охоплює безліч ситуацій, в яких може опинитися будь-яка людина. Однак усі ситуації об’єднує спільна особливість – участь сімейного адвоката дозволяє вирішити проблему грамотно, з оптимальними часовими та грошовими витратами.',
        [taxLawHtml[0]]:
          'Якщо у Вас виникли будь-які питання, щодо податкового законодавства або ви припустилися помилки, ми зможемо надати висококваліфіковану консультацію та запропонувати шляхи виправлення допущених помилок.',
        [civilLawHtml[0]]:
          'Адвокати забезпечують юридичний супровід судової справи у судах всіх інстанцій. Самостійне виправлення вкрай рідко призводить до бажаного результату. Своєчасно надана допомога консультанта по судовій практиці дозволяє прорахувати та мінімізувати всілякі ризики.',
        [customsLawHtml[0]]:
          'Ми надаємо якісні юридичні послуги бізнесу, у тому числі у сфері вирішення митних спорів. Звернувшись до нас, Ви завжди можете розраховувати на професійну допомогу досвідченого адвоката.',
        [immigrationLegislationHtml[0]]:
          'Юридична допомога в сфері громадянства, екстрадиції, департації, міграційних питань дозволить заздалегідь підготуватися до всіх складнощів, зустріти їх у всеозброєнні та подолати з мінімальними витратами часу, сил, нервів та фінансів.',
        [bankingDisputesHtml[0]]:
          "Кваліфікована допомога банківського адвоката допоможе Вам уникнути багатьох проблем, які з'являються за наявності спору з банком.",
        [autoLawHtml[0]]:
          "Допомога автоюриста при ДТП та пов'язаними з нею адміністративними та/або кримінальними справами.",
      }
      break
  }
  return { paragraphs }
}
