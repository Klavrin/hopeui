'use client'

interface CustomButtonProps {
  title: string
  extraStyling?: string
}

const CustomButton = ({ title, extraStyling }: CustomButtonProps) => {
  return (
    <button
      className={`w-[188px] min-h-[44px] bg-primary text-base text-white font-normal rounded-sm ${extraStyling}`}
    >
      {title}
    </button>
  )
}

export default CustomButton
