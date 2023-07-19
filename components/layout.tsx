import Navbar from './navbar/navbar'
import Sidebar from './sidebar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  return (
    <div className="">
      <Navbar sidebarOpened={sidebarOpened} />

      <div className="flex max-w-[1920px] mx-auto">
        <Sidebar
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        <div className={sidebarOpened ? 'lg:ml-[257px] ml-0' : 'ml-0'}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
