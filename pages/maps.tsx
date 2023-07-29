import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Layout from '@/components/layout'
import PageGraphicSide from '@/components/page-graphic-side'
const Map = dynamic(() => import('@/components/map'), { ssr: false })

const Maps = () => {
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
      <div className="md:px-10 px-4 mb-5 md:mt-0 mt-10 relative md:bottom-14 bottom-0">
        <Map />
      </div>
    </Layout>
  )
}

export default Maps
