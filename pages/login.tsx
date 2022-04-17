import Image from 'next/image'
import Footer from '@/components/Footer'

const Login = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <main className="w-5/6 flex flex-col items-center">
        <Image src="/undraw_Queue_j6ij.png" alt="queue image" width={1143/4} height={765/4} />
        <div className="flex flex-col items-center gap-y-5 my-10">
          <h1 className="text-base font-base">
            enmokuにご興味を持っていただきありがとうございます。
          </h1>
          <h1 className="text-base font-base">
            製品版は近日中にリリース予定のため、下記のLINE公式アカウントを追加して、リリース発表をお待ちいただけますと幸いです。
          </h1>
          <a href="https://lin.ee/oN3Xxft" className="my-10">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" className="h-12"/>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Login
