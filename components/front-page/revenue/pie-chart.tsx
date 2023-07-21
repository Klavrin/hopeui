import { PieChart, Pie, Cell } from 'recharts'
import { useState, useEffect } from 'react'

const PieChartElement = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { name: 'Group A', value: 90, color: '#0088FE' },
    { name: 'Group B', value: 10, color: '#ffffff' }
  ]

  if (!mounted) return
  return (
    <PieChart width={68} height={68} style={{ display: 'flex' }}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry) => (
          <Cell key={entry.name} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default PieChartElement
