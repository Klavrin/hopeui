import { useSession } from 'next-auth/react'

const CreditCard = () => {
  const { data: session } = useSession()

  return (
    <div className="w-full border-2 border-white p-6 rounded-3xl backdrop-blur-lg bg-black/[.15] text-bg1">
      <div>
        <h3 className="text-[28px] font-bold leading-[36.4px]">VISA</h3>
        <p className="text-[13px] font-normal leading-[17px]">
          PREMIUM ACCOUNT
        </p>
      </div>

      <h2 className="text-[18px] font-medium leading-[30px] my-12">
        5789 **** **** 2847
      </h2>

      <div className="flex justify-between">
        <div>
          <p className="text-[11px] font-normal leading-normal mb-[7px]">
            Card holder
          </p>
          <h4 className="text-[19px] font-medium leading-[23.25px]">
            {session?.user?.name}
          </h4>
        </div>
        <div>
          <p className="text-[11px] font-normal leading-normal">Expire date</p>
          <h4 className="text-[19px] font-medium leading-[33.25px]">06/21</h4>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
