import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import SidebarTabs from './sidebar-tabs'

interface SidebarProps {
  sidebarOpened: boolean
  setSidebarOpened: (prop: boolean) => void
}

const Sidebar = ({ sidebarOpened, setSidebarOpened }: SidebarProps) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return

  return (
    <>
      <div className="h-[76px] flex items-center absolute top-0 z-50">
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
        className={`absolute top-0 w-[257px] min-h-screen bg-white dark:bg-darkThemeBackground shadow-custom animate-openSidebar z-40 ${
          sidebarOpened ? 'block' : 'hidden'
        }`}
      >
        <Link
          href="/"
          className="h-[76px] border-b border-bg2 dark:border-[#30384F] flex justify-center items-center"
        >
          <Image
            src={`/assets/Logo${theme === 'dark' ? '-dark' : ''}.svg`}
            alt="Hope UI"
            width={163}
            height={43}
          />
        </Link>

        <SidebarTabs />
      </div>
    </>
  )
}

export default Sidebar
