// import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MyApp = ({ Component, pageProps }: any) => {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-out-sine",
      duration: 600,
    });
  }, []);  

  return <Component {...pageProps} />
}

export default MyApp
