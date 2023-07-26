import Image from 'next/image'

const Dashboard = () => {
  return (
    // <div className="max-w-[479px]">
    <div className="w-full">
      <div className="min-h-[378px] bg-[url('/assets/front-page/dashboard/bubbles.svg')] bg-white dark:bg-darkThemeBackground bg-center bg-contain"></div>

      <div className="min-h-[249px] bg-white dark:bg-darkThemeBackground p-6">
        <div className="inline-flex gap-10">
          <div className="flex gap-4">
            <Image
              src="/assets/front-page/dashboard/bag.svg"
              alt=""
              width={32}
              height={32}
            />
            <div>
              <h5 className="text-textColor1 dark:text-[#D3D3D3] text-base font-normal leading-7">
                1153
              </h5>
              <p className="text-textColor2 text-[13px] font-normal leading-[17px]">
                Products
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image
              src="/assets/front-page/dashboard/cart.svg"
              alt=""
              width={32}
              height={32}
            />
            <div>
              <h5 className="text-textColor1 dark:text-[#D3D3D3] text-base font-normal leading-7">
                81K
              </h5>
              <p className="text-textColor2 text-[13px] font-normal leading-[17px]">
                Order Served
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6 mb-2">
          <h3 className="text-textColor1 dark:text-textColor2 text-[28px] font-medium leading-[36.4px]">
            $4,050,12,300
          </h3>

          <div className="w-[86px] h-[25px] bg-success text-bg1 text-[13px] font-normal leading-[25px] px-4 rounded-full">
            YoY 24%
          </div>
        </div>

        <button className="text-information text-base font-normal leading-7">
          Life time sales
        </button>

        <div className="flex justify-between mx-2 mt-6">
          <button className="bg-primary text-white w-[178px] leading-[15px] h-9 px-6 py-2 rounded-[4px]">
            View Project
          </button>
          <button className="bg-information text-white w-[178px] leading-[15px] h-9 px-6 py-2 rounded-[4px]">
            Analytics
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
