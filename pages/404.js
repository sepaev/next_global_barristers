import Link from 'next/link'
import image from '../images/slider/site_slide_bg-4-2.webp'

export default function ErrorPage() {
  return (
    <main>
      <div className='page-header' style={{ backgroundImage: `url(${image.src})` }}></div>
      <div className='container not_found'>
        <h1 className='not_found'>404</h1>
        <h2 className='sub_not_found'>Сторінку не знайдено</h2>

        <p className='sub_not_par'>
          Запитану сторінку не знайдено. Можливо вона була видалена або переміщена за новою адресою.
        </p>

        <p className='sub_not_par'></p>

        <p style={{ opacity: 1, fontSize: '14px' }}>
          <Link href='/'>
            <a>Головна сторінка</a>
          </Link>
        </p>
      </div>
    </main>
  )
}
