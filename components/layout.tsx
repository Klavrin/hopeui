import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  return (
    // < className="h-full bg-bg2 dark:bg-veryDarkThemeBackground">
    <>
      <Navbar sidebarOpened={sidebarOpened} />

      <section className="flex max-w-[1920px] relative min-h-full mx-auto h-full bg-bg2 dark:bg-veryDarkThemeBackground">
        <Sidebar
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        <div
          className={`w-full ${sidebarOpened ? 'xl:pl-[257px] pl-0' : 'pl-0'}`}
        >
          {children}
        </div>
      </section>
    </>
  )
}

export default Layout
