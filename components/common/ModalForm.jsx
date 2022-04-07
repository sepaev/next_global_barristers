// import Image from 'next/image'
import { useRef } from 'react'
import { useMemo, useState } from 'react'
import { getTranslations } from '../../translations/common/modalForm'
// import successImg from '../../images/svg/success.svg'

export function ModalForm({ lang, toggleModalForm, eMailInput, title }) {
  const { clientName, clientPhone, clientMail, clientMessage, buttonText } = useMemo(
    () => getTranslations(lang),
    [lang],
  )
  const [stateName, setStateName] = useState('')
  const [statePhone, setStatePhone] = useState('')
  const [stateMail, setStateMail] = useState('')
  const [stateMessage, setStateMessage] = useState('')

  const modalOverlayRef = useRef(null)

  function inputChange({ target }, inputName) {
    if (inputName === 'name') setStateName(target.value)
    if (inputName === 'phone') setStatePhone(target.value)
    if (inputName === 'mail') setStateMail(target.value)
    if (inputName === 'message') setStateMessage(target.value)
  }
  return (
    <div className='modal__overlay' onClick={toggleModalForm}>
      <div className='modal__container'>
        <div className='modal__close'>
          <span className='modal__close-line'></span>
          <span className='modal__close-line'></span>
        </div>

        <h2 className='modal__title'>{title}</h2>

        <div className='modal-form'>
          <label className='modal-form__name-label modal-form__label'>
            <span className='modal-form__label-req'>*</span>
            {clientName}
            <input
              type='text'
              name='full-name'
              value={stateName}
              size='40'
              className='modal-form__input name'
              onChange={e => inputChange(e, 'name')}
              aria-required='true'
            />
          </label>
          <label className='modal-form__phone-label modal-form__label'>
            <span className='modal-form__label-req'>*</span>
            {clientPhone}
            <input
              type='tel'
              name='tel'
              value={statePhone}
              size='40'
              className='modal-form__input phone'
              onChange={e => inputChange(e, 'phone')}
              aria-required='true'
            />
          </label>
          {eMailInput && (
            <label className='modal-form__email-label modal-form__label'>
              <span className='modal-form__label-req'>*</span>
              {clientMail}
              <input
                type='email'
                name='email'
                value={stateMail}
                size='40'
                className='modal-form__input email'
                onChange={e => inputChange(e, 'mail')}
                aria-required='true'
              />
            </label>
          )}
          <label className='modal-form__message-label modal-form__label'>
            {clientMessage}
            <textarea
              name='message'
              cols='40'
              value={stateMessage}
              rows='10'
              className='modal-form__textarea message'
              onChange={e => inputChange(e, 'message')}
            />
          </label>
          <div className='sbm-wrapper'>
            <input type='submit' value={buttonText} className='modal-form__submit' />
          </div>
        </div>
      </div>
      {/* <div className='thx-wrapper'>
        <div className='close-contact-form '></div>
        <Image alt='Success' src={successImg.src} width='61px' height='79px' />
        <h2>Ваш запрос успешно отправлен</h2>
        <p>Ожидайте. Мы свяжемся с Вами.</p>
      </div> */}
    </div>
  )
}
