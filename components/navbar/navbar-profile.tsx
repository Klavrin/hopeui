import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useSession, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'

const NavbarDropdown = () => {
  const { data: session } = useSession()
  const { setTheme, theme } = useTheme()

  const buttons = [
    { title: 'Profile' },
    {
      title: 'Change Theme',
      onItemClick: () => setTheme(theme === 'light' ? 'dark' : 'light')
    },
    { title: 'Sign Out', onItemClick: () => signOut() }
  ]

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <img
          src={session?.user?.image as string}
          alt="user-profile"
          width={45}
          height={45}
          className="rounded-[30px] cursor-pointer"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white dark:bg-veryDarkThemeBackground rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {buttons.map((button) => (
            <DropdownMenu.Item
              key={button.title}
              onClick={button.onItemClick}
              className="group text-[13px] leading-none text-textColor2 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary data-[highlighted]:text-white"
            >
              {button.title}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow
            className={`fill-white dark:fill-veryDarkThemeBackground`}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default NavbarDropdown
