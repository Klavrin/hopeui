import Navbar from './navbar/navbar'
import Sidebar from './sidebar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  return (
    <>
      <Navbar sidebarOpened={sidebarOpened} />
      <div className="flex">
        <Sidebar
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        <div className={sidebarOpened ? 'ml-[257px]' : 'ml-0'}>{children}</div>
      </div>
    </>
  )
}

export default Layout
