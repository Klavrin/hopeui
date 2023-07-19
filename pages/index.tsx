import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'

const Home = () => {
  const router = useRouter()
  useSession({
    required: true,
    onUnauthenticated() {
      router.push('/authentification/signin')
    }
  })

  return (
    <div>
      <Layout>hello</Layout>
    </div>
  )
}

export default Home
