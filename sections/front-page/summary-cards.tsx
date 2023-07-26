import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface DataItem {
  title: string
  income: string
  chartImage: string
}

const SummaryCards = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false })
  const [divWidth, setDivWidth] = useState(0)

  useEffect(() => {
    //? Using useRef here would cause errors when the cleanup function is called (component unmounts). Should I go with this implementation or use useRef instead?
    const sectionCards = document.querySelector('.section-cards')

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const newWidth = entry.target.clientWidth
        setDivWidth(newWidth)
      })
    })

    resizeObserver.observe(sectionCards as Element)

    return () => {
      resizeObserver.unobserve(sectionCards as Element)
    }
  }, [])

  const data: DataItem[] = [
    { title: 'Total Sales', income: '$560K', chartImage: 'chart1' },
    { title: 'Total Profit', income: '$185K', chartImage: 'chart2' },
    { title: 'Total Cost', income: '$375K', chartImage: 'chart3' },
    { title: 'Revenue', income: '$742K', chartImage: 'chart4' },
    { title: 'Net Income', income: '$150K', chartImage: 'chart5' },
    { title: 'Today', income: '$4600', chartImage: 'chart6' }
  ]

  return (
    <div
      className="w-full flex overflow-hidden relative md:bottom-14 bottom-0 md:my-0 my-4"
      ref={divWidth < 1590 ? emblaRef : null}
    >
      <div
        className="section-cards | w-full mx-auto flex gap-10 md:px-0 px-8"
        style={{ justifyContent: divWidth < 1590 ? 'start' : 'center' }}
      >
        {data.map((item) => (
          <div
            key={item.title}
            className="md:basis-[230px] basis-full shrink-0 grow-0 bg-white dark:bg-darkThemeBackground flex items-center gap-6 p-6 rounded-lg md:first:ml-8 md:last:mr-8 m-0 shadow-xl"
          >
            <Image
              src={`/assets/front-page/summary-cards/${item.chartImage}.svg`}
              alt=""
              width={68}
              height={68}
            />
            <div>
              <p className="text-textColor2 text-base font-normal leading-7">
                {item.title}
              </p>
              <h2 className="text-[19px] font-medium leading-[33.25px]">
                {item.income}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SummaryCards
