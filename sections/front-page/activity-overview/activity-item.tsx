import Image from 'next/image'

interface ActivityItemProps {
  title: string
  time: string
}

const ActivityItem = ({ title, time }: ActivityItemProps) => {
  return (
    <div className="w-full min-h-[95px] flex gap-4">
      <div className="flex flex-col items-center">
        <div className="min-w-[21px] min-h-[21px] rounded-full border-2 border-primary" />
        <div className="w-[1px] h-full bg-bg2 dark:bg-[#5C6CA5]" />
      </div>

      <div>
        <h3 className="text-textColor1 dark:text-[#D3D3D3] text-[19px] font-normal leading-[33.25px]">
          {title}
        </h3>
        <p className="text-textColor2 dark:text-[#5C6CA5] text-base font-normal leading-7">
          {time}
        </p>
      </div>
    </div>
  )
}

export default ActivityItem
