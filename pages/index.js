import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.scss'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyaRender</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" href="/favicon.svg"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3f2021"/>
        <meta name="msapplication-TileColor" content="#f3cfb3"/>
        <meta name="theme-color" content="#f3cfb3"/>
      </Head>

      <section className={styles.header}>
        <Image
          src="/favicon.svg"
          alt="Ayarender logo"
          width={100}
          height={67}
        />
      </section>

      <main className={styles.main}>
        <div className={styles.intro}>
          {/*
          TODO: Text for intro
          TODO: Add alt description for each image
          */}
          <h1>
            Hi, my name is Aija!
          </h1>

          <p>There is a technical term for what I do - Interior Design visualiser but I
            would like to call myself Spatial Magician.</p>
          <p> I can virtually transfer existing living space and show you
            images of the property that hasn't even been built yet. Below are some examples of my recent work. </p>
        </div>

        <div className={styles.moods}>
          <div>
            <Image
              src="/assets/moods/Sogno-de-oriente_m.jpg"
              alt="Visualisation"
              width={1200}
              height={761}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/Bridgerton_m.jpg"
              alt="Visualisation"
              width={1200}
              height={702}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/xmas-for-media_m.jpg"
              alt="Visualisation"
              width={1200}
              height={750}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/PhResidence3Dstyled_m.jpg"
              alt="Visualisation"
              width={1200}
              height={1008}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/Bathroom-5-Day-Challenge-shadows-export_m.jpg"
              alt="Visualisation"
              width={996}
              height={1200}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/Home-Office-Elevation-2017-WIP-A_m.jpg"
              alt="Visualisation"
              width={1200}
              height={1104}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.insta}>Follow on:
          <a target="_blank" href="https://instagram.com/aya.render">
            <img alt="Instagram"
                 src="/assets/icons/instagram.svg"
                 height="24"
                 width="24"/>
          </a>
        </p>
      </footer>
    </div>
  )
}
