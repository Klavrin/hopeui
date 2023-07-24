import Image from 'next/image'

const Earnings = () => {
  return (
    <div className="max-w-[436px] bg-bg1 dark:bg-darkThemeBackground rounded-lg p-8">
      <div className="flex justify-between mb-10">
        <h3 className="text-textColor1 dark:text-[#D3D3D3] text-[19px] font-medium leading-[33.25px]">
          Earnings
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

      <div className="flex md:flex-row flex-col-reverse items-center gap-[37px]">
        <Image
          src="/assets/front-page/pie-chart.svg"
          alt=""
          width={206}
          height={206}
        />

        <div className="md:block flex md:gap-0 gap-4">
          <div className="flex items-center gap-6 md:mb-12 mb-0">
            <figure className="w-[13px] h-[13px] bg-primary rounded-full" />

            <div>
              <h4 className="text-textColor2 dark:text-[#5C6CA5] text-base font-normal leading-7">
                Fashion
              </h4>
              <p className="text-textColor1 dark:text-textColor2 text-base font-medium leading-7">
                251K
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <figure className="w-[13px] h-[13px] bg-informationLight rounded-full" />

            <div>
              <h4 className="text-textColor2 dark:text-[#5C6CA5] text-base font-normal leading-7">
                Accessories
              </h4>
              <p className="text-textColor1 dark:text-textColor2 text-base font-medium leading-7">
                176K
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earnings
