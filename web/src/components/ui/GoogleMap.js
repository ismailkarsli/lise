import React from "react";
import PropTypes from "prop-types";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapMoney = (props) => {
  const position = {
    lat: props.latitude ? props.latitude : 41,
    lng: props.longitude ? props.longitude : 29,
  };

  const { trackMaps, addMarker } = props;
  const bounds = new window.google.maps.LatLngBounds();

  const renderAddMarker = () => {
    if (addMarker) {
      return <Marker position={position} draggable={!!props.draggable} />;
    } else {
      return undefined;
    }
  };

  const renderMarkes = (markers) => {
    return markers.map((marker, index) => {
      const lat = marker.location.latitude;
      const lng = marker.location.longitude;
      const latLng = new window.google.maps.LatLng(lat, lng);
      bounds.extend(latLng);
      return (
        <Marker
          key={index}
          label={(index + 1).toString()}
          position={{
            lat: marker.location.latitude,
            lng: marker.location.longitude,
          }}
          draggable={false}
        />
      );
    });
  };

  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        center={new window.google.maps.LatLng(props.latitude, props.longitude)}
      >
        {renderAddMarker()}

        {renderMarkes(trackMaps)}
      </GoogleMap>
    </div>
  );
};

MapMoney.propType = {
  trackMaps: PropTypes.array,
  liveMarkers: PropTypes.array,
  addMarker: PropTypes.bool,
  isLiveMarker: PropTypes.bool,
};
MapMoney.defaultProps = {
  trackMaps: [],
  liveMarkers: [],
  addMarker: false,
  isLiveMarker: false,
};

export default withScriptjs(withGoogleMap(MapMoney));
