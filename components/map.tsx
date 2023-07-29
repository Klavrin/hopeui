'use client'
import { MapContainer, TileLayer } from 'react-leaflet'

function Map() {
  return (
    <div className="h-[555px] bg-bg1 dark:bg-darkThemeBackground md:px-6 px-2 md:pt-6 pt-2 md:pb-24 pb-[58px] rounded-lg">
      <h2 className="text-textColor1 dark:text-[#D3D3D3] text-[23px] font-medium leading-[30px]">
        Vector
      </h2>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={10}
        className="w-full h-full z-0 md:mt-11 mt-5"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map
