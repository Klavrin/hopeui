import InputField from '../input-field'
import Image from 'next/image'
import NavbarProfile from './navbar-profile'
import { useSession } from 'next-auth/react'

const Navbar: React.FC = () => {
  const { data: session } = useSession()

  return (
    <header className="h-[76px] bg-white dark:bg-darkThemeBackground w-full">
      <nav className="flex justify-between items-center px-8 py-4">
        <InputField />

        <div className="flex items-center gap-4">
          <Image
            src="/assets/navbar/languages/english.svg"
            alt="english"
            width={31}
            height={31}
            className="cursor-pointer"
          />
          {/* TODO: Add a pusling ping that shows if you have an unread message */}
          <Image
            src="/assets/navbar/notification.svg"
            alt="notifications"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/assets/navbar/message.svg"
            alt="messages"
            width={24}
            height={24}
            className="cursor-pointer"
          />

          <div className="flex gap-4">
            <NavbarProfile />

            <div>
              <h3 className="text-textColor1 dark:text-white text-base font-normal leading-7">
                {session?.user?.name}
              </h3>
              <p className="text-textColor2 text-[13px] font-normal leading-[17px]">
                Limited Plan
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar