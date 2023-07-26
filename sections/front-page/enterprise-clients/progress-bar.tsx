import * as Progress from '@radix-ui/react-progress'
import { useState } from 'react'

interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Progress.Root
      className="relative overflow-hidden bg-blackA9 bg-bg2 dark:bg-[#455990] rounded-full max-w-full h-[10px]"
      style={{
        transform: 'translateZ(0)'
      }}
      value={progress}
    >
      <Progress.Indicator
        className={`w-full h-full ${
          progress === 100 ? 'bg-success' : 'bg-primary'
        }`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}

export default ProgressBar
