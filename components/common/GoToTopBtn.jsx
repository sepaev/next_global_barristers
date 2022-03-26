import Image from 'next/image'

import btnGoTop from '../../images/svg/btnGoTop.svg'

export function GoToTopBtn() {
  const gototop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className='goTop'>
      <div className='goTop__container container'>
        <div onClick={gototop} className='goTop__image'>
          <Image src={btnGoTop} alt='Go to top' className='goTop__svg' />
        </div>
      </div>
    </section>
  )
}
