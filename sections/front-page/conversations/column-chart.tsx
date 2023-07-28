'use client'
import ApexCharts, { Props } from 'react-apexcharts'
import { useTheme } from 'next-themes'

const ColumnChart = () => {
  const { theme } = useTheme()

  const columnChart: Props = {
    options: {
      chart: {
        toolbar: { show: false },
        stacked: true,
        foreColor: theme === 'light' ? '#8A92A6' : '#5C6CA5'
      },
      xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W']
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: 10,
          borderRadius: 4
        }
      },
      tooltip: {
        theme: theme === 'light' ? 'light' : 'dark'
      },
      legend: { show: false }
    },
    series: [
      {
        name: 'Failed Deals',
        data: [30, 50, 55, 50, 30, 80, 30, 40, 50, 55],
        color: '#3A57E8'
      },
      {
        name: 'Successful Deals',
        data: [40, 50, 35, 60, 40, 60, 60, 30, 50, 35],
        color: '#379BFF'
      }
    ]
  }

  return (
    <div className="w-full h-full">
      <ApexCharts
        options={columnChart.options}
        series={columnChart.series}
        type="bar"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default ColumnChart
