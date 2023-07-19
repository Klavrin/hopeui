import Navbar from './navbar/navbar'
import Sidebar from './sidebar'

const NavigationElements = () => {
  return (
    <div className="max-w-[1920px] mx-auto flex">
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default NavigationElements
