import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
// import {  } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })
  ._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});
const customIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: shadow,
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

const LeafletMap = () => {
  const position: LatLngExpression = [6.358333, 5.735];

  return (
    <div className="">
      <MapContainer
        center={position}
        zoom={12}
        style={{ height: "300px", width: "100%" }}
        className="relative z-0"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="">
              <p>
                <strong>
                  Jomart Engineering Services Ltd <br />
                </strong>
                123 Engineering Road
                <br />
                Lagos, Nigeria
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6.358333,5.735"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-logo-blue px-3 py-1 text-sm text-white"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
        <Circle
          center={position}
          radius={80}
          pathOptions={{
            color: "#6228d7",
            fillColor: "#99c4e0",
            fillOpacity: 0.25,
          }}
        />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
