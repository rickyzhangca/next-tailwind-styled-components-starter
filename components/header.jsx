import Head from 'next/head';
import Script from 'next/script';

export default function Header() {
  return (
    <>
      <Head>
        <title>Your title</title>
        <meta name='language' content='English'></meta>
        <meta name='title' content='Your title' />
        <meta
          name='description'
          content='Your description'
        />
        <meta
          name='keywords'
          content='your keywords'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='Your name' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </Head>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=[Your GA id]'></Script>
      <Script id='ga'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '[Your GA id]');`}
      </Script>
      <header>This is header</header>
    </>    
  );
}
