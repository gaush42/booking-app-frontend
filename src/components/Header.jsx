import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faCar, faHotel, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faHotel}/>
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane}/>
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar}/>
                <span>Car Rental</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBinoculars}/>
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi}/>
                <span>Taxi</span>
            </div>
        </div>
        <h1 className="headerTitle">A Lifetime of discounts? Its Genius</h1>
        <p className="headerDesc">
            c jd vdf jnvkfj v dfv ifjb vj viefjiv jd dijvnerh j vfevbuier j enviudbve rkgjnievie vienvie veiev ie viebwefew efergfdv.
        </p>
        <button className="headerBtn">Sign in / Register </button>
        </div>
    </div>
  )
}

export default Header