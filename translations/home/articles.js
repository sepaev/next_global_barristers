export function getTranslate(lang) {
  let articlesHeading, articlesCommonText, articlesButton, articles
  switch (lang) {
    case 'ru':
      articlesHeading = 'Проекты'
      articlesCommonText = 'Наша результативность определяет выбор и доверие клиентов'
      articlesButton = 'Все проекты'
      articles = [
        {
          mainBlock: {
            title:
              'Битва двух законов: как безболезненно перезаключить договор аренды госимущества при изменении законодательства',
            content: [
              {
                type: 'paragraph',
                text: 'Наш клиент несколько лет арендовал целостный имущественный комплекс (далее ЦМК). Когда срок действия договора подходил к концу, он обратился к арендодателю с заявлением о продлении аренды.',
              },
              {
                type: 'paragraph',
                text: 'Но последний ему отказал. Арендодатель аргументировал свою позицию тем, что намерен самостоятельно использовать ЦМК. Но когда срок аренды истек, арендодатель не предпринял никаких действий, чтобы вернуть имущество из аренды.',
              },
              {
                type: 'paragraph',
                text: 'По законодательству, действовавшему на тот момент, наш клиент имел право перезаключить договор аренды без аукциона по принципу молчаливого согласия. Он просто продолжал пользоваться ЦМК и платить арендные платежи. Никто против этого не возражал.',
              },
            ],
          },
          blocks: [
            {
              title: 'Почему возник конфликт',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'Несмотря на фактическое продление аренды, наш клиент все же хотел устранить правовую неопределенность и официально перезаключить договор. Он снова и снова направлял заявления арендодателю. В конце концов, последний согласился перезаключить договор.',
                },
                {
                  type: 'paragraph',
                  text: 'Но за это время законодательство изменилось – была введена новая процедура перезаключения договора. Она нуждалась в определенных условиях, которые наш клиент объективно не мог выполнить.',
                },
                {
                  type: 'paragraph',
                  text: 'По этим причинам арендодатель отказался перезаключить договор аренды, а наш клиент был вынужден обратиться в суд.',
                },
              ],
            },
            {
              title: 'Что сделали адвокаты Blobal Barristers для клиента',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'Мы подготовили и подали исковое заявление, а также представляли интересы клиента в суде первой инстанции:',
                },
                {
                  type: 'list',
                  items: [
                    'сформировали и обосновать собственную правовую позицию относительно различий между перезаключением договора, продлением срока его действия и заключением нового договора;',
                    'доказали, что наш клиент вовремя и в соответствии с предыдущим законодательством инициировал перезаключение договора – и имел право перезаключить его на тех же условиях;',
                    'обосновали целесообразность применения нового арендного законодательства в части прав клиента на перезаключение договора, но с учетом положений старого законодательства об условиях перезаключения.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Нашей целью было признать договор перезаключенным на предыдущих условиях.',
                },
              ],
            },
            {
              title: 'Что решил суд',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'Хозяйственный суд прислушался к нашим аргументам, удовлетворил иск и признал договор аренды ЦМК перезаключенным. Несмотря на изменение арендного законодательства, наш клиент смог юридически оформить использование ЦМК на предыдущих условиях.',
                },
                {
                  type: 'paragraph',
                  text: 'Дело сопровождал адвокат, руководитель практики разрешения споров Иван Иванович.',
                },
              ],
            },
          ],
          articleLink:
            'bitva-dvoh-zakoniv-yak-bezbolisno-pereuklasti-dogovir-orendi-derzhmajna-pri-zmini-zakonodavstva',
        },
        {
          mainBlock: {
            title: 'Как защитить право ребенка на пользование жильем, если закон не на вашей стороне',
            content: [
              {
                type: 'paragraph',
                text: 'Довольно часто юридические проблемы «взрослого мира» затрагивают интересы детей. Так вышло и в этом случае. К нам обратилась женщина с просьбой защитить право ее малолетнего сына на пользование жильем, оставшимся после смерти отца ребенка. Довольно часто юридические проблемы «взрослого мира» затрагивают интересы детей. Так вышло и в этом случае. К нам обратилась женщина с просьбой защитить право ее малолетнего сына на пользование жильем, оставшимся после смерти отца ребенка.',
              },
            ],
          },
          blocks: [
            {
              title: 'Почему возник конфликт',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'В 2013 году отец ребенка получил по ордеру социальное жилье. Семья вселилась в квартиру вместе, но место жительства по этому адресу зарегистрировал только мужчина. Его жена и маленький сын проживали в квартире без регистрации. Впоследствии супруги развелись. Женщина с ребенком переехали в другую квартиру. В 2013 году отец ребенка получил по ордеру социальное жилье. Семья вселилась в квартиру вместе, но место жительства по этому адресу зарегистрировал только мужчина. Его жена и маленький сын проживали в квартире без регистрации. Впоследствии супруги развелись. Женщина с ребенком переехали в другую квартиру.',
                },
                {
                  type: 'paragraph',
                  text: 'В 2019 году мужчина скончался. Как оказалось, жилье он не приватизировал, потому социальная квартира осталась без пользователя. Тогда бывшая супруга умершего решила признать за их малолетним сыном право пользования этим жильем. У них ведь с ребенком нет другого жилья. Поэтому женщина хотела в интересах сына сменить нанимателя соцжилья – с умершего мужчины на себя.',
                },
                {
                  type: 'paragraph',
                  text: 'Да власти города оказались против. В соответствующем районном совете отметили, что ордер на квартиру выдавался исключительно мужчине, а не его членам семьи. Ни бывшая жена, ни сын не имеют права на пользование социальным жильем.',
                },
                {
                  type: 'paragraph',
                  text: 'Кроме того, из-за развода супругов в последние годы ребенок вообще не проживал в этом жилье. Поэтому наши оппоненты считали, что бывшую жену и сына умершего нельзя считать членами семьи нанимателя. Мы не согласились и начали готовить иск в суд.',
                },
              ],
            },
            {
              title: 'Что сделали адвокаты Blobal Barristers для клиента',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'При подготовке иска мы столкнулись с двумя сложностями:',
                },
                {
                  type: 'list',
                  items: [
                    'неоднозначное правовое регулирование – как оказалось, нет прямой нормы закона, предусматривающей право ребенка на пользование жильем в аналогичной ситуации;',
                    'спорная практика Верховного Суда Украины – по подобным спорам ВСУ принимает разные решения.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Мы отстаивали следующую позицию:',
                },
                {
                  type: 'list',
                  items: [
                    'определяющим по этому делу должно быть обеспечение наилучших интересов ребенка – ни один ребенок не может быть произвольно лишен права на жилье, закон должен защищать его интересы в том числе от государственных органов;',
                    'малолетний ребенок в силу возраста не может самостоятельно выбирать место жительства – факт его непроживания в спорном жилье не является основанием для лишения права пользования квартирой;',
                    'по нормам ЖК УССР члены семьи нанимателя, вселившиеся в жилье, приобретают такие же права пользования как и сам наниматель;',
                    'в случае смерти нанимателя его совершеннолетний член семьи может потребовать признания себя нанимателем вместо него – в нашем случае этого требует законный представитель члена семьи;',
                    'право на жилье является конституционным правом человека, поэтому лишение этого права возможно только на основании закона. Такое лишение должно иметь легитимную цель и соответствовать принципу пропорциональности вмешательства.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Несмотря на то, что мы всесторонне обосновали свою позицию – суд первой инстанции отказал нам в удовлетворении иска. Поэтому мы продолжили свое дело в апелляции.',
                },
              ],
            },
            {
              title: 'Что решил суд',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'Суд апелляционной инстанции поддержал нашу позицию. Апелляция отменила решение местного суда и удовлетворила наш иск в полном объеме: признала право пользования жильем за сыном нашей клиентки.',
                },
                {
                  type: 'paragraph',
                  text: 'Оппоненты подали кассационную жалобу, но суд ее не принял. Поэтому решение апелляционного суда вступило в законную силу.',
                },
                {
                  type: 'paragraph',
                  text: 'Дело сопровождал адвокат Егор Егорович.',
                },
              ],
            },
          ],
          articleLink: 'yak-zahistiti-pravo-ditini-na-koristuvannya-zhitlom-yakshho-zakon-ne-na-vashomu-boczi',
        },
        {
          mainBlock: {
            title: 'Спор из Минобороны: как избежать штрафных санкций в 2,5 млн грн по договору строительного подряда',
            content: [
              {
                type: 'paragraph',
                text: 'Наш клиент – строительная компания, получила иск от Минобороны в связи с претензиями относительно сроков выполнения работ по строительству казармы.',
              },
              {
                type: 'paragraph',
                text: 'Клиент получил аванс и начал работу, но несколько задержал их выполнение. Раньше заказчик с этим соглашался – в ходе выполнения договора сроки работ неоднократно продлевались. Но в конечном счете Минобороны решило расторгнуть договор в одностороннем порядке и отказалось подписывать акты приемки выполненных работ. Соответственно заказчик признавал не весь объем фактически проделанной работы.',
              },
              {
                type: 'paragraph',
                text: 'В связи с расторжением договора Минобороны обратилось с иском о возвращении аванса и взыскании штрафных санкций – они были начислены с учетом того объема работ, который был признан Минобороны. Такие требования нашему клиенту казались неправомерными. А ведь работы были выполнены в большем объеме – все это было подтверждено документально. Мы начали готовиться к судебным заседаниям.',
              },
            ],
          },
          blocks: [
            {
              title: 'Почему возник конфликт',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'Главным образом Минобороны обосновало свои требования тем, что подрядчик просрочил выполнение работ. Истец также отмечал, что факт расторжения договора в связи с нарушением сроков – это достаточное основание для взыскания штрафных санкций и уплаченного аванса.',
                },
                {
                  type: 'paragraph',
                  text: 'При этом часть работ наш клиент выполнил, но истец на это не обращал внимания.',
                },
                {
                  type: 'paragraph',
                  text: 'Кроме того, Минобороны настаивало на отсутствии отчетов об использовании средств аванса. Однако ни условиями договора, ни какими-либо нормативными положениями не предусмотрена обязанность предоставления соответствующих отчетов. Также не было установлено никаких требований относительно формы и содержания таких отчетов.',
                },
              ],
            },
            {
              title: 'Что сделали адвокаты Blobal Barristers для клиента',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'В первую очередь, мы доказали безосновательность исковых требований Минобороны. Истец ссылался объем невыполненных работ, но подтвердить этот объем смог. В то же время мы предоставили доказательства, опровергаемые доводами Минобороны.',
                },
                {
                  type: 'paragraph',
                  text: 'В подтверждение своей позиции мы заказали судебную строительно-техническую экспертизу. В заключении эксперт подтвердил, что фактически выполненные строительные работы и использованные материалы соответствуют актам выполненных работ, которые наш клиент предоставил Минобороны. Таким образом, эксперт подтвердил выполнение работ на 6,2 млн. грн.',
                },
                {
                  type: 'paragraph',
                  text: 'Кроме того, установила, что наш клиент провел дополнительные работы. Именно они привели к увеличению сроков строительства в целом. Задержание произошло за счет фактически выполненных работ.',
                },
              ],
            },
            {
              title: 'Что решил суд',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'Чтобы лучше оценить доводы сторон, суд первой инстанции назначил еще одну судебную экспертизу. Однако истец уклонился от его проведения. Поэтому в деле фигурировала только наша экспертиза, и наша позиция была более защищена.',
                },
                {
                  type: 'paragraph',
                  text: 'Истец не предоставил никаких доказательств в подтверждение своей позиции, поэтому суд отказал в удовлетворении иска. Дело прошло апелляционную и кассационную инстанции, но решение в нашу пользу осталось в силе.',
                },
                {
                  type: 'paragraph',
                  text: 'Дело сопровождал адвокат Богдан Богданович.',
                },
              ],
            },
          ],
          articleLink: 'spir-z-minoboroni-yak-uniknuti-shtrafnih-sankczij-u-25-mln-grn-za-dogovorom-budivelno-pidryadu',
        },
      ]
      break
    case 'en':
      articlesHeading = 'Projects'
      articlesCommonText = 'Our performance determines customer choice and trust'
      articlesButton = 'All projects'
      articles = [
        {
          mainBlock: {
            title:
              'The battle of two laws: how to painlessly renegotiate the lease of state property when changing legislation',
            content: [
              {
                type: 'paragraph',
                text: 'Our client has been renting an integral property complex (hereinafter - CMC) for several years. When the contract expired, he applied to the landlord to extend the lease. ',
              },
              {
                type: 'paragraph',
                text: 'But the latter refused him. The landlord argued that he was going to use the CMC on his own. But when the lease expired, the landlord did not take any action to return the property from the lease. ',
              },
              {
                type: 'paragraph',
                text: 'Under the law in force at the time, our client had the right to renegotiate a lease without an auction on the basis of tacit consent. So he just kept using the CMC and paying the rent. Nobody objected to that. ',
              },
            ],
          },
          blocks: [
            {
              title: 'Why the conflict arose',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'Despite the actual extension of the lease, our client still wanted to eliminate legal uncertainty and formally renegotiate the contract. He sent applications to the landlord again and again. In the end, the latter agreed to renegotiate the contract. ',
                },
                {
                  type: 'paragraph',
                  text: 'But during this time the legislation has changed - a new procedure for renegotiating the contract has been introduced. It required certain conditions that our client could not objectively fulfill. ',
                },
                {
                  type: 'paragraph',
                  text: 'For these reasons, the landlord refused to renegotiate the lease, and our client was forced to go to court.',
                },
              ],
            },
            {
              title: 'What Blobal Barristers Lawyers Have Done for the Client',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'We have prepared and filed a statement of claim, as well as represented the interests of the client in the court of first instance:',
                },
                {
                  type: 'list',
                  items: [
                    'formed and substantiate their own legal position on the differences between the renegotiation of the contract, the extension of its validity and the conclusion of a new contract;',
                    'proved that our client in time and in accordance with previous legislation initiated the renegotiation of the contract - and had the right to renegotiate it on the same terms;',
                    "substantiate the expediency of applying the new lease legislation in terms of the client's rights to renegotiate the contract, but taking into account the provisions of the old legislation on the terms of renegotiation.",
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Our aim was to recognize the agreement as renegotiated on the previous terms.',
                },
              ],
            },
            {
              title: 'What the court decided',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'The Commercial Court listened to our arguments, upheld the claim and found the CMC lease agreement renegotiated. Despite the change in the lease law, our client was able to legally register the use of the CMC on preconditions. ',
                },
                {
                  type: 'paragraph',
                  text: 'The case was accompanied by a lawyer, head of dispute resolution practice Ivan Ivanovich.',
                },
              ],
            },
          ],
          articleLink:
            'bitva-dvoh-zakoniv-yak-bezbolisno-pereuklasti-dogovir-orendi-derzhmajna-pri-zmini-zakonodavstva',
        },
        {
          mainBlock: {
            title: "How to protect the child's right to use housing if the law is not on your side",
            content: [
              {
                type: 'paragraph',
                text: "Quite often the legal problems of the' adult world 'affect the interests of children. So it happened in this case. We were approached by a woman with a request to protect the right of her young son to use the housing left after the death of the child's father. Quite often the legal problems of the 'adult world' affect the interests of children. So it happened in this case. We were approached by a woman with a request to protect the right of her young son to use the housing left after the death of the child's father. ",
              },
            ],
          },
          blocks: [
            {
              title: 'Why the conflict arose',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: "In 2013, the child's father received social housing on a warrant. The family moved into the apartment together, but only the husband registered the place of residence at this address. His wife and young son lived in the apartment without registration. The couple later divorced. The woman and the child moved to another apartment. In 2013, the child's father received social housing on a warrant. The family moved into the apartment together, but only the husband registered the place of residence at this address. His wife and young son lived in the apartment without registration. The couple later divorced. A woman with a child moved to another apartment. ",
                },
                {
                  type: 'paragraph',
                  text: "In 2019, the man died. As it turned out, he did not privatize housing, so the social apartment was left without a user. Then the ex-wife of the deceased decided to recognize their young son's right to use this housing. After all, they have no other home with the child. Therefore the woman wanted in the interests of the son to change the tenant of social housing - from the dead man on herself.",
                },
                {
                  type: 'paragraph',
                  text: 'But the city authorities were against. The relevant district council noted that the warrant for the apartment was issued exclusively to the husband and not to his family members. Neither the ex-wife nor the son has the right to use social housing. ',
                },
                {
                  type: 'paragraph',
                  text: "In addition, due to the divorce, the child has not lived in this home in recent years. Therefore, our opponents believed that the deceased's ex-wife and son could not be considered members of the employer's family. We disagreed and started preparing a lawsuit. ",
                },
              ],
            },
            {
              title: 'What Blobal Barristers Lawyers Have Done for the Client',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'In preparing the lawsuit, we encountered two difficulties:',
                },
                {
                  type: 'list',
                  items: [
                    'ambiguous legal regulation - as it turned out, there is no direct rule of law that would provide for the right of the child to use housing in a similar situation;',
                    'the controversial practice of the Supreme Court of Ukraine - the Supreme Court of Ukraine makes various decisions on such disputes.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'We defended the following position:',
                },
                {
                  type: 'list',
                  items: [
                    'In this case, the best interests of the child must be decisive - no child may be arbitrarily deprived of the right to housing, the law must protect its interests, including from public authorities;',
                    'due to age, a minor child cannot independently choose a place of residence - the fact that he / she does not live in the disputed housing is not a ground for deprivation of the right to use the apartment;',
                    "According to the norms of the Housing Code of the Ukrainian SSR, members of the tenant's family who have moved into the dwelling acquire the same rights of use as the tenant himself;",
                    'in the event of the death of the employer, his adult family member may demand to be recognized as the employer instead of him - in our case, this is required by the legal representative of the family member;',
                    'The right to housing is a constitutional human right, so deprivation of this right is possible only on the basis of law. Such deprivation must have a legitimate aim and comply with the principle of proportionality of the intervention. ',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Despite the fact that we have fully substantiated our position - the court of first instance denied us a claim. So we continued our case on appeal. ',
                },
              ],
            },
            {
              title: 'What the court decided',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'The appellate court upheld our position. The appeal overturned the decision of the local court and satisfied our claim in full: recognized the right to use housing for the son of our client. ',
                },
                {
                  type: 'paragraph',
                  text: 'Opponents filed a cassation appeal, but the court did not accept it. Therefore, the decision of the Court of Appeal came into force. ',
                },
                {
                  type: 'paragraph',
                  text: 'The case was accompanied by lawyer Yegor Yegorovich.',
                },
              ],
            },
          ],
          articleLink: 'yak-zahistiti-pravo-ditini-na-koristuvannya-zhitlom-yakshho-zakon-ne-na-vashomu-boczi',
        },
        {
          mainBlock: {
            title:
              'Dispute with the Ministry of Defense: how to avoid fines of UAH 2.5 million under a construction contract',
            content: [
              {
                type: 'paragraph',
                text: 'Our client is a construction company that has received a lawsuit from the Ministry of Defense in connection with claims regarding the deadlines for the construction of the barracks.',
              },
              {
                type: 'paragraph',
                text: 'The client received an advance and started work, but delayed their implementation. Earlier the customer agreed with it - in the course of performance of the contract terms of works were repeatedly extended. But in the end, the Ministry of Defense decided to terminate the contract unilaterally and refused to sign the acceptance certificates. Accordingly, the customer did not recognize the entire amount of work actually performed. ',
              },
              {
                type: 'paragraph',
                text: 'In connection with the termination of the contract, the Ministry of Defense filed a lawsuit to return the advance and impose penalties - they were calculated based on the amount of work that was recognized by the Ministry of Defense. Such requirements to our client seemed illegal. After all, the work was done to a greater extent - all this was documented. So we started preparing for the court hearings. ',
              },
            ],
          },
          blocks: [
            {
              title: 'Why the conflict arose',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'Mainly the Ministry of Defense justified its claims by the fact that the contractor delayed the work. The plaintiff also emphasized that the fact of termination of the contract due to breach of time is a sufficient basis for the imposition of penalties and advance payments. ',
                },
                {
                  type: 'paragraph',
                  text: 'Our client performed part of the work, but the plaintiff did not pay attention to it.',
                },
                {
                  type: 'paragraph',
                  text: 'In addition, the Ministry of Defense insisted on the lack of reports on the use of advance funds. However, neither the terms of the contract nor any regulations provide for the obligation to provide relevant reports. No requirements were set for the form and content of such reports. ',
                },
              ],
            },
            {
              title: 'What Blobal Barristers Lawyers Have Done for the Client',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'First of all, we proved the groundlessness of the claims of the Ministry of Defense. The plaintiff referred to the amount of unfinished work, but could not confirm this amount. At the same time, we provided evidence that refuted the arguments of the Ministry of Defense. ',
                },
                {
                  type: 'paragraph',
                  text: 'To confirm our position, we ordered a forensic construction and technical examination. In his opinion, the expert confirmed that the actual construction work and materials used correspond to the acts of work performed, which our client provided to the Ministry of Defense. Thus, the expert confirmed the execution of works for UAH 6.2 million. ',
                },
                {
                  type: 'paragraph',
                  text: 'I also found that our client did additional work. They led to an increase in construction time in general. The detention took place due to the work actually performed. ',
                },
              ],
            },
            {
              title: 'What the court decided',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'In order to better assess the arguments of the parties, the court of first instance appointed another forensic examination. However, the plaintiff evaded it. Therefore, only our expertise was involved in the case, so our position was more protected. ',
                },
                {
                  type: 'paragraph',
                  text: 'The plaintiff did not provide any evidence to support his position, so the court denied the claim. The case passed the appellate and cassation instances, but the decision in our favor remained in force. ',
                },
                {
                  type: 'paragraph',
                  text: 'The case was accompanied by lawyer Bogdan Bogdanovich.',
                },
              ],
            },
          ],
          articleLink:
            'spir-z-minoboroni-yak-uniknuti-shtrafnih-sankczij-u-25-mln-grn-za-dogovorom-budivelnogo-pidryadu',
        },
      ]
      break
    default:
      articlesHeading = 'Проекти'
      articlesCommonText = 'Наша результативність визначає вибір і довіру клієнтів'
      articlesButton = 'Усі проекти'
      articles = [
        {
          mainBlock: {
            title: 'Битва двох законів: як безболісно переукласти договір оренди держмайна при зміні законодавства',
            content: [
              {
                type: 'paragraph',
                text: 'Наш клієнт декілька років орендував цілісний майновий комплекс (далі – ЦМК). Коли строк дії договору добігав кінця, він звернувся до орендодавця із заявою про продовження оренди.',
              },
              {
                type: 'paragraph',
                text: 'Але останній йому відмовив. Орендодавець аргументував свою позицію тим, що збирається самостійно використовувати ЦМК. Та коли строк оренди закінчився, орендодавець не вчинив жодних дій, щоб повернути майно з оренди.',
              },
              {
                type: 'paragraph',
                text: 'За законодавством, що діяло на той момент, наш клієнт мав право переукласти договір оренди без аукціону за принципом мовчазної згоди. Тож він просто продовжував користуватися ЦМК та сплачувати орендні платежі. Ніхто проти цього не заперечував.',
              },
            ],
          },
          blocks: [
            {
              title: 'Чому виник конфлікт',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'Незважаючи на фактичне продовження оренди, наш клієнт все ж хотів усунути правову невизначеність та офіційно переукласти договір. Він знов і знов направляв заяви орендодавцю. Врешті-решт останній погодився переукласти договір.',
                },
                {
                  type: 'paragraph',
                  text: 'Та за цей час законодавство змінилося – була запроваджена нова процедура переукладання договору. Вона потребувала певних умов, які наш клієнт об’єктивно не міг виконати.',
                },
                {
                  type: 'paragraph',
                  text: 'З цих причин орендодавець відмовився переукласти договір оренди, а наш клієнт був змушений звернутися до суду.',
                },
              ],
            },
            {
              title: 'Що зробили адвокати Blobal Barristers для клієнта',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'Ми підготували та подали позовну заяву, а також представляли інтереси клієнта в суді першої інстанції:',
                },
                {
                  type: 'list',
                  items: [
                    'сформували та обґрунтувати власну правову позицію щодо відмінностей між переукладенням договору, продовженням строку його дії  та укладенням нового договору;',
                    'довели, що наш клієнт вчасно і відповідно до попереднього законодавства ініціював переукладення договору – і мав право переукласти його на тих самих умовах;',
                    'обґрунтували доцільність застосування нового орендного законодавства в частині прав клієнта на переукладення договору, але з урахуванням положень старого законодавства щодо умов переукладення.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Нашою метою було визнати договір переукладеним на попередніх умовах.',
                },
              ],
            },
            {
              title: 'Що вирішив суд',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'Господарський суд дослухався до наших аргументів, задовольнив позов та визнав договір оренди ЦМК переукладеним. Незважаючи на зміну орендного законодавства, наш клієнт зміг юридично оформити користування ЦМК на попередніх умовах.',
                },
                {
                  type: 'paragraph',
                  text: 'Справу супроводжував адвокат, керівник практики вирішення спорів Іван Іванович.',
                },
              ],
            },
          ],
          articleLink:
            'bitva-dvoh-zakoniv-yak-bezbolisno-pereuklasti-dogovir-orendi-derzhmajna-pri-zmini-zakonodavstva',
        },
        {
          mainBlock: {
            title: 'Як захистити право дитини на користування житлом, якщо закон не на вашому боці',
            content: [
              {
                type: 'paragraph',
                text: 'Досить часто юридичні проблеми «дорослого світу» зачіпають інтереси дітей. Так сталося і в цьому випадку. До нас звернулася жінка з проханням захистити право її малолітнього сина на користування житлом, яке залишилося після смерті батька дитини.Досить часто юридичні проблеми «дорослого світу» зачіпають інтереси дітей. Так сталося і в цьому випадку. До нас звернулася жінка з проханням захистити право її малолітнього сина на користування житлом, яке залишилося після смерті батька дитини.',
              },
            ],
          },
          blocks: [
            {
              title: 'Чому виник конфлікт',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'В 2013 році батько дитини отримав за ордером соціальне житло. Родина вселилася у квартиру разом, але місце проживання за цією адресою зареєстрував лише чоловік. Його дружина та малолітній син проживали в квартирі без реєстрації. Згодом подружжя розлучилось. Жінка з дитиною переїхали в іншу квартиру.В 2013 році батько дитини отримав за ордером соціальне житло. Родина вселилася у квартиру разом, але місце проживання за цією адресою зареєстрував лише чоловік. Його дружина та малолітній син проживали в квартирі без реєстрації. Згодом подружжя розлучилось. Жінка з дитиною переїхали в іншу квартиру.',
                },
                {
                  type: 'paragraph',
                  text: 'В 2019 році чоловік помер. Як виявилося, житло він не приватизував, тому соціальна квартира лишилась без користувача. Тоді колишня дружина померлого вирішила визнати за їх малолітнім сином право користування на це житло. Адже у них з дитиною немає іншого житла. Тому жінка хотіла в інтересах сина змінити наймача соцжитла – з померлого чоловіка на себе.',
                },
                {
                  type: 'paragraph',
                  text: 'Та влада міста виявилась проти. У відповідній районній раді зазначили, що ордер на квартиру видавався виключно чоловіку, а не його членам родини. Ані колишня дружина, ані син не мають права на користування соціальним житлом.',
                },
                {
                  type: 'paragraph',
                  text: 'Крім того, через розлучення подружжя останні роки дитина взагалі не проживала в цьому житлі. Тому наші опоненти вважали, що колишню дружину та сина померлого не можна вважати членами сім’ї наймача. Ми не погодились та почали готувати позов до суду.',
                },
              ],
            },
            {
              title: 'Що зробили адвокати Blobal Barristers для клієнта',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'При підготовці позову ми зіштовхнулися з двома складностями:',
                },
                {
                  type: 'list',
                  items: [
                    'неоднозначне правове регулювання – як виявилось, немає прямої норми закону, яка б передбачала право дитини на користування житлом в аналогічній ситуації;',
                    'спірна практика Верховного Суду України – щодо подібних спорів ВСУ приймає різні рішення.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Ми відстоювали наступну позицію:',
                },
                {
                  type: 'list',
                  items: [
                    'визначальним у цій справі має бути забезпечення найкращих інтересів дитини – жодна дитина не може бути свавільно позбавлена права на житло, закон має захищати її інтереси в тому числі від державних органів;',
                    'малолітня дитина в силу віку не може самостійно обирати місце проживання – факт її непроживання у спірному житлі не є підставою для позбавлення права користування квартирою;',
                    'за нормами ЖК УРСР члени сім’ї наймача, що вселилися в житло, набувають таких самих прав користування як і сам наймач;',
                    'в разі смерті наймача його повнолітній член сім’ї може вимагати визнання себе наймачем замість нього – в нашому випадку цього вимагає законний представник члена сім’ї;',
                    'право на житло є конституційним правом людини, тому позбавлення цього права можливо лише на підставі закону. Таке позбавлення повинно мати легітимну мету та відповідати принципу пропорційності втручання.',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Незважаючи на те, що ми всебічно обґрунтували свою позицію – суд першої інстанції відмовив нам у задоволенні позову. Тож ми продовжили свою справу в апеляції.',
                },
              ],
            },
            {
              title: 'Що вирішив суд',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'Суд апеляційної інстанції підтримав нашу позицію. Апеляція скасувала рішення місцевого суду та задовольнила наш позов у повному обсязі: визнала право користування житлом за сином нашої клієнтки.',
                },
                {
                  type: 'paragraph',
                  text: 'Опоненти подали касаційну скаргу, але суд її не прийняв. Тож рішення апеляційного суду вступило в законну силу.',
                },
                {
                  type: 'paragraph',
                  text: 'Справу супроводжував адвокат Єгор Єгорович.',
                },
              ],
            },
          ],
          articleLink: 'yak-zahistiti-pravo-ditini-na-koristuvannya-zhitlom-yakshho-zakon-ne-na-vashomu-boczi',
        },
        {
          mainBlock: {
            title: 'Спір з Міноборони: як уникнути штрафних санкцій у 2,5 млн грн за договором будівельного підряду',
            content: [
              {
                type: 'paragraph',
                text: 'Наш клієнт – будівельна компанія, отримала позов від Міноборони у зв’язку з претензіями щодо строків виконання робіт з будівництва казарми.',
              },
              {
                type: 'paragraph',
                text: 'Клієнт отримав аванс та розпочав роботи, але дещо затримав їх виконання. Раніше замовник з цим погоджувався – в ході виконання договору строки робіт неодноразово продовжувалися. Але в кінцевому підсумку Міноборони вирішило розірвати договір в односторонньому порядку та відмовилося підписувати акти приймання виконаних робіт. Відповідно замовник визнавав не весь обсяг фактично виконаної роботи.',
              },
              {
                type: 'paragraph',
                text: 'У зв’язку з розірванням договору Міноборони звернулося з позовом про повернення авансу та стягнення штрафних санкцій – вони були нараховані з огляду на той обсяг робіт, який був визнаний Міноборони. Такі вимоги нашому клієнту видалися неправомірними. Адже роботи були виконані в більшому обсязі – все це було підтверджено документально. Тож ми почали готуватися до судових засідань.',
              },
            ],
          },
          blocks: [
            {
              title: 'Чому виник конфлікт',
              blockId: 'why-conflict',
              content: [
                {
                  type: 'paragraph',
                  text: 'Головним чином Міноборони обґрунтувало свої вимоги тим, що підрядник прострочив виконання робіт. Позивач також наголошував, що факт розірвання договору у зв’язку з порушенням строків – це достатня підстава для стягнення штрафних санкцій та сплаченого авансу.',
                },
                {
                  type: 'paragraph',
                  text: 'При цьому частину робіт наш клієнт виконав, але позивач на це не зважав.',
                },
                {
                  type: 'paragraph',
                  text: 'Крім того, Міноборони наполягало на відсутності звітів про використання коштів авансу. Проте ані умовами договору, ані будь-якими нормативними положеннями не передбачено обов’язок надання відповідних звітів. Також не було встановлено жодних вимог щодо форми та змісту таких звітів.',
                },
              ],
            },
            {
              title: 'Що зробили адвокати Blobal Barristers для клієнта',
              blockId: 'what-lawyers-did',
              content: [
                {
                  type: 'paragraph',
                  text: 'Насамперед ми довели безпідставність позовних вимог Міноборони. Позивач посилався на обсяг невиконаних робіт, але підтвердити цей обсяг не зміг. В той же час ми надали докази, які спростовували доводи Міноборони.',
                },
                {
                  type: 'paragraph',
                  text: 'На підтвердження своєї позиції ми замовили судову будівельно-технічну експертизу. У своєму висновку експерт підтвердив, що фактично виконані будівельні роботи та використані матеріали відповідають актам виконаних робіт, які наш клієнт надав Міноборони. Таким чином, експерт підтвердив виконання робіт на 6,2 млн грн.',
                },
                {
                  type: 'paragraph',
                  text: 'Крім того, встановила, що наш клієнт провів додаткові роботи. Саме вони призвели до збільшення строків будівництва в цілому. Затримання відбулося за рахунок фактично виконаних робіт.',
                },
              ],
            },
            {
              title: 'Що вирішив суд',
              blockId: 'court-decision',
              content: [
                {
                  type: 'paragraph',
                  text: 'Щоб краще оцінити доводи сторін, суд першої інстанції призначив ще одну судову експертизу. Проте позивач ухилився від її проведення. Тому у справі фігурувала тільки наша експертиза, тож і наша позиція була більш захищена.',
                },
                {
                  type: 'paragraph',
                  text: 'Позивач не надав жодних доказів на підтвердження своєї позиції, тому суд відмовив у задоволенні позову. Справа пройшла апеляційну та касаційну інстанції, але рішення на нашу користь залишилось в силі.',
                },
                {
                  type: 'paragraph',
                  text: 'Справу супроводжував адвокат Богдан Богданович.',
                },
              ],
            },
          ],
          articleLink:
            'spir-z-minoboroni-yak-uniknuti-shtrafnih-sankczij-u-25-mln-grn-za-dogovorom-budivelnogo-pidryadu',
        },
      ]
      break
  }
  return { articlesHeading, articlesCommonText, articlesButton, articles }
}
