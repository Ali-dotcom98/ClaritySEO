import React from 'react'
import Header from '../Componenets/Header'
import SearchBar from '../Componenets/SearchBar'
import SvgPath from '../Componenets/SvgPath'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    
  return (
    <>
        <div className='flex flex-col items-center justify-center  h-screen  overflow-hidden bg-[#0A0A0A]'>
        
        <Header/>

        <SearchBar/>
        <div className=' translate-x-4 translate-y-24 '>
          <SvgPath />
        </div>
      </div>
    </>
  )
}

export default LandingPage