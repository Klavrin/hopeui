import Image from 'next/image'

const PageGraphicSide = () => {
  return (
    <div className="w-full min-h-[200px] flex justify-between md:flex-row flex-col rounded-b-2xl px-10 py-[17px] bg-[url('/assets/front-page/graphic-side.png')] bg-cover">
      <div className="mr-6">
        <h1 className="text-bg1 md:text-[40px] text-[25px] font-bold leading-normal">
          Hello Devs!
        </h1>
        <p className="text-bg1 md:text-[23px] text-base font-medium leading-[30px] md:my-0 my-4">
          We are on a mission to help developers like you build beautiful
          projects for FREE.
        </p>
      </div>
      <button className="min-w-[210px] h-[40px] bg-bg1/[0.10] text-bg1 text-base font-normal leading-normal shadow-lg flex justify-center items-center gap-2">
        <Image
          src="/assets/front-page/microphone.svg"
          alt=""
          width={24}
          height={24}
        />
        Announcements
      </button>
    </div>
  )
}

export default PageGraphicSide
