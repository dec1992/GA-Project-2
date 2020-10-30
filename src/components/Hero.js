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
        <progress className="progress is-large is-success" max="100">60%</progress>
      </div>
    </div>
  }

  return <div className="section">
    <div className="container">
      <div className="divider topDivider"><span className=" topDivider"></span><span className=" topDivider">💥</span><span className=" topDivider"></span></div>
      <div className="columns">
        <div className="column">
          <h1 className="is-title has-text-centered is-size-1 heroHeader">{hero.name}'s Profile</h1>
          <div className="container">
      
            <div className="divider"><span></span><span>Stats</span><span></span></div>

            <p>Speed: {hero.powerstats.speed}</p>
            <progress className="progress  is-success" value={hero.powerstats.speed} max="100">{hero.powerstats.speed}</progress>

            <p>Strength: {hero.powerstats.strength}</p>
            <progress className="progress  is-success" value={hero.powerstats.strength} max="100">{hero.powerstats.strength}</progress>

            <p>Intelligence: {hero.powerstats.intelligence}</p>
            <progress className="progress  is-success" value={hero.powerstats.intelligence} max="100">{hero.powerstats.intelligence}</progress>

            <p>Combat: {hero.powerstats.combat}</p>
            <progress className="progress  is-success" value={hero.powerstats.combat} max="100">{hero.powerstats.combat}</progress>

            <div className="divider"><span></span><span>Appearance</span><span></span></div>

            <p>Gender: {hero.appearance.gender}</p>
            <p>Race: {hero.appearance.race}</p>
            <p>Height: {hero.appearance.height[1]}</p>
            <p>Weight: {hero.appearance.weight[1]}</p>

            <div className="divider"><span></span><span>Biography</span><span></span></div>

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

  </div>
}

export default Hero