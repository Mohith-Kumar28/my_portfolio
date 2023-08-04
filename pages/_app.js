import SignPath from '@/components/anim/SignPath'
import '@/styles/globals.css'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true)


useEffect(() => {
const timeOut=setTimeout(() => {
  setLoading(false)
}, 2300);
return ()=>clearTimeout(timeOut)
}, [])

  return(<>

  
  

  <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
<Script id="analytics-script" strategy="lazyOnload">
{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}

</Script>
{loading?(
  <SignPath/>
):(
   <Component {...pageProps} />
   )}
   </>)
  
}
