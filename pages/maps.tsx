import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import PageGraphicSide from '@/components/page-graphic-side'
const Map = dynamic(() => import('@/components/map'), { ssr: false })

const Maps = () => {
  return (
    <Layout>
      <PageGraphicSide />
      <div className="md:px-10 px-4 mb-5 relative md:bottom-14 bottom-0">
        <Map />
      </div>
    </Layout>
  )
}

export default Maps
