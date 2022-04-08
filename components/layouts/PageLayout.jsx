import { useEffect, useState, useMemo } from 'react'
import { Header, Footer, ModalForm } from '../common'
import { getCommonTranslations } from '../../translations/common/common'

export function PageLayout({ children, lang = 'uk', title = '', currentPage = '' }) {
  const [modalIsOpen, setModalIsOpen] = useState({ status: false, source: '', lawyer: '' })
  const { modalConsultationText, modalSupervisorText } = useMemo(() => getCommonTranslations(lang), [lang])

  const toggleModalForm = (e, source, lawyer = '') => {
    e.preventDefault
    const targetClass = e.target.className
    if (
      targetClass.includes('modal__overlay') ||
      targetClass.includes('consult-btn') ||
      targetClass.includes('modal__close-line') ||
      targetClass.includes('supervisor__button') ||
      targetClass.includes('modal__close')
    ) {
      setModalIsOpen(prev =>
        prev.status ? { status: false, source: '', lawyer: '' } : { status: true, source, lawyer },
      )
      document.body.classList.toggle('overflovHidden')
    }
  }
  useEffect(() => {
    document.body.classList = ''
  }, [])
  return (
    <>
      <Header
        key='headerKey'
        lang={lang}
        title={title}
        currentPage={currentPage}
        modalIsOpen={modalIsOpen}
        toggleModalForm={toggleModalForm}
        modalConsultationText={modalConsultationText}
      />
      <main key='mainKey'>{children}</main>
      <Footer key='footerKey' lang={lang} toggleModalForm={toggleModalForm} modalSupervisorText={modalSupervisorText} />
      {modalIsOpen.status && (
        <ModalForm
          key='ModalFormKey'
          lang={lang}
          toggleModalForm={toggleModalForm}
          source={modalIsOpen.source}
          lawyer={modalIsOpen.lawyer}
        />
      )}
    </>
  )
}
