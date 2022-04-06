import Image from 'next/image'
import { useRef } from 'react'
import successImg from '../../images/svg/success.svg'

export function Modal({ lang, toggleModalForm }) {
  const modalOverlayRef = useRef(null)
  const toggleModal = () => {
    modalOverlayRef.current.classList.toggle('opened')
  }

  return (
    <div className='modal__overlay' onClick={toggleModalForm}>
      <div className='modal__container'>
        <div className='modal__close'>X</div>

        <h2 className='modal__title'>Написать руководителю</h2>

        <form className='modal-form'>
          <label className='modal-form__name-label form-label'>
            <span className='modal-form-label-req'>*</span>Ваше имя
            <input
              type='text'
              name='full-name'
              value=''
              size='40'
              className='modal-form__name-input'
              aria-required='true'
            />
          </label>
          <label className='modal-form__phone-label form-label'>
            <span className='modal-form-label-req'>*</span>Ваш телефон
            <input type='tel' name='tel' value='' size='40' className='modal-form__phone-input' aria-required='true' />
          </label>
          <label className='modal-form__email-label form-label'>
            <span className='modal-form-label-req'>*</span>Ваш e-mail
            <input
              type='email'
              name='email'
              value=''
              size='40'
              className='modal-form__email-input'
              aria-required='true'
            />
          </label>
          <label className='modal-form__message-label form-label'>
            Сообщение
            <textarea name='message' cols='40' rows='10' className='modal-form__message-textarea' />
          </label>
          <div className='sbm-wrapper'>
            <input type='submit' value='ОТПРАВИТЬ' className='modal-form__submit' />
          </div>
        </form>
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
