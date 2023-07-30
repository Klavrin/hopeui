import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { checkEmail } from '@/utils/check-email'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        name: { label: 'Name', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        phoneNo: { label: 'Phone Number', type: 'text' }
      },
      authorize(credentials: any): any {
        const email = checkEmail(credentials.email)

        if (email)
          return {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            phoneNo: credentials.phoneNo
          }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: 'authentification/signin'
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
