import React from 'react'
import '../../style/home.css'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Featured from '../../components/Featured'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <div className="homeTitle">Browse by property type</div>
      </div>
    </div>
  )
}

export default Home