import '@/styles/globals.css'
import '@/styles/style.css'
import Navbar from './Navbar'
export default function App({ Component, pageProps }) {
  return (
    <main  className=" flex flex-col gap-20 items-center py-10">
      <Navbar/>
      <Component {...pageProps} />
    </main>

  )
}
