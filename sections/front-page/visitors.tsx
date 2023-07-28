const Visitors = () => {
  return (
    <div className="w-full bg-white dark:bg-darkThemeBackground p-6 flex justify-between rounded-lg">
      <div className="w-full border-r-[0.5px] border-bg2 dark:border-[#343948] pr-5">
        <h2 className="text-textColor1 dark:text-textColor2 text-2xl font-medium leading-[36.4px] text-center">
          750K
        </h2>
        <p className="text-textColor2 dark:text-[#5C6CA5]  text-base font-normal leading-7 text-center">
          Website Visitors
        </p>
      </div>

      <div className="w-full border-l-[0.5px] border-bg2 dark:border-[#343948] pl-5">
        <h2 className="text-textColor1 dark:text-textColor2 text-2xl font-medium leading-[36.4px] text-center">
          7,500
        </h2>
        <p className="text-textColor2 dark:text-[#5C6CA5] text-base font-normal leading-7 text-center">
          New Customers
        </p>
      </div>
    </div>
  )
}

export default Visitors
