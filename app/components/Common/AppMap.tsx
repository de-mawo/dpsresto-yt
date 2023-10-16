"use client";
import Map, { Layer, LineLayer, Marker, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Image from "next/image";
import type { Feature,  LineString } from "geojson";

type MapProps = {
  width: number;
  height: number;
};

const AppMap = ({ width, height }: MapProps) => {
  const [viewState, setViewState] = useState({
    latitude: -33.93441,
    longitude: 18.4173,
    zoom: 14,
  });
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

  const geojson: Feature<LineString> = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [18.418020, -33.934069],
        [18.418038, -33.934069],
        [18.415931, -33.933923],
        [18.415232, -33.933709],
        [18.414605, -33.93299],
        [18.413515, -33.931668],
        [18.411704, -33.93373],
        [18.408799, -33.932071],
        [18.409, -33.9319],
      ],
    },
  };

  const routeLayer: LineLayer = {
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#0ea5e9",
      "line-width": 5,
    },
  };

  return (
    <Map
    
      mapboxAccessToken={token}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width, height }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={18.418020} latitude={-33.934069} anchor="bottom">
        <Image src="/img/loc.png" alt="mappin" width={30} height={30} />
      </Marker>

      <Source id="route" type="geojson" data={geojson}>
        <Layer {...routeLayer} />
      </Source>
    </Map>
  );
};

export default AppMap;