import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'


mapboxgl.accessToken = 
'pk.eyJ1Ijoic2FmYWsiLCJhIjoiY2tubmFvdHVwMTM0bDJ2bnh3b3g5amdsYiJ9.fhCd-5dCeop0Jjn3cBV9VA';

const Map = () => {

    useEffect(() => {
   
        const map = new mapboxgl.Map({
        container:"map",
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
        });
    
    
  return <Wrapper id="map"></Wrapper>
    
  
}

export default Map

const Wrapper = tw.div`
flex-1 bg-red-500

`
