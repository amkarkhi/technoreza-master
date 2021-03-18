import Layout from '../Components/Layout'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}

export default MyApp;
