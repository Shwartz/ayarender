import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.scss'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyaRender</title>
        <link rel="icon" href="/ayarender-favicon.svg" />
      </Head>

      <section>
        header part
      </section>

      <main className={styles.main}>
        <h1>
          Welcome to Ayarender!
        </h1>
        <div>
        <Image
          src="/assets/blue.png"
          alt="Picture of the author"
          width={300}
          height={200}
        />
        <Image
          src="/assets/red.png"
          alt="Picture of the author"
          width={300}
          height={200}
        />
        <Image
          src="/assets/green.png"
          alt="Picture of the author"
          width={300}
          height={200}
        />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}
