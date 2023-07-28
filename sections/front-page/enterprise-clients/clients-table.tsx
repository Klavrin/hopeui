import Image from 'next/image'
import ProgressBar from './progress-bar'

const ClientsTable = () => {
  const tableHeaderData = ['COMPANIES', 'CONTACTS', 'ORDER', 'COMPLETION']
  const tableData = [
    {
      title: 'Adidas Sportwear',
      order: '$14,000',
      completion: 60,
      companyLogo: 'companies-1',
      contacts: ['SP', 'PP', 'MM']
    },
    {
      title: 'Netflix',
      order: '$30,000',
      completion: 25,
      companyLogo: 'companies-2',
      contacts: ['SP', 'MM']
    },
    {
      title: 'Shopify Stores',
      order: '$8,500',
      completion: 100,
      companyLogo: 'companies-3',
      contacts: ['PP', 'TP']
    },
    {
      title: 'Boostrap Technologies',
      order: '$20,500',
      completion: 100,
      companyLogo: 'companies-4',
      contacts: ['SP', 'PP', 'MM', 'TP']
    },
    {
      title: 'Community First',
      order: '$9,800',
      completion: 75,
      companyLogo: 'companies-5',
      contacts: ['MM']
    }
  ]

  return (
    <div>
      <div className="w-full bg-[#F5F6FA] dark:bg-veryDarkThemeBackground grid md:grid-cols-[2fr,1fr,1fr,1fr] grid-cols-2 p-2">
        {tableHeaderData.map((item) => (
          <h3
            key={item}
            className="text-textColor2 text-base font-medium leading-7"
          >
            {item}
          </h3>
        ))}
      </div>

      <div className="w-full grid grid-rows-4">
        {tableData.map((item) => (
          <div
            key={item.title}
            className="grid md:grid-cols-[2fr,1fr,1fr,1fr] grid-cols-2 gap-7 items-center odd:bg-white even:bg-[#FBFCFC] dark:odd:bg-darkThemeBackground dark:even:bg-[#252B3B] border-b last:border-none border-bg2 dark:border-[#30384F] py-4 md:px-0 px-4 last:rounded-b-lg"
          >
            <div className="flex items-center gap-4 md:ml-4 ml-0 rounded-b-lg">
              <Image
                src={`/assets/front-page/enterprise-clients/${item.companyLogo}.svg`}
                alt=""
                width={45}
                height={45}
              />
              <h3 className="text-textColor1 dark:text-[#D3D3D3] text-base font-normal leading-7">
                {item.title}
              </h3>
            </div>

            <div className="sm:flex grid grid-cols-[45px,45px]">
              {item.contacts.map((contact) => (
                <div
                  key={contact}
                  className="min-w-[45px] h-[45px] bg-white dark:bg-primaryVeryDark rounded-full border-2 border-primary text-primary text-base font-medium leading-7 flex justify-center items-center relative sm:[&:nth-child(2)]:right-[12px] sm:[&:nth-child(3)]:right-[24px] sm:[&:nth-child(4)]:right-[36px]"
                >
                  {contact}
                </div>
              ))}
            </div>

            <h3 className="text-textColor1 dark:text-[#D3D3D3] text-base font-normal leading-7">
              {item.order}
            </h3>

            <div className="md:mr-4 mr-0">
              <h4 className="text-textColor1 dark:text-textColor2 text-base font-normal leading-7">
                {item.completion}%
              </h4>
              <ProgressBar progress={item.completion} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsTable
