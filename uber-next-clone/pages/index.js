import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import { useEffect , useState} from 'react'

import Map from './components/Map'
import Link from 'next/link'
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'



export default function Home() {

  const [user , setUser] = useState(null);
  const router = useRouter();

  useEffect(()=>{
    return onAuthStateChanged(auth, user =>{

      if(user){
        setUser({
          name :user.displayName,
          photoUrl :user.photoURL,
        })
      }

      else {
           setUser(null)
           router.push('/login')
      }

    })
  },[])


  return (
    <Wrapper>

      <Map />
      <ActionsItems>

        <Header>
          <UberLogo src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-2018-present.jpg"></UberLogo>
          <Profile>
            <Name>{user && user.name } </Name>
            <UserImage
              src={user && user.photoUrl}/>
          </Profile>
        </Header>

        <ActionsButtons>
           
          
          <ActionButton>
            <ActionButtonImage
              src="http://i.ibb.co/cyvcpfF/uberx.png" />
              <Link href="/search">Ride</Link></ActionButton>
              

          <ActionButton>
            <ActionButtonImage
              src="http://i.ibb.co/n776JLm/bike.png"/>Wheels</ActionButton>

          <ActionButton>
            <ActionButtonImage
              src="http://i.ibb.co/5RjchBg/uberschedule.png"/>Reserve</ActionButton>

        </ActionsButtons>


             <InputButton>
             Where to?
             </InputButton>


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
 flex bg-gray-200 flex-1 m-4 h-32 items-center flex-col justify-center rounded-lg
 transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`