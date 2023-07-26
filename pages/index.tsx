import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import FrontPageGraphicSide from '@/sections/front-page/front-page-graphic-side'
import Revenue from '@/sections/front-page/revenue'
import SummaryCards from '@/sections/front-page/summary-cards'
import Earnings from '@/sections/front-page/earnings'
import Conversations from '@/sections/front-page/conversations'
import EnterpriseClients from '@/sections/front-page/enterprise-clients'
import Footer from '@/components/footer'
import Dashboard from '@/sections/front-page/debit-card'

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

      <div className="flex">
        <div className="w-full flex flex-col gap-10 relative md:bottom-[18px] bottom-0 md:px-10 px-4">
          <Revenue />
          <div className="flex lg:flex-row flex-col gap-10">
            <Earnings />
            <Conversations />
          </div>
          <EnterpriseClients />
        </div>

        {/* <div className="w-full md:bottom-[18px] bottom-0 md:pr-10 pr-4">
          <Dashboard />
        </div> */}
        <div className="w-1/3 relative md:bottom-[18px] bottom-0 md:mr-10 mr-4">
          <Dashboard />
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default FrontPage
