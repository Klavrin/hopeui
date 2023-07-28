import Image from 'next/image'
import ActivityItem from './activity-item'

const ActivityOverview = () => {
  const activityData = [
    { title: '$2400, Purchase', time: '11 JUL 8:10 PM' },
    { title: 'New order #8744152', time: '11 JUL 11 PM' },
    { title: 'Affiliate Payout', time: '11 JUL 7:64 PM' },
    { title: 'New user added', time: '11 JUL 1:21 AM' },
    { title: 'Product added', time: '11 JUL 4:50 AM' }
  ]

  return (
    <div className="w-full bg-bg1 dark:bg-darkThemeBackground p-6 rounded-lg">
      <h2 className="text-textColor1 text-[23px] font-medium leading-[30px] dark:text-[#D3D3D3]">
        Activity overview
      </h2>
      <div className="flex gap-2 mt-2 mb-6">
        <Image
          src="/assets/front-page/arrow-up.svg"
          alt=""
          width={12}
          height={12}
        />
        <p className="text-textColor2 dark:text-[#5C6CA5] text-base font-normal leading-7">
          16% this month
        </p>
      </div>

      {activityData.map((item) => (
        <ActivityItem key={item.title} title={item.title} time={item.time} />
      ))}
    </div>
  )
}

export default ActivityOverview
