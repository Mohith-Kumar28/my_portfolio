import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return(<>
  

  <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
<Script id="analytics-script" strategy="lazyOnload">
{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}

</Script>
   <Component {...pageProps} /></>)
}
