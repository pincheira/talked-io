import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Talked.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Coming soon! This is a placeholder page for the Talked.io project.
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
