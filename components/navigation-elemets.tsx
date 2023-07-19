import Navbar from './navbar/navbar'
import Sidebar from './sidebar'

// TODO: make it to be a layout somehow

const NavigationElements = () => {
  return (
    <div className="max-w-[1920px] mx-auto flex">
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default NavigationElements
