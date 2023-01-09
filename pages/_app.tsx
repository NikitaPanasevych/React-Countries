import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContext, AppContextProvider } from '../context/app.context'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AppContextProvider search={""} region={"Filter by region"} lightMode>
      <Component {...pageProps} />
    </AppContextProvider>
    )
}
