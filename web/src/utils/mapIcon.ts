import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [170, 2],
})

export default mapIcon;