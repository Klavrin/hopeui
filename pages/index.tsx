import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

const Home = () => {
  const router = useRouter()
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/authentification/signin')
    }
  })

  const { setTheme } = useTheme()

  return (
    <div className="text-6xl font-semibold">
      <h1 className="text-primaryDark dark:text-primaryLight">
        {session?.user?.name}
      </h1>
      <button onClick={() => setTheme('dark')}>Dark</button>{' '}
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  )
}

export default Home
