import Head from "next/head";
import { useRouter } from 'next/router'
import Layout from '../Components/Layout'
import ProductsHeader from '../Components/ProductsHeader'
import HomeHeader from '../Components/HomeHeader'
import SimpleHeader from '../Components/SimpleHeader'
import Footer from '../Components/Footer'
import "slick-carousel/slick/slick.css";
import
 "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (router.pathname ==="/") {
    return (
      <>
        <HomeHeader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
    )
  } else if (router.pathname ==="/products") {
    return (
      <>
        <ProductsHeader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <SimpleHeader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
    )
  }
}

export default MyApp;
