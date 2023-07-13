import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '@/components/custom-button'
import Head from 'next/head'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { SyntheticEvent } from 'react'
import { checkEmail } from '@/utils/check-email'

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: ''
  })

  const metaData = {
    heading: 'Sign Up',
    description: 'Create your Hope UI account',
    formData: [
      { title: 'First Name', label: 'firstName' },
      { title: 'Last Name', label: 'lastName' },
      { title: 'Email', label: 'email' },
      { title: 'Phone No. (optional)', label: 'phoneNo' },
      { title: 'Password', label: 'password' },
      { title: 'Confirm Password', label: 'confirmPassword' }
    ]
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    // Basic form validation and sign-in process for showcase purposes.
    // Note: Handling credentials like this is extremely dangerous in real-life projects. Use proper authentication packages to ensure security.
    if (
      credentials.firstName === '' ||
      credentials.lastName === '' ||
      credentials.email === '' ||
      credentials.password === ''
    )
      return alert('You must fill in all input fields.')

    if (credentials.password !== credentials.confirmPassword)
      return alert("Passwords don't match.")

    const email = checkEmail(credentials.email)
    if (!email) return alert('You must include a proper email address.')

    signIn('credentials', {
      name: `${credentials.firstName} ${credentials.lastName}`,
      email: credentials.email,
      password: credentials.password,
      phoneNo: credentials.phoneNo,
      callbackUrl: '/'
    })
  }

  return (
    <>
      <Head>
        <title>Sign up - HopeUI</title>
      </Head>

      <section className="w-screen h-screen lg:grid grid-cols-2">
        <div className="bg-blue-300 bg-[url('/assets/auth-bg.png')] bg-cover rotate-180"></div>

        <div className="text-center lg:w-[436px] max-w-[436px] lg:h-auto h-screen m-auto lg:px-0 px-6 lg:py-0 py-6 lg:block flex flex-col">
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

          <form onSubmit={handleSubmit} className="lg:grid grid-cols-2 gap-x-4">
            {metaData.formData.map((item) => (
              <div key={item.label} className="mb-4 mt-4">
                <h4 className="text-start text-textColor2 text-base font-normal mb-2">
                  {item.title}
                </h4>
                <input
                  className="w-full h-[33px] py-2 px-4 border border-primary rounded-[4px]"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      [item.label]: e.target.value
                    })
                  }
                />
              </div>
            ))}

            <div className="col-span-2">
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

              <CustomButton title="Sign up" extraStyling="mx-auto" />
            </div>
          </form>

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
              <Link href="/">
                <Image
                  src="/assets/github.svg"
                  alt="github"
                  width={24}
                  height={24}
                  onClick={() => signIn('github', { callbackUrl: '/' })}
                />
              </Link>
            </div>

            <h4 className="text-textColor1 text-base font-normal">
              Already have an Account?{' '}
              <Link href="/authentification/signin" className="text-primary">
                Sign in.
              </Link>
            </h4>
          </div>
        </div>

        <Image
          src="/assets/hashtag-signup.svg"
          alt=""
          width={343}
          height={343}
          className="absolute opacity-5 top-0 right-0 -z-10"
        />
      </section>
    </>
  )
}

export default SignUp
