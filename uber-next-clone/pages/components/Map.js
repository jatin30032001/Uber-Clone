import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'


mapboxgl.accessToken = 
'pk.eyJ1Ijoic2FmYWsiLCJhIjoiY2tubmFvdHVwMTM0bDJ2bnh3b3g5amdsYiJ9.fhCd-5dCeop0Jjn3cBV9VA';
//'pk.eyJ1IjoiZHJha29zaSIsImEiOiJja2x1YW9jdWswOHcyMnVvZXQ1aTVqcHBnIn0.G0SLu_zwAEU9_q8FIkHeaQ'

const Map = (props) => {
console.log(props)
    useEffect(() => {
   
        const map = new mapboxgl.Map({
        container:"map",
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-99.29011, 39.39172],
        zoom: 3,
        })

        if(props.pickupCoordinates){
          addToMap(map,props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates);
        }
 
if(props.pickupCoordinates && props.dropoffCoordinates){
  map.fitBounds([
    props.pickupCoordinates,
    props.dropoffCoordinates
  ],{
    padding:60
  })
}



      },[props.pickupCoordinates, props.dropoffCoordinates]);

        const addToMap =(map, coordinates)=>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
         .addTo(map);
        }
       
    
       
  return <Wrapper id="map"></Wrapper>
    
  
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2

`
