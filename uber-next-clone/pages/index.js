import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'




export default function Home() {


  return (
    <Wrapper>

      <Map />
      <ActionsItems>

        <Header>
          <UberLogo src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-2018-present.jpg"></UberLogo>
          <Profile>
            <Name>Jatin Raj </Name>
            <UserImage
              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"/>
          </Profile>
        </Header>

        <ActionsButtons>

          <ActionButton>
            <ActionButtonImage
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_863,h_485/f_auto,q_auto/products/carousel/UberX.png" />Ride</ActionButton>

          <ActionButton>
            <ActionButtonImage
              src="http://i.ibb.co/n776JLm/bike.png"/>Wheels</ActionButton>

          <ActionButton>
            <ActionButtonImage
              src="http://i.ibb.co/5RjchBg/uberschedule.png"/>Reserve</ActionButton>

        </ActionsButtons>

        

      </ActionsItems>

    </Wrapper>

  )
}

const Wrapper = tw.div`
flex flex-col bg-white-300 h-screen
`


const ActionsItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between item-center
`
const UberLogo = tw.img`
h-20
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionsButtons = tw.div`
flex
`
const ActionButton = tw.div`
 flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
 transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`