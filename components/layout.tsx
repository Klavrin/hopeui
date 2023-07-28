import Footer from './footer'
import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  return (
    <>
      <Navbar sidebarOpened={sidebarOpened} />

      <section className="flex max-w-[1920px] relative min-h-full mx-auto h-full bg-bg2 dark:bg-veryDarkThemeBackground">
        <Sidebar
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        <div
          className={`w-full ${sidebarOpened ? 'xl2:pl-[257px] pl-0' : 'pl-0'}`}
        >
          {children}
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Layout
