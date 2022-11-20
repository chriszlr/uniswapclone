import React, { useState, useEffect, useContext } from 'react'
import {HeroSection} from "../components/index"


const Home = () => {
  return (
    <div>
      <HeroSection accounts="hey" tokenData="DATA" />
    </div>
  )
}

export default Home