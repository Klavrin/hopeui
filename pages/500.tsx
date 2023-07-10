import Link from 'next/link'

const Page500 = () => {
  const metaData = {
    heading: 'Oops! This Page is Not Working.',
    description: 'The requested is Internal Server Error.'
  }

  return (
    <section className="bg-gradient-to-l from-primaryDark via-skyBlue to-primaryDark">
      <div className="w-screen h-screen lg:bg-[url('/assets/500.png')] bg-no-repeat bg-center flex flex-col justify-center items-center mx-auto">
        <div className="text-center z-10 relative lg:top-[240px]">
          <h1 className="text-8xl text-white font-poppins font-bold mb-4 lg:hidden block">
            500
          </h1>

          <h2 className="text-white font-poppins text-[40px] font-semibold leading-normal">
            {metaData.heading}
          </h2>
          <p className="text-white font-poppins text-[19px] font-normal leading-normal mb-6">
            {metaData.description}
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-textColor1 text-base font-normal rounded-[4px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Page500
