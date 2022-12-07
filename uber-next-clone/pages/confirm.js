import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {

const router  = useRouter();
const {pickup , dropoff} = router.query



    const [pickupCoordinates, setPickupCoordinates]= useState(); 
    const [dropoffCoordinates, setDropoffCoordinates]= useState();  


const getPickupCordinates=(pickup)=>{
   
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
    new URLSearchParams({
        access_token:"pk.eyJ1Ijoic2FmYWsiLCJhIjoiY2tubmFvdHVwMTM0bDJ2bnh3b3g5amdsYiJ9.fhCd-5dCeop0Jjn3cBV9VA",
        limit:1
    })
    )
    .then(response=> response.json())
    .then(data=>{
        setPickupCoordinates(data.features[0].center);
    })
}

const getDropoffCordinates=(dropoff)=>{
   
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
    new URLSearchParams({
        access_token:"pk.eyJ1Ijoic2FmYWsiLCJhIjoiY2tubmFvdHVwMTM0bDJ2bnh3b3g5amdsYiJ9.fhCd-5dCeop0Jjn3cBV9VA",
        limit:1
    })
    )
    .then(response=> response.json())
    .then(data=>{
        console.log("DropOff")
        setDropoffCoordinates(data.features[0].center);
    })
}





useEffect(()=>{
  getPickupCordinates(pickup);
  getDropoffCordinates(dropoff);
},[pickup, dropoff]);




  return (
    <Wrapper>
    <Map 
    pickupCoordinates={pickupCoordinates}
    dropoffCoordinates= {dropoffCoordinates}
    />

    <RideContainer>
    <RideSelector/>

        <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm UberX
            </ConfirmButton>
    
        </ConfirmButtonContainer>

    </RideContainer>

    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
