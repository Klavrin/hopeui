import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const Chart = () => {
  const data = [
    {
      month: 'Jan',
      sales: 97,
      cost: 58
    },
    {
      month: 'Feb',
      sales: 86,
      cost: 48
    },
    {
      month: 'Mar',
      sales: 97,
      cost: 66
    },
    {
      month: 'Apr',
      sales: 86,
      cost: 47
    },
    {
      month: 'Jun',
      sales: 97,
      cost: 58
    },
    {
      month: 'Jul',
      sales: 82,
      cost: 44
    },
    {
      month: 'Aug',
      sales: 97,
      cost: 61
    }
  ]

  return (
    <ResponsiveContainer className="max-w-[1014px] h-[314px] relative right-4">
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id="gradientColor"
            x1="474.5"
            y1="-10"
            x2="474"
            y2="90.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3A57E8" stopOpacity="0.286835" />
            <stop offset="2" stopColor="#3A57E8" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="gradientColor2"
            x1="474"
            y1="-11"
            x2="474"
            y2="200.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#85C5FA" />
            <stop
              offset="0.185417"
              stopColor="#85D9FA"
              stopOpacity="0.286835"
            />
            <stop offset="0.93284" stopColor="#85F4FA" stopOpacity="0" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="sales"
          fillOpacity={1}
          fill="url(#gradientColor)"
          stopColor="#3A57E8"
          offset={1}
          strokeWidth={2}
          stroke="#3A57E8"
          stopOpacity={0.6}
        />
        <Area
          type="monotone"
          dataKey="cost"
          fillOpacity={1}
          fill="url(#gradientColor2)"
          stopColor="#85F4FA"
          strokeWidth={2}
          stroke="#3A9FFF"
          offset={1}
          stopOpacity={0.6}
        />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
