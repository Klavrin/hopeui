import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Sidebar = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  return (
    <>
      <div className="h-[76px] flex items-center">
        <button
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className={`bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-lg absolute transition-[translate_0.5s_ease-in-out] ${
            sidebarOpened
              ? 'translate-x-[240px]'
              : 'translate-x-[-10px] rotate-180'
          } `}
        >
          <Image
            src="/assets/sidebar/arrow.svg"
            alt=""
            width={18}
            height={18}
          />
        </button>
      </div>

      <div
        className={`min-w-[257px] bg-white dark:bg-darkThemeBackground min-h-screen shadow-custom animate-openSidebar  ${
          sidebarOpened ? 'block' : 'hidden'
        }`}
      >
        <Link
          href="/"
          className="h-[76px] border-b border-bg2 dark:border-[#30384F] flex justify-center items-center"
        >
          <Image src="/assets/Logo.svg" alt="Hope UI" width={163} height={43} />
        </Link>
      </div>
    </>
  )
}

export default Sidebar
