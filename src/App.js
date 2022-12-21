import React, { useEffect, useState } from 'react';
import './App.css'
import Navigation from "./component/navigation"
import BackgroundDescription from "./component/description"
import Search from "./component/search"
import Category from "./component/category"


function Movie() {
  let [movies, setMovies] = useState([])
  let [query, setQuery] = useState('inception')
  let [data, setData] = useState('inception')

  useEffect(() => {
    let loadMovies = async () => {
      let response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=399dc488`)
      let refinedResponse = await response.json()
      if (refinedResponse.Response === 'True') {
        setMovies(refinedResponse.Search)
        setData(refinedResponse.Search)
      } else {
        setMovies([])
      }
    }
    loadMovies()
  }, [])



  let filter = (val) => {
    let loadMovies = async () => {
      val.replace("\\s", '%20')
      let response = await fetch(`https://www.omdbapi.com/?s=${val}&apikey=399dc488`)
      let refinedResponse = await response.json()
      if (refinedResponse.Response === 'True') {
        setMovies(refinedResponse.Search)
      } else {
        setMovies(data)
      }

    }
    setTimeout(() => {
      loadMovies()
    }, 5000)
  }


  return (<>
    <Navigation />
    <BackgroundDescription />
    <Search
      filterMovie={filter}
    />

    <Category
      title="Movies"
      type='movie'
      collection={movies}
    />


    <Category
      title="Series"
      type='series'
      collection={movies}
    />




  </>



  );
}

export default Movie;