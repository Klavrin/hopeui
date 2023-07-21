import PieChartElement from './revenue/pie-chart'

const SummaryCards = () => {
  const data = [
    { title: 'Total Sales', income: '$560K', circleFullness: 90 },
    { title: 'Total Profit', income: '$185K', circleFullness: 80 },
    { title: 'Total Cost', income: '$375K', circleFullness: 70 },
    { title: 'Revenue', income: '$742K', circleFullness: 60 },
    { title: 'Net Income', income: '$150K', circleFullness: 45 },
    { title: 'Today', income: '$4600', circleFullness: 40 }
  ]

  return (
    <div className="w-full flex overflow-x-auto justify-center flex-wrap gap-10 relative md:bottom-14 bottom-0">
      {data.map((item) => (
        <div
          key={item.title}
          className="min-w-[230px] bg-white dark:bg-darkThemeBackground flex items-center gap-6 p-6 rounded-lg"
        >
          {/* <PieChartElement /> */}

          <div>
            <p className="text-textColor2 text-base font-normal leading-7">
              {item.title}
            </p>
            <h2 className="text-[19px] font-medium leading-[33.25px]">
              {item.income}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards
