import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import FrontPageGraphicSide from '@/components/front-page/front-page-graphic-side'

const FrontPage = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/authentification/signin')
    }
  })

  return (
    <div>
      <Layout>
        <FrontPageGraphicSide />
      </Layout>
    </div>
  )
}

export default FrontPage
