import React, { useEffect, useRef } from 'react';

import 'styles/Map.scss';

const Map = () => {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const position = new kakao.maps.LatLng(37.5427547, 126.938526);
  const mapOptions = {
    center: position,
    level: 4
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const marker = new kakao.maps.Marker({ position });
    const content = `
      <div class="customoverlay">
        <span>포썸</span>
      </div>`;

    new kakao.maps.CustomOverlay({
      map,
      position,
      content
    });

    marker.setMap(map);

    return () => {};
  });

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: '100%', height: '350px', display: 'block' }}
    ></div>
  );
};

export default Map;
