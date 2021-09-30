import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CriptoPlaces</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pronto..
        </h1>
        <p>
          Mientras podés crear una cuenta en <Link href="https://accounts.binance.com/es-LA/register?ref=R2NBXRCR">
          <a><b><u>Binance</u></b> :)</a>
        </Link>
        </p>
      </main>
    </div>
  )
}
