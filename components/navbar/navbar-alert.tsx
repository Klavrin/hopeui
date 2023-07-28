'use client'
import { BsExclamationTriangleFill, BsXLg } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const NavbarAlert = () => {
  const [mounted, setMounted] = useState(false)
  const [navbarAlertClosed, setNavbarAlertClosed] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return
  return (
    <div
      className={`w-full ${
        theme === 'light' ? 'bg-pending/[.8]' : 'bg-pendingDark/[.8]'
      } ${navbarAlertClosed ? 'hidden' : 'block'}`}
    >
      <div className="max-w-[1920px] mx-auto flex justify-between items-center px-4 py-1">
        <div className="flex md:items-center items-start gap-5 md:flex-row flex-col">
          <div className="flex gap-2 items-center">
            <BsExclamationTriangleFill size={20} className="min-w-[20px]" />
            <h2 className="text-2xl font-medium font-poppins">
              Work in Progress
            </h2>
          </div>
          <p className="font-poppins">
            The work on this project is still in progress, please keep in mind
            that this is not the final result.
          </p>
        </div>

        <BsXLg
          size={20}
          onClick={() => setNavbarAlertClosed(true)}
          className="min-w-[20px] ml-5"
        />
      </div>
    </div>
  )
}

export default NavbarAlert
