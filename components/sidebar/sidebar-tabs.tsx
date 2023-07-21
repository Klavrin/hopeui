import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const SidebarTabs = () => {
  const { theme } = useTheme()

  const sidebarTabs = {
    home: [
      {
        title: 'Dashboard',
        icon: 'category.svg',
        style: 'bg-primary text-white'
      },
      { title: 'Menu Style', icon: 'filter.svg', arrow: true }
    ],
    pages: [
      { title: 'Example', icon: 'game.svg', arrow: true },
      { title: 'Widgets', icon: 'ticket-star.svg', arrow: true },
      { title: 'Maps', icon: 'location.svg', arrow: true },
      { title: 'Authentification', icon: 'shield-done.svg', arrow: true },
      { title: 'Users', icon: 'users.svg', arrow: true },
      { title: 'Error 404', icon: 'info-circle.svg' },
      { title: 'Error 500', icon: 'danger.svg' },
      { title: 'Maintenance', icon: 'bookmark.svg' }
    ],
    elements: [
      { title: 'Components', icon: 'wallet.svg', arrow: true },
      { title: 'Form', icon: 'document.svg', arrow: true },
      { title: 'Table', icon: 'setting.svg', arrow: true },
      { title: 'Icons', icon: 'info.svg', arrow: true }
    ]
  }

  return (
    <div className="h-[92.2vh] px-3 overflow-y-auto">
      <div>
        <h2 className="text-textColor3 text-base font-semibold leading-7 mt-6 mb-4 ml-6">
          Home
        </h2>

        {sidebarTabs.home.map((tab) => (
          <Link
            href="/"
            key={tab.title}
            className={`w-full h-[44px] px-6 py-2 flex justify-between items-center rounded-[4px] text-textColor2 ${tab.style}`}
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
            href="/"
            key={tab.title}
            className="w-full h-[44px] px-6 py-2 flex justify-between items-center rounded-[4px] text-textColor2"
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
            className="w-full h-[44px] px-6 py-2 flex justify-between items-center rounded-[4px] text-textColor2"
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
        className={`overflow-hidden relative right-3 ${
          theme === 'light' ? 'opacity-20' : 'opacity-5'
        }`}
      />
    </div>
  )
}

export default SidebarTabs
