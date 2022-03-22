import Link from 'next/link'
import image from '../images/slider/site_slide_02.webp'

export default function ErrorPage() {
  return (
    <main>
      <div className='page-header' style={{ backgroundImage: `url(${image.src})` }}></div>
      <div className='container not_found'>
        <h1 className='not_found'>
          4<span>0</span>4
        </h1>
        <h2 className='sub_not_found'>
          Сторінку не знайдено
          <p>Страницу не найдено</p>
          Page not found
        </h2>

        <p className='sub_not_par'>
          Запитану сторінку не знайдено. Можливо вона була видалена або переміщена за новою адресою.
          <p> Запрошенная страница не найдена. Возможно, она была удалена или перемещена по новому адресу. </p>
          The requested page was not found. It may have been deleted or moved to another address.
        </p>

        <p className='sub_not_par_link'>
          <Link href='/uk'>
            <a>Перейти на головну сторінку</a>
          </Link>{' '}
          <span>≡</span>
          <Link href='/ru'>
            <a>Перейти на главную страницу</a>
          </Link>{' '}
          <span>≡</span>
          <Link href='/en'>
            <a>Go to home page</a>
          </Link>
        </p>
      </div>
    </main>
  )
}
