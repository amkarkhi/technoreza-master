import Head from "next/head";
import Slides from "../Components/Slides"
import Resume from "../Components/Resume"
import Showcase from "../Components/Showcase"
import homeStyles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>technoreza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={homeStyles.container}>
        <Slides />
        <section>
          <Resume />
          <Showcase />
        </section>
      </main>
    </div>
  );
}
