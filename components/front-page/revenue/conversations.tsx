import Image from 'next/image'

const Conversations = () => {
  return (
    <div className="lg:max-w-[588px] w-full bg-bg1 dark:bg-darkThemeBackground rounded-lg p-6 flex flex-col justify-between">
      <div className="flex justify-between mb-6">
        <h3 className="text-textColor1 dark:text-[#D3D3D3] text-[19px] font-medium leading-[33.25px]">
          Conversations
        </h3>

        <div className="flex items-center gap-2">
          <p className="text-textColor2 dark:text-[#5C6CA5] text-base font-normal leading-7">
            This Week
          </p>
          <Image
            src="/assets/front-page/arrow-down.svg"
            alt=""
            width={12}
            height={12}
          />
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <Image
          src="/assets/front-page/bar-chart.svg"
          alt=""
          width={539}
          height={238}
          className="mx-auto max-w-full max-h-full w-auto h-auto"
        />
      </div>
    </div>
  )
}

export default Conversations
