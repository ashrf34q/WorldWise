import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const [position, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();

  const mapLat = searchParams.has("lat") ? searchParams.get("lat") : 40;
  const mapLng = searchParams.has("lng") ? searchParams.get("lng") : 0;

  return (
    <div className={styles.mapContainer}>
      {/* onClick={() => navigate("form") */}
      <MapContainer
        className={styles.map}
        center={[mapLat, mapLng]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat, mapLng]} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();

  map.setView(position);

  return null;
}

export default Map;
