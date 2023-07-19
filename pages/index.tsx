import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import NavigationElements from '@/components/navigation-elemets'

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
      <NavigationElements />
    </div>
  )
}

export default Home
