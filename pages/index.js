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
        <div className={styles.intro}>
          {/*<h1>
            Hi, I create Visuals!
          </h1>

          <h3>What is a Visuals?</h3>
          <p>I create Visuals to help communicate and present for a client concepts and visual design ideas. </p>
          <p>Take a look at some examples below</p>*/}
        </div>

        <div className={styles.moods}>
          <div>
            <Image
              src="/assets/moods/Sogno-de-oriente_m.jpg"
              alt="Picture of the author"
              width={1200}
              height={761}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/Bridgerton_m.jpg"
              alt="Moodboard - five day challenge"
              width={1200}
              height={702}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/xmas-for-media_m.jpg"
              alt="Moodboard - five day challenge"
              width={1200}
              height={750}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/PhResidence3Dstyled_m.jpg"
              alt="Moodboard - five day challenge"
              width={1200}
              height={1008}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/Bathroom-5-Day-Challenge-shadows-export_m.jpg"
              alt="Moodboard - five day challenge"
              width={996}
              height={1200}
            />
          </div>
          <div>
            <Image
              src="/assets/moods/Home-Office-Elevation-2017-WIP-A_m.jpg"
              alt="Moodboard - five day challenge"
              width={1200}
              height={1104}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}
