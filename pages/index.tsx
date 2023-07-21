import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import FrontPageGraphicSide from '@/components/front-page/front-page-graphic-side'
import Revenue from '@/components/front-page/revenue'
import SummaryCards from '@/components/front-page/summary-cards'

const FrontPage = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/authentification/signin')
    }
  })

  return (
    <section>
      <Layout>
        <FrontPageGraphicSide />

        <div className="px-[40px]">
          <SummaryCards />
          {/* <Revenue /> */}
        </div>
      </Layout>
    </section>
  )
}

export default FrontPage
