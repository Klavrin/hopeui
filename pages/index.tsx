import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import PageGraphicSide from '@/components/page-graphic-side'
import Revenue from '@/sections/front-page/revenue'
import SummaryCards from '@/sections/front-page/summary-cards'
import Earnings from '@/sections/front-page/earnings'
import Conversations from '@/sections/front-page/conversations'
import EnterpriseClients from '@/sections/front-page/enterprise-clients'
import Dashboard from '@/sections/front-page/dashboard'
import Visitors from '@/sections/front-page/visitors'
import ActivityOverview from '@/sections/front-page/activity-overview'

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
      <PageGraphicSide />
      <SummaryCards />

      <div className="xl:flex block md:px-10 px-4 md:mb-0 mb-5">
        <div className="w-full flex flex-col gap-10 relative md:bottom-[18px] bottom-0 mr-10">
          <Revenue />
          <div className="flex lg:flex-row flex-col gap-10">
            <Earnings />
            <Conversations />
          </div>
          <EnterpriseClients />
        </div>

        <div className="xl:w-1/4 w-full relative md:bottom-[18px] bottom-0 xl:mt-0 mt-10 flex flex-col gap-10">
          <Dashboard />
          <Visitors />
          <ActivityOverview />
        </div>
      </div>
    </Layout>
  )
}

export default FrontPage
