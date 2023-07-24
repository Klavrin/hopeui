import Image from 'next/image'

const Conversations = () => {
  return (
    <div className="max-w-[588px] bg-bg1 dark:bg-darkThemeBackground rounded-lg p-6">
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

      <Image
        src="/assets/front-page/bar-chart.svg"
        alt=""
        width={539}
        height={238}
      />
    </div>
  )
}

export default Conversations
