import ApexCharts, { Props } from 'react-apexcharts'

const Chart = () => {
  const chartOptions: Props = {
    options: {
      chart: {
        toolbar: { show: false }
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
      annotations: {},
      markers: {}
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
    <div className="w-full">
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
