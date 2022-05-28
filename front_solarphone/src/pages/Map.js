import ReactDOM from "react-dom";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Popup from "./components/Popup";
import "./Map.css";
import { analytics } from "../firebase";
import { getDocs, collection } from "@firebase/firestore";

mapboxgl.accessToken = "pk.eyJ1Ijoibml2ZWFsZSIsImEiOiJjbDNuNjhpbHEwMWhsM21seGI1M3lxcXo3In0.J17mrkYfIzcoKDfhIrcfBw";

const Map = () => {
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    const [bornes, setBorne] = useState([]);
    const borneCollectionRef = collection(analytics, "Borne")

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: "mapbox://styles/mapbox/streets-v11",
            center: [6.1288847, 45.8992348],
            zoom: 15
        });
        // add navigation control (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        // Add geolocate control to the map
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
          })
        );

        const getBornes = async () => {
          const data = await getDocs(borneCollectionRef);
          setBorne(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
          console.log(bornes);
        };

        getBornes();
        //return () => map.remove();
    }, []); // eslint-disable-linereact-hooks/exhaustive-deps

    const createMarkers = async () => {
      await bornes.map((borne) => {
        const popup = new mapboxgl.Popup().setText(`Nombre de prise: ${borne.PriseDisponible}, Nombre de prise disponible: ${borne.PriseDisponible}, Batterie: ${borne.Batterie}%.`);
        const el = document.createElement('div');
        el.id = borne.id;
        new mapboxgl.Marker(el).setLngLat([borne.Latitude, borne.Longitude]).setPopup(popup).addTo(map);
      });
    }

    createMarkers();

    return (
      <div className="map-container" ref={mapContainerRef}>
      {bornes.map((borne) => {
        return (
          <script>
          const popup = new mapboxgl.Popup().setText(`Nombre de prise: ${borne.PriseDisponible}, Nombre de prise disponible: ${borne.PriseDisponible}, Batterie: ${borne.Batterie}%.`);
          const el = document.createElement('div');
          el.id = borne.id;
          new mapboxgl.Marker(el).setLngLat([borne.Latitude, borne.Longitude]).setPopup(popup).addTo(map);
          </script>
        );
      })}
      </div>
    );
};

export default Map;
