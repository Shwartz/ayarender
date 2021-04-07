import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.scss'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyaRender</title>
        <link rel="icon" href="/ayarender-favicon.svg"/>
        <link rel="mask-icon" href="/ayarender-favicon.svg" color="#000000"/>
        <link rel="apple-touch-icon" href="/ayarender-apple-touch.png"/>
        <link rel="manifest" href="/manifest.json"/>
      </Head>

      <section className={styles.header}>
        <Image
          src="/ayarender-favicon.svg"
          alt="Ayarender logo"
          width={100}
          height={67}
        />
      </section>

      <main className={styles.main}>
        <h1>
          Hi, I create Moodboards!
        </h1>

        <h3>What is a Moodoard?</h3>
        <p>I create Moodbard to help communicate and present for a client concepts and visual design ideas. </p>

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
