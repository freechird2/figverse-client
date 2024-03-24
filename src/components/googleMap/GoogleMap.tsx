"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSubway from "../../../public/images/png/subway.png";
import {
  GoogleMap as ReactGoogleMap,
  LoadScriptNext,
  MarkerF,
  OverlayView,
} from "@react-google-maps/api";
import { CustomGoogleMapStyle } from "./customMapStyle";
import { mediaQuery } from "@styles/mediaQuery";
import Image from "next/image";
const Container = styled.div`
  width: 100%;
  aspect-ratio: 480/586;
  ${mediaQuery("tabletL")} {
    width: min(480px, 100%);
  }
`;
const containerStyle = {
  width: "100%",
  aspectRatio: "480/586",
};

const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const GoogleMap = () => {
  const GOOGLE_API_KEY = "AIzaSyCEN-s6p0zhKnKvBWvlYYwFIbUyx7h5W8Q";
  const cordinates = { lat: 37.548587799072266, lng: 126.92330169677734 };
  const 상수역좌표 = {
    lat: 37.54758,
    lng: 126.922965,
  };

  const 상수역좌표2 = {
    lat: 37.54748,
    lng: 126.922965,
  };

  //   const { isLoaded } = useJsApiLoader({
  //     id: "google-map-script",
  //     googleMapsApiKey: GOOGLE_API_KEY,
  //   });
  const [map, setMap] = React.useState<google.maps.Map | undefined>(undefined);
  const [zoomLevel, setZoomLevel] = useState<number>(17);
  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(cordinates);
    map.fitBounds(bounds);
    setMap(map);
    setTimeout(() => {
      map.setOptions({ zoom: 17 });
    }, 500);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(undefined);
  }, []);
  useEffect(() => {
    if (map) {
      setZoomLevel(map.getZoom()!);
    }
  }, [map]);
  return (
    <Container>
      <LoadScriptNext id="google-map-script" googleMapsApiKey={GOOGLE_API_KEY}>
        <ReactGoogleMap
          mapContainerStyle={containerStyle}
          center={cordinates}
          onLoad={onLoad}
          zoom={17}
          onZoomChanged={() => {
            if (map) setZoomLevel(map.getZoom()!);
          }}
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true,
            styles: CustomGoogleMapStyle,
            maxZoom: 18,
          }}
        >
          {zoomLevel >= 17 && (
            <>
              {zoomLevel === 17 && (
                <MarkerF
                  position={상수역좌표2}
                  icon={{ url: "/images/svg/subway_total.svg" }}
                />
              )}
              {zoomLevel === 18 && (
                <MarkerF
                  position={상수역좌표}
                  icon={{ url: "/images/svg/subway_total.svg" }}
                />
              )}
            </>
          )}
          <MarkerF position={cordinates} />
        </ReactGoogleMap>
      </LoadScriptNext>
    </Container>
  );
};

export default GoogleMap;
