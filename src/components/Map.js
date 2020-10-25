import React, { useRef, useEffect, useState } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'

import { readDocument } from '../services'

export default function BikeMap() {
  const mapRef = useRef()
  //const [displayedDevices, setDevices] = useState([])

  useEffect(() => {
    mapRef.current.leafletElement.locate({
      setView: true,
    })
    // readDocument('/devices/MCbhuquFTFw0S65wbhAh')
  }, [])

  return (
    <Map ref={mapRef} center={[50, 10]} zoom={5} onlocationfound={onLocationFound}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  )
  function onLocationFound(event) {
    Leaflet.marker(event.latlng)
      .addTo(mapRef.current.leafletElement)
      .bindPopup('You are within ' + event.accuracy + ' meters from this point')
      .openPopup()

    Leaflet.circle(event.latlng, event.accuracy).addTo(mapRef.current.leafletElement)
  }
}
