import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Description from './Description'

const Hero = (props) => {
  const heroId = props.match.params.heroId
  const [hero, updateHero] = useState({})


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
      updateHero(data)
    }
    fetchData()
  }, [])

  if (!hero.name) {
    return <div className="section">
      <div className="container">
        <div className="title">
          Loading ...
        </div>
        <progress className="progress is-large is-warning" max="100">60%</progress>
      </div>
    </div>
  }




  return <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="conatiner">
            <h1 className="is-title is-size-1">{hero.name}</h1>
            <br></br>
            <h2 className="is-subtitle is-size-4">Appearance:</h2>
            <br></br>
            <p>Gender: {hero.appearance.gender}</p>
            <p>Race: {hero.appearance.race}</p>
            <p>Height: {hero.appearance.height[1]}</p>
            <p>Weight: {hero.appearance.weight[1]}</p>
            <br></br>
            <h2 className="is-subtitle is-size-4">Biography:</h2>
            <br></br>
            <p>Full Name: {hero.biography.fullName}</p>
            <p>Alter Egos: {hero.biography.alterEgos}</p>
            <p>Aliases: {hero.biography.aliases[0]}, {hero.biography.aliases[1]}, {hero.biography.aliases[2]}</p>
            <p>Place of Birth: {hero.biography.placeOfBirth}</p>
            <p>First Appearance: {hero.biography.firstAppearance}</p>

          </div>
        </div>
        <div className="column">
          <figure className="image is-3by4">
            <img src={hero.images.lg} alt={hero.name}></img>
          </figure>
        </div>
      </div>
      <div className="container">
        <Description hero={hero} />
      </div>
    </div>
    <div className="container">
      <br></br>
      <br></br>
      <h2 className="is-subtitle is-size-4">Stats:</h2>
      <br></br>
      <p>Speed: {hero.powerstats.speed}</p>
      <progress className="progress is-medium is-warning" value={hero.powerstats.speed} max="100">{hero.powerstats.speed}</progress>
      <p>Strength: {hero.powerstats.strength}</p>
      <progress className="progress is-medium is-warning" value={hero.powerstats.strength} max="100">{hero.powerstats.strength}</progress>
      <p>Intelligence: {hero.powerstats.intelligence}</p>
      <progress className="progress is-medium is-warning" value={hero.powerstats.intelligence} max="100">{hero.powerstats.intelligence}</progress>
      <p>Combat: {hero.powerstats.combat}</p>
      <progress className="progress is-medium is-warning" value={hero.powerstats.combat} max="100">{hero.powerstats.combat}</progress>
    </div>
  </div>
}

export default Hero