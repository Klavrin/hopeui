import PieChartElement from './revenue/pie-chart'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useState, useRef, useEffect } from 'react'

interface DataItem {
  title: string
  income: string
}

const SummaryCards = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false })
  const [divWidth, setDivWidth] = useState(0)
  const divRef = useRef<any>(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const newWidth = entry.target.clientWidth
        setDivWidth(newWidth)
      })
    })

    resizeObserver.observe(divRef.current)

    return () => {
      resizeObserver.unobserve(divRef.current)
    }
  }, [])

  const data: DataItem[] = [
    { title: 'Total Sales', income: '$560K' },
    { title: 'Total Profit', income: '$185K' },
    { title: 'Total Cost', income: '$375K' },
    { title: 'Revenue', income: '$742K' },
    { title: 'Net Income', income: '$150K' },
    { title: 'Today', income: '$4600' }
  ]

  return (
    <div
      className="w-full flex overflow-hidden relative md:bottom-14 bottom-0"
      ref={divWidth < 1590 ? emblaRef : null}
    >
      <div
        ref={divRef}
        className="w-full mx-auto flex gap-10 md:px-0 px-8"
        style={{ justifyContent: divWidth < 1590 ? 'start' : 'center' }}
      >
        {data.map((item) => (
          <div
            key={item.title}
            className="md:basis-[230px] basis-full shrink-0 grow-0 bg-white dark:bg-darkThemeBackground flex items-center gap-6 p-6 rounded-lg md:first:ml-8 md:last:mr-8 m-0"
          >
            <PieChartElement />

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