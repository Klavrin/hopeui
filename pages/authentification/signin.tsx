import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import CustomButton from '@/components/custom-button'
import { signIn } from 'next-auth/react'
import { SyntheticEvent } from 'react'

const SignIn = () => {
  const metaData = {
    heading: 'Sign In',
    description: 'Sign in to stay connected'
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Sign in - HopeUI</title>
      </Head>

      <section className="w-screen h-screen lg:grid grid-cols-2">
        <div className="text-center lg:w-[436px] max-w-[436px] lg:h-auto h-screen m-auto lg:px-0 px-6 lg:block flex flex-col justify-center">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Hope Ui"
              width={125}
              height={42}
            />
          </Link>

          <h1 className="text-black text-[33px] font-semibold leading-[45px] mb-4 mt-[40px]">
            {metaData.heading}
          </h1>

          <p className="text-textColor2 text-base font-normal">
            {metaData.description}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-4">
              <h4 className="text-start text-textColor2 text-base font-normal mb-2">
                Email
              </h4>
              <input className="w-full py-2 px-4 border border-primary rounded-[4px]" />
            </div>

            <div>
              <h4 className="text-start text-textColor2 text-base font-normal mb-2">
                Password
              </h4>
              <input
                type="password"
                className="w-full py-2 px-4 border border-primary rounded-[4px]"
              />
            </div>
          </form>

          <div className="flex justify-between mt-4 mb-6">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-4 h-4 shadow shadow-[#377dff]/[.25] border-textColor2"
              />
              <h4 className="text-base font-normal text-textColor2">
                Remember me?
              </h4>
            </div>

            <Link href="/" className="text-primary text-base font-normal">
              Forgot Password
            </Link>
          </div>

          <CustomButton title="Sign in" extraStyling="mx-auto" />

          <div className="mt-4">
            <h4 className="text-textColor1 text-base font-normal mb-4">
              or sign in with other accounts?
            </h4>

            <div className="flex justify-center gap-4 mb-4">
              <Link href="/" className="">
                <Image
                  src="/assets/gmail.svg"
                  alt="gmail"
                  width={24}
                  height={24}
                  onClick={() => signIn('google', { callbackUrl: '/' })}
                />
              </Link>
              <Link
                href="/"
                onClick={() => signIn('github', { callbackUrl: '/' })}
              >
                <Image
                  src="/assets/github.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
              </Link>
            </div>

            <h4 className="text-textColor1 text-base font-normal">
              Don't have an account?{' '}
              <Link href="/authentification/signup" className="text-primary">
                Click here to sign up.
              </Link>
            </h4>
          </div>
        </div>

        <div className="bg-blue-300 bg-[url('/assets/auth-bg.png')] bg-cover"></div>

        <Image
          src="/assets/hashtag-signin.svg"
          alt=""
          width={343}
          height={343}
          className="absolute opacity-5 top-0 -z-10"
        />
      </section>
    </>
  )
}

export default SignIn
