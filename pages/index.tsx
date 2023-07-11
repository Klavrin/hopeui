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
    <div className="text-6xl font-semibold">
      Welcome to the home page, <h1>{session?.user?.email}</h1>
    </div>
  )
}

export default Home
