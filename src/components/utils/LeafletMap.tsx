import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as  unknown as{ _getIconUrl?: () => string})._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

const LeafletMap = () => {
  const position: LatLngExpression = [6.358333, 5.735];

  return (
    <MapContainer
      center={position}
      zoom={23}
      style={{ height: "300px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <p>
            <strong>
              Jomart Engineering Services Ltd <br />
            </strong>
            123 Engineering Road
            <br />
            Lagos, Nigeria
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap