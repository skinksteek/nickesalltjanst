import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Viktigt för Leaflet-stilar

// Fix för Leaflet-ikoner i Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom yellow marker
const yellowMarkerIcon = L.divIcon({
  html: `
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#ffea00"
        stroke="#1f2933"
        stroke-width="1.5"
      />
      <circle cx="12" cy="9" r="3" fill="#1f2933" />
    </svg>
  `,
  className: "custom-marker",
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -40],
});

export default function ServiceMap({ className }) {
  const storforsPosition = [59.53, 14.27];

  return (
    <MapContainer
      className={className}
      center={storforsPosition}
      zoom={9}
      scrollWheelZoom={false}
    >
      {/* OpenStreetMap tiles – fungerar utan API-key */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Markers */}
      <Marker position={storforsPosition} icon={yellowMarkerIcon}>
        <Popup>Storfors</Popup>
      </Marker>

      <Marker position={[59.31, 14.11]} icon={yellowMarkerIcon}>
        <Popup>Kristinehamn</Popup>
      </Marker>

      <Marker position={[59.71, 14.17]} icon={yellowMarkerIcon}>
        <Popup>Filipstad</Popup>
      </Marker>

      <Marker position={[59.23, 14.43]} icon={yellowMarkerIcon}>
        <Popup>Degerfors</Popup>
      </Marker>

      <Marker position={[59.33, 14.52]} icon={yellowMarkerIcon}>
        <Popup>Karlskoga</Popup>
      </Marker>
    </MapContainer>
  );
}
