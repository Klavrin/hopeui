import Image from 'next/image'

const InputField = () => {
  return (
    <div className="max-w-[304px] px-4 py-1 rounded-[4px] border border-bg2 dark:border-[#30384F] flex gap-2">
      <Image src="/assets/search.svg" alt="" width={24} height={24} />
      <input
        type="text"
        className="bg-transparent text-textColor2"
        placeholder="Search..."
      />
    </div>
  )
}

export default InputField
