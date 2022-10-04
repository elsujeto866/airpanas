import { TileLayer } from 'react-leaflet/TileLayer';
import { MapContainer } from 'react-leaflet/MapContainer';
import { useMap } from 'react-leaflet/hooks';

const MyComponent = () => {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
};

const MyMapComponent = () => {
  return (
    <MapContainer center={[-0.180653, -78.467834]} zoom={13}>
       <TileLayer
	  attribution="OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	/>
      <MyComponent />
    </MapContainer>
  )
};

export default MyMapComponent;
