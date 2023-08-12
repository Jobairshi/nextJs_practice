import '@/styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";
import Navbar from './Navbar'

export default function App({ Component, pageProps }) {

  return (
    <NextUIProvider>
      <main  className="flex flex-col gap-20 items-center py-10">
      <Navbar/>
      
      <Component {...pageProps} />
    </main>
    </NextUIProvider>

  )
}
