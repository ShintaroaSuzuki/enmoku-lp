import Head from 'next/head'
import Image from 'next/image'
import Button from "@/components/Button"

const Home = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Head>
        <title>oshin</title>
        <meta name="description" content="oshin's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-3/4 my-10">
        <h1 className="text-2xl font-bold">
          ファンを増やすための<br/>
          新しいコンサート運営の<br/>
          プラットフォーム
        </h1>
        <div className="flex flex-col items-center my-10">
          <Image src="/undraw_online_connection_6778.png" alt="home header image" width={1206/5} height={889/5} />
        </div>
        <Button />
      </main>

      <footer className="my-10">
        <span className="text-sm text-slate-600">{`© ${new Date().getFullYear()} osin.`}</span>
      </footer>
    </div>
  )
}

export default Home
