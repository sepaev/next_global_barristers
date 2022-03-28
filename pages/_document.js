import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // <meta name='viewport' content='width=device-width'></meta>
  return (
    <Html>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='1' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
