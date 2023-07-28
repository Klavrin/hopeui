import ApexCharts, { Props } from 'react-apexcharts'
import { useTheme } from 'next-themes'

const Chart = () => {
  const { theme } = useTheme()

  const chartOptions: Props = {
    options: {
      chart: {
        toolbar: { show: false },
        foreColor: theme === 'light' ? '#8A92A6' : '#5C6CA5'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug']
      },
      legend: { show: false },
      grid: { show: false },
      stroke: { curve: 'smooth', width: 3 },
      fill: {
        type: 'gradient',
        opacity: 0,
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 70]
        }
      },
      tooltip: {
        theme: theme === 'light' ? 'light' : 'dark'
      }
    },
    series: [
      {
        name: 'Sales',
        data: [94, 80, 94, 80, 94, 80, 94],
        color: '#3A57E8'
      },
      {
        name: 'Cost',
        data: [72, 60, 84, 60, 74, 60, 78],
        color: '#379BFF'
      }
    ]
  }

  return (
    <div className="w-full absolute -translate-x-6 translate-y-20 px-6">
      <ApexCharts
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        width="100%"
        height={319}
      />
    </div>
  )
}

export default Chart
