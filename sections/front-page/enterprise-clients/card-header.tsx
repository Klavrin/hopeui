import Image from 'next/image'

const CardHeader = () => {
  return (
    <div className="w-full bg-bg1 dark:bg-darkThemeBackground p-6 rounded-t-lg">
      <h3 className="text-textColor1 dark:text-[#D3D3D3] text-[19px] font-medium leading-[33.25px]">
        Enterprise Clients
      </h3>

      <div className="flex items-center gap-[18px]">
        <Image
          src="/assets/front-page/check-icon.svg"
          alt=""
          width={13}
          height={13}
        />
        <p className="text-textColor2 text-base font-normal leading-7">
          15 New Acquired ths month
        </p>
      </div>
    </div>
  )
}

export default CardHeader
