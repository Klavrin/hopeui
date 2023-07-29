import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const SidebarTabs = () => {
  const { theme } = useTheme()
  const router = useRouter()

  const sidebarTabs = {
    home: [
      {
        title: 'Dashboard',
        path: '/',
        icon: 'category.svg'
        // style: 'bg-primary text-white'
      },
      { title: 'Menu Style', icon: 'filter.svg', arrow: true, disabled: true }
    ],
    pages: [
      { title: 'Example', icon: 'game.svg', arrow: true, disabled: true },
      {
        title: 'Widgets',
        icon: 'ticket-star.svg',
        arrow: true,
        disabled: true
      },
      {
        title: 'Maps',
        path: '/maps',
        icon: 'location.svg',
        arrow: true,
        link: '/maps'
      },
      {
        title: 'Authentification',
        icon: 'shield-done.svg',
        arrow: true,
        disabled: true
      },
      { title: 'Users', icon: 'users.svg', arrow: true, disabled: true },
      { title: 'Error 404', icon: 'info-circle.svg', disabled: true },
      { title: 'Error 500', icon: 'danger.svg', disabled: true },
      { title: 'Maintenance', icon: 'bookmark.svg', disabled: true }
    ],
    elements: [
      { title: 'Components', icon: 'wallet.svg', arrow: true, disabled: true },
      { title: 'Form', icon: 'document.svg', arrow: true, disabled: true },
      { title: 'Table', icon: 'setting.svg', arrow: true, disabled: true },
      { title: 'Icons', icon: 'info.svg', arrow: true, disabled: true }
    ]
  }

  return (
    <div className="h-full px-3 overflow-y-auto">
      <div>
        <h2 className="text-textColor3 text-base font-semibold leading-7 mt-6 mb-4 ml-6">
          Home
        </h2>

        {sidebarTabs.home.map((tab) => (
          <Link
            href="/"
            key={tab.title}
            className={`w-full h-[44px] px-6 py-2 flex justify-between items-center rounded-[4px] text-textColor2 ${
              tab.disabled && 'opacity-50'
            } ${router.pathname === tab.path && 'bg-primary text-white'}`}
          >
            <div className="flex gap-4">
              <Image
                src={`/assets/sidebar/${tab.icon}`}
                alt=""
                width={24}
                height={24}
              />
              <h4 className="text-base font-normal leading-7">{tab.title}</h4>
            </div>

            {tab.arrow && (
              <Image
                src="/assets/sidebar/tab-arrow.svg"
                alt=""
                width={24}
                height={24}
              />
            )}
          </Link>
        ))}

        <hr className="h-[1px] border-none mx-[26px] bg-bg2 dark:bg-[#343948]" />
      </div>
      <div>
        <h2 className="text-textColor3 text-base font-semibold leading-7 mt-6 mb-4 ml-6">
          Pages
        </h2>

        {sidebarTabs.pages.map((tab) => (
          <Link
            href={tab.link ? tab.link : '/'}
            key={tab.title}
            className={`w-full h-[44px] px-6 py-2 flex justify-between items-center rounded-[4px] text-textColor2 ${
              tab.disabled && 'opacity-50'
            } ${router.pathname === tab.path && 'bg-primary text-white'}`}
          >
            <div className="flex gap-4">
              <Image
                src={`/assets/sidebar/${tab.icon}`}
                alt=""
                width={24}
                height={24}
              />
              <h4 className="text-base font-normal leading-7">{tab.title}</h4>
            </div>

            {tab.arrow && (
              <Image
                src="/assets/sidebar/tab-arrow.svg"
                alt=""
                width={24}
                height={24}
                className="self-end"
              />
            )}
          </Link>
        ))}

        <hr className="h-[1px] border-none mx-[26px] bg-bg2 dark:bg-[#343948]" />
      </div>
      <div>
        <h2 className="text-textColor3 text-base font-semibold leading-7 mt-6 mb-4 ml-6">
          Elements
        </h2>

        {sidebarTabs.elements.map((tab) => (
          <Link
            href="/"
            key={tab.title}
            className={`w-full h-[44px] px-6 py-2 flex justify-between items-center rounded-[4px] text-textColor2 ${
              tab.disabled && 'opacity-50'
            }`}
            //* no path becuase none of the links are functional for now
          >
            <div className="flex gap-4">
              <Image
                src={`/assets/sidebar/${tab.icon}`}
                alt=""
                width={24}
                height={24}
              />
              <h4 className="text-base font-normal leading-7">{tab.title}</h4>
            </div>

            {tab.arrow && (
              <Image
                src="/assets/sidebar/tab-arrow.svg"
                alt=""
                width={24}
                height={24}
              />
            )}
          </Link>
        ))}

        <hr className="h-[1px] border-none mx-[26px] bg-bg2 dark:bg-[#343948]" />
      </div>

      <Image
        src="/assets/sidebar/hashtag-sidebar.svg"
        alt=""
        width={543}
        height={543}
        className={`overflow-hidden absolute right-3 ${
          theme === 'light' ? 'opacity-20' : 'opacity-5'
        }`}
      />
    </div>
  )
}

export default SidebarTabs
