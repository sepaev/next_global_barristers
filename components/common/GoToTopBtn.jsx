import Image from 'next/image'

import btnGoTop from '../../images/svg/btnGoTop.svg'

export function GoTopBTN() {
  return (
    <section className='goTop'>
      <div className='goTop__container container'>
        <div className='goTop__image'>
          <Image src={btnGoTop} alt='Go to top' className='goTop__svg' />
        </div>
      </div>
    </section>
  )
}
