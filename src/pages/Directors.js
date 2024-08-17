import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then((response) => response.json())
      .then((data) => setDirectors(data))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      <div>
        {directors.map((director) => (
          <div key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Directors
