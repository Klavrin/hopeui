import Navbar from '@/components/navbar/navbar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/authentification/signin')
    }
  })

  return (
    <div>
      <Navbar session={session} />
    </div>
  )
}

export default Home
