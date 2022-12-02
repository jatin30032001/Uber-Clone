import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'




export default function Home() {

 
  return (
  <Wrapper>
    
     <Map/>
      <ActionsItems>Start</ActionsItems>
      
  </Wrapper>
   
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`


const ActionsItems = tw.div`
flex-1
`