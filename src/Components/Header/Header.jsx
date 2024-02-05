import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import {ImSearch} from "react-icons/im"
import Anime from '../Anime/Anime'
import Movies from '../Movies/Movies'
import Toprated from '../Toprated/Toprated'
import Tvshows from '../Tvshows/Tvshows'
import Home from '../Home/Home'
const Header = () => {

    // console.log(logo)

  return (
   
    <nav className="header">
        <img src={logo} alt="Logo" />

        <div>
            < Link to="/" element= {<Home/> }>Home</Link>
            < Link to="/tvshows" element= {<Tvshows/> }>TV Shows</Link>
            < Link to="/Movies" element={Movies}>Movies</Link>
            < Link to="/Anime" element={Anime}>Anime</Link>
            < Link to="/TopRated" element={Toprated}>Top Rated</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header
