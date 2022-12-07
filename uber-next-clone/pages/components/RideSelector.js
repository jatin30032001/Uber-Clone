

import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = () => {
  return (
   <Wrapper>
       <Title> Choose a ride or Swipe up for more</Title>
       <CarList>
         {/* {carList.map((car)=>{

            <Car>
            <CarImage src={car.imgUrl}/>
            <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
            </Car>

         })} */}

           <Car >
            <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
            <CarDetails>
                <Service>UberX</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
            </Car>
            
            <Car >
            <CarImage src="https://i.ibb.co/Xx4G91m/uberblack.png"/>
            <CarDetails>
                <Service>Black</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
            </Car>

            <Car >
            <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
            <CarDetails>
                <Service>Comfort</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
            </Car>

            <Car >
            <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png"/>
            <CarDetails>
                <Service>Uber</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
            </Car>

            <Car >
            <CarImage src="https://i.ibb.co/1nStPWT/uberblacksuv.png"/>
            <CarDetails>
                <Service>Black SUV</Service>
                <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
            </Car>

           
        
       </CarList>
   </Wrapper>
  )
}

export default RideSelector
 const Wrapper = tw.div`
 flex flex-1 overflow-y-scroll flex-col
 `
 const Title = tw.div`
 text-gray-500 text-center text-xs py-2 border-b
 `
 const CarList = tw.div`
 overflow-y-scroll
 `
 const Car = tw.div`
 flex p-4 item-center
 `
 const CarImage = tw.img`
 h-14 mr-4
 `
 const CarDetails= tw.div`
 flex-1
 `
 const Service = tw.div`
 font-medium
 `
 const Price = tw.div`
 text-sm
 `
 const Time = tw.div`
 text-xs text-blue-500
 `
 
 