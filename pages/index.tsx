import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import FrontPageGraphicSide from '@/components/front-page/front-page-graphic-side'
import Revenue from '@/components/front-page/revenue'
import SummaryCards from '@/components/front-page/summary-cards'
import Earnings from '@/components/front-page/earnings'
import Conversations from '@/components/front-page/revenue/conversations'

const FrontPage = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/authentification/signin')
    }
  })

  return (
    <Layout>
      <FrontPageGraphicSide />
      <SummaryCards />

      <div className="flex flex-col gap-10 relative md:bottom-[18px] bottom-0 md:px-10 px-4">
        <Revenue />
        <div className="flex lg:flex-row flex-col gap-10">
          <Earnings />
          <Conversations />
        </div>
      </div>
    </Layout>
  )
}

export default FrontPage
