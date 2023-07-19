import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import NavigationElements from '@/components/navigation-elemets'
import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar'
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
      {/* <NavigationElements /> */}
      <Layout>hello</Layout>
    </div>
  )
}

export default Home
