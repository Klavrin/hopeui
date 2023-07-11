import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { checkEmail } from '@/utils/check-email'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        name: { label: 'Name', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        phoneNo: { label: 'Phone Number', type: 'text' }

        // firstName: { label: 'firstName', type: 'text' },
        // lastName: { label: 'lastName', type: 'text' },
        // email: { label: 'email', type: 'email' },
        // password: { label: 'password', type: 'password' },
        // phoneNo: { label: 'phoneNo', type: 'text' }
      },
      authorize(credentials) {
        const email = checkEmail(credentials?.email)

        if (email)
          return {
            name: credentials?.name,
            email: credentials?.email,
            password: credentials?.password,
            phoneNo: credentials?.phoneNo
          }

        return null
      }
    })
  ],
  // session: {
  //   strategy: 'jwt'
  // },
  pages: {
    signIn: 'authentification/signin'
  }
}

export default NextAuth(authOptions)
