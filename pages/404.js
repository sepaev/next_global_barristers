import Link from 'next/link'
import Image from 'next/image'
// import image from '../images/slider/site_slide_02.webp'
import Head from 'next/head'

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>{'«Global Barristers» ≡ 404'}</title>
      </Head>
      <main>
        {/* <div className='page-header' style={{ backgroundImage: `url(${image.src})` }}></div> */}
        <div className='page-header'>
          <Image
            src='/404/notFound.jpg'
            alt='Night town'
            layout='fill'
            objectFit='cover'
            loading='lazy'
            objectPosition='top'
          />
        </div>
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
            <span> Запрошенная страница не найдена. Возможно, она была удалена или перемещена по новому адресу. </span>
            The requested page was not found. It may have been deleted or moved to another address.
          </p>

          <p className='sub_not_par_link'>
            <Link href='/uk'>
              <a className='link_to_home'>Перейти на головну сторінку</a>
            </Link>
            <span>≡</span>
            <Link href='/ru'>
              <a className='link_to_home'>Перейти на главную страницу</a>
            </Link>
            <span>≡</span>
            <Link href='/en'>
              <a className='link_to_home'>Go to home page</a>
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
