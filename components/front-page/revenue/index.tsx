import Chart from './chart'

const Revenue = () => {
  return (
    <div className="max-w-[1064px] h-[447px] bg-white dark:bg-darkThemeBackground flex flex-col rounded-lg p-6">
      <div className="flex flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-textColor1 dark:text-white text-[19px] font-medium leading-[33.25px]">
            $855.8K
          </h2>
          <p className="text-textColor2 text-base font-normal leading-7">
            Gross Sales
          </p>
        </div>

        <div className="flex md:gap-6 gap-1 md:flex-row flex-col">
          <div className="flex items-center gap-2">
            <figure className="w-[13px] h-[13px] bg-primary rounded-full" />
            <p className="text-textColor2 text-base font-normal leading-7">
              Sales
            </p>
          </div>

          <div className="flex items-center gap-2">
            <figure className="w-[13px] h-[13px] bg-informationLight rounded-full" />
            <p className="text-textColor2 text-base font-normal leading-7">
              Cost
            </p>
          </div>
        </div>

        <div>
          <p className="text-textColor2 text-base font-normal leading-7">
            This week
          </p>
        </div>
      </div>

      <Chart />
    </div>
  )
}

export default Revenue
