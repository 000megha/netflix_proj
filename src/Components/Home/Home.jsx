import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from 'axios';
import { BiPlay } from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const apiKey = "875ea70dc20469fbb576b529ecb77d15";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const top_rated = "top_rated";
const popular = "popular";
const now_playing = "now_playing";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => (
  <img className="card" src={img} alt="cover" />
)
const Row = ({ title, arr = [] }) => (

  <div className="row">
    <h3>{title}</h3>
    <div>
      {
        arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
)
const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setpopularMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    const fatchUpcoming = async () => {
      const { data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      //  console.log(results);
      setUpcomingMovies(results);
    };
    const fatchTopRated = async () => {
      const { data: { results },
      } = await axios.get(`${url}/movie/${top_rated}?api_key=${apiKey}`);
      //  console.log(results);
      setTopRatedMovies(results);
    };
    const fatchPopular = async () => {
      const { data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      //  console.log(results);
      setpopularMovies(results);
    };
    const fatchNowPlaying = async () => {
      const { data: { results },
      } = await axios.get(`${url}/movie/${now_playing}?api_key=${apiKey}`);
      //  console.log(results);
      setNowPlayingMovies(results);
    };
    fatchUpcoming();
    fatchTopRated();
    fatchPopular();
    fatchNowPlaying();
  },

    [])

  return (
    <div className="home">
      <div className="banner" style={{
        background: popularMovies[0] ? `url(${`${imgUrl}/${popularMovies[7].poster_path}`})` : "none"
      }}>

        {topRatedMovies[5] && <h1>{topRatedMovies[5].original_title}</h1>}
        {topRatedMovies[8] && <p>{topRatedMovies[8].overview}</p>}

        <div>
          <button><BiPlay />Play </button>
          <button>Play<AiOutlinePlus /></button>
        </div>
      </div>
      <Row title={" Up Coming On Netflix"} arr={upcomingMovies} />
      <Row title={" Top Rated On Netflix"} arr={topRatedMovies} />
      <Row title={" Popular On Netflix"} arr={popularMovies} />
      <Row title={" Now Playing On Netflix"} arr={nowPlayingMovies} />
    </div>
  )
}

export default Home
