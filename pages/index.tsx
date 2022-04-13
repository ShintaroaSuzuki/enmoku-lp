import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from "@/components/Button"
import { TrendDown } from "iconsax-react"

const Home = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Head>
        <title>enmoku | ファンを増やすための新しいコンサート運営のプラットフォーム</title>
        <meta name="description" content="enmoku | ファンを増やすための新しいコンサート運営のプラットフォーム" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-3/4 my-10">

        <h1 className="text-2xl font-black tracking-wide">
          ファンを増やすための<br/>
          新しいコンサート運営の<br/>
          プラットフォーム
        </h1>

        <div className="flex flex-col items-center my-10">
          <Image src="/undraw_online_connection_6778.png" alt="home header image" width={1206/5} height={889/5} />
        </div>

        <Button />

        <div className="flex flex-col gap-y-6 my-16">
          <div className="flex flex-row gap-x-2">
            <TrendDown size={24} color="#737373"/>
            <p className="text-neutral-500 text-sm">
              ありがたいけど<br/>
              いつも見覚えのある顔ばかり...
            </p>
          </div>
          <div className="flex flex-row gap-x-2">
            <TrendDown size={24} color="#737373"/>
            <p className="text-neutral-500 text-sm">
              一度きりのお客さんが多い...
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-14 my-16">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-blue-900 font-bold text-xl">
              独自のAIが<br/>
              自動で広告をしてくれます
            </h2>
            <p className="text-sm">
              お客さんの属性や開催場所が近いほかのコンサートのプログラムの中に、あなたのコンサートの広告を入れいることができます。この機能により、新しいお客さんの獲得が期待できます。
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <h2 className="text-blue-900 font-bold text-xl">
              次回の公演の前売り券を<br/>
              プログラム上で販売できます
            </h2>
            <p className="text-sm">
              コンサートに来ていただいたお客さんが、プログラムから次回のコンサートの前売り券を直接購入できるようになります。この機能により、お客さんのリピート率の向上が期待できます。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 my-16">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-black">
              プログラムの作成は<br/>
              わずか10分
            </h2>
            <Image src="/mock.png" alt="mock image" width={725/8} height={1070/8} />
          </div>
          <p className="text-sm">
            スマートフォンで閲覧できるプログラムを最短10分で作成できます。コンサート情報を入力すると、プログラムのURLとQRコードが発行されます。無料でご利用いただけるので、まずはお気軽にお試しください。
          </p>
          <div className="flex flex-col items-center">
            <Image src="/undraw_Social_sharing_re_pvmr.png" alt="home footer image" width={793/4} height={714/4} />
          </div>
        </div>

        <Button />

      </main>

      <footer className="flex flex-col gap-y-2 mt-20 mb-10">
        <Link href="https://nonab.super.site">
          <div className="flex flex-col items-center">
            <Image src="/nonab_logo_transparent_gray.png" alt="home footer image" width={1892/20} height={566/20}/>
          </div>
        </Link>
        <Link href="https://nonab.super.site">
          <a className="text-neutral-400 text-[9px]">nonab合同会社(予定)</a>
        </Link>
      </footer>
    </div>
  )
}

export default Home
