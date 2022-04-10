import { cloneElement, useEffect, useState, useMemo, createContext } from 'react'
import { Header, Footer, ModalForm } from '../common'
import { getCommonTranslations } from '../../translations/common/common'
import { Fragment } from 'react/cjs/react.production.min'

export function PageLayout({ children, lang = 'uk', title = '', currentPage = '' }) {
  const [modalFormState, setModalFormState] = useState({ isOpen: false, source: '', lawyer: '' })
  const { requestConsultationText, writeToSupervisorText } = useMemo(() => getCommonTranslations(lang), [lang])
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
      setModalFormState(prev =>
        prev.isOpen ? { isOpen: false, source: '', lawyer: '' } : { isOpen: true, source, lawyer },
      )
      document.body.classList.toggle('overflovHidden')
    }
  }
  useEffect(() => {
    document.body.classList = ''
  }, [])

  let childrenWithCustomProps
  let isAsideLayout = false
  // console.log('length', children.length)
  // if (children.type && children.type.name === 'AsideLayout') {
  if (!children.length) {
    // когда один ребенок значит AsideLayout
    isAsideLayout = true
    const asideLayout = children.props.children
    const asideLayoutProps = children.props.children.props
    childrenWithCustomProps = cloneElement(children, {
      children: { ...asideLayout, props: { ...asideLayoutProps, toggleModalForm } },
    })
  }
  return (
    <>
      <Header
        key='headerKey'
        lang={lang}
        title={title}
        currentPage={currentPage}
        modalFormState={modalFormState}
        toggleModalForm={toggleModalForm}
        requestConsultationText={requestConsultationText}
      />
      <main>
        {isAsideLayout && childrenWithCustomProps} {!isAsideLayout && children}
      </main>
      <Footer
        key='footerKey'
        lang={lang}
        toggleModalForm={toggleModalForm}
        writeToSupervisorText={writeToSupervisorText}
      />
      {modalFormState.isOpen && (
        <ModalForm
          key='ModalFormKey'
          lang={lang}
          toggleModalForm={toggleModalForm}
          source={modalFormState.source}
          lawyer={modalFormState.lawyer}
        />
      )}
    </>
  )
}
