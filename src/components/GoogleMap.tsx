import GoogleMapReact from "google-map-react"
import { useEffect, useState } from "react"
interface MapMarkerProps {
  text: string
}

const AnyReactComponent: React.FC<MapMarkerProps> =  ({text})=>{
  return <div>{text}</div>
}

function Googlemap(){
  const [currentLocation, setCurrentLocation] = useState<{lat: number; lng: number}|null>(null);
  useEffect(()=>{
  
    // 使用 Geolocation API 取得目前位置
    if(navigator.geolocation){ 
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude} = position.coords;
            setCurrentLocation({lat: latitude, lng: longitude})
            console.log(currentLocation)
        },
        (error) => {
          console.log('取得目前位置失敗:', error.message)
        }
      )
    } else {
      console.log('瀏覽器不支援 Geolocation API')
    }
  }, [])

  const center = currentLocation || { lat: 25.0330, lng: 121.5654 };

  const reactkey = import.meta.env.VITE_APP_KEY;
  // 設置地圖中心點位置
  // const center = {
  //   lat: 25.0330,
  //   lng: 121.5654
  // }
  // const truckPosition = {
  //   lat: 25.0456,
  //   lng: 121.5238
  // }

  // const location1Position = {
  //   lat: 25.0372,
  //   lng: 121.4986
  // };

  // // 範例垃圾車位置
  // const garbageTruckPosition = {
  //   lat: 25.0456,
  //   lng: 121.5238
  // }

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{key: reactkey}}
        defaultCenter={center}
        defaultZoom={14}
      >
        {/* 在地圖上標記目前位置 */}
        {currentLocation && (
          <AnyReactComponent
            lat={currentLocation.lat}
            lng={currentLocation.lng}
            text="目前位置"
          />
        )}

      </GoogleMapReact>
    </div>
  )
}

export default Googlemap