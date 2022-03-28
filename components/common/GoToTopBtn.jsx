import Image from 'next/image'
import { useRef } from 'react'

import btnGoTop from '../../images/svg/btnGoTop.svg'

export function GoToTopBtn({ writeRef }) {
  let GoToTopBtnRef = useRef(null)
  const gototop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className='goTop' ref={GoToTopBtnRef} onLoad={() => writeRef(GoToTopBtnRef)}>
      <div className='goTop__container container'>
        <div onClick={gototop} className='goTop__image'>
          <Image src={btnGoTop} alt='Go to top' className='goTop__svg' />
        </div>
      </div>
    </section>
  )
}
