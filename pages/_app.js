//styles
import '../assets/scss/tailwindcss/base.scss';
import "../assets/scss/tailwindcss/components.scss";
import '../assets/scss/main.scss'



import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

import Head from 'next/head'
import Header from '../components/Header/Header'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Head>
        <title>Anthill</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

