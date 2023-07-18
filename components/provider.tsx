'use client'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

interface ProviderProps {
  children: React.ReactNode
  session: any
}

const Provider = ({ children, session }: ProviderProps) => {
  // const router = useRouter()
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push('/authentification/signin')
  //   }
  // })
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Provider
