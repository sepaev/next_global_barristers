import Image from 'next/image'
import { useMemo, useState } from 'react'
import { getTranslations } from '../../translations/common/modalForm'
import { getCommonTranslations } from '../../translations/common/common'
import Notiflix from 'notiflix'
import successImg from '../../images/svg/success.svg'
import InputMask from 'react-input-mask'
import sendMail from '../../helpers/sendMail'

export function ModalForm({ lang, toggleModalForm, source, lawyer }) {
  let title, eMailInput, messageReqired
  const {
    clientName,
    clientNameError,
    clientPhone,
    clientPhoneError,
    clientMail,
    clientMailInvalid,
    clientMailError,
    clientMessage,
    clientMessageError,
    buttonText,
  } = useMemo(() => getTranslations(lang), [lang])
  const { sendSuccessText, waitText, requestConsultationText, requestConsultationWithText, writeToSupervisorText } =
    useMemo(() => getCommonTranslations(lang), [lang])
  const [stateName, setStateName] = useState('')
  const [statePhone, setStatePhone] = useState('')
  const [stateMail, setStateMail] = useState('')
  const [stateMessage, setStateMessage] = useState('')
  const [stateFormSend, setStateFormSend] = useState(false)
  function inputChange({ nativeEvent, target }, inputName) {
    if (inputName === 'name' && isNaN(parseInt(nativeEvent.data))) setStateName(target.value)
    if (inputName === 'phone') setStatePhone(target.value)
    if (inputName === 'mail') setStateMail(target.value)
    if (inputName === 'message') setStateMessage(target.value)
  }
  async function formSubmit() {
    if (!stateName) {
      Notiflix.Notify.failure(clientNameError)
      return
    }
    if (!statePhone) {
      Notiflix.Notify.failure(clientPhoneError)
      return
    }
    if (eMailInput) {
      if (!stateMail) {
        Notiflix.Notify.failure(clientMailError)
        return
      }
      const mailArray = stateMail.split('@')
      if (mailArray.length !== 2) {
        Notiflix.Notify.failure(clientMailInvalid)
        return
      }
      const domenArray = mailArray[1].split('.')
      if (domenArray.length < 2) {
        Notiflix.Notify.failure(clientMailInvalid)
        return
      }
    }
    if (messageReqired && !stateMessage) {
      Notiflix.Notify.failure(clientMessageError)
      return
    }

    const result = await sendMail({
      phone: statePhone,
      language: lang,
      request: title,
      mail: stateMail,
      name: stateName,
      message: stateMessage,
    })
    if (result) setStateFormSend(true)
  }
  switch (source) {
    case 'supervisor__button':
      title = writeToSupervisorText
      eMailInput = true
      messageReqired = true
      break
    case 'consult-btn':
      title = requestConsultationText
      eMailInput = false
      messageReqired = false
      break
    case 'lawyer__button':
      title = requestConsultationWithText + lawyer[lang]
      eMailInput = true
      messageReqired = false
      break

    default:
      break
  }

  return (
    <div className='modal__overlay' onClick={toggleModalForm}>
      <div className='modal__container'>
        <div className='modal__close'>
          <span className='modal__close-line'></span>
          <span className='modal__close-line'></span>
        </div>
        {!stateFormSend && (
          <>
            <h2 className='modal__title'>{title}</h2>

            <div className='modal-form'>
              <label className='modal-form__name-label modal-form__label'>
                <span className='modal-form__label-req'>*</span>
                {clientName}
                <InputMask
                  className='modal-form__input name'
                  type='text'
                  name='full-name'
                  onChange={e => inputChange(e, 'name')}
                  onBlur={e => inputChange(e, 'name')}
                  value={stateName}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  maxLength='40'
                  size='40'
                  title='Имя может состоять только из букв, апострофа, тире и пробелов.'
                  maskchar=' '
                  required
                />
              </label>
              <label className='modal-form__phone-label modal-form__label'>
                <span className='modal-form__label-req'>*</span>
                {clientPhone}
                <InputMask
                  type='tel'
                  name='number'
                  size='40'
                  className='modal-form__input phone'
                  onChange={e => inputChange(e, 'phone')}
                  onBlur={e => inputChange(e, 'phone')}
                  value={statePhone}
                  pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                  placeholder='+380 (__) ___-__-__'
                  mask='+380 (99) 999-99-99'
                  title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
                  required
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
                    onBlur={e => inputChange(e, 'mail')}
                  />
                </label>
              )}
              <label className='modal-form__message-label modal-form__label'>
                {messageReqired && <span className='modal-form__label-req'>*</span>}
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
                <button type='submit' value={buttonText} onClick={formSubmit} className='btn-default'>
                  {buttonText}
                </button>
              </div>
            </div>
          </>
        )}

        {stateFormSend && (
          <div className='modal__success'>
            <Image alt='Success' src={successImg.src} width='61px' height='79px' />
            <h2 className='modal__success-heading'>{sendSuccessText}</h2>
            <p className='modal__success-paragraph'>{waitText}</p>
          </div>
        )}
      </div>
    </div>
  )
}
