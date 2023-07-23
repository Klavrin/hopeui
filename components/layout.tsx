import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  return (
    <div className="h-full bg-bg2 dark:bg-veryDarkThemeBackground">
      <Navbar sidebarOpened={sidebarOpened} />

      <div className="flex max-w-[1920px] mx-auto">
        <Sidebar
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        <div
          className={`w-full ${sidebarOpened ? 'lg:pl-[257px] pl-0' : 'ml-0'}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
