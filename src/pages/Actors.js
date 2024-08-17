import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((response) => response.json())
      .then((data) => setActors(data))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor) => (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Actors
