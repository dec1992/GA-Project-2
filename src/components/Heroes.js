import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Heroes = () => {
  const [heroes, updatesHeroes] = useState([])
  const [heroFilter, updateHeroFilter] = useState('All')
  const [searchText, updateSearchText] = useState('')

  useEffect(() => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(resp => {
        updatesHeroes(resp.data)
      })

  }, [])

  if (!heroes[1]) {
    return <div className="section">
      <div className="container">
        <div className="title">
          Loading ...
        </div>
        <progress className="progress is-large is-warning" max="100">60%</progress>
      </div>
    </div>
  }
  function filterHeroes() {
    const filteredHeroes = heroes.filter(hero => {
      const name = hero.name.toLowerCase()
      const filterText = searchText.toLocaleLowerCase()
      return name.includes(filterText)
        && (heroFilter === 'All' || hero.biography.publisher === heroFilter)
    })
    return filteredHeroes
  }
  function getPublishers() {
    const mappedHeroes = heroes.map((hero => hero.biography.publisher))
    const publisherList = new Set(mappedHeroes)
    const arrayPublishers = Array.from(publisherList)
    return arrayPublishers
  }

  return <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <input
            className="input is-rounded is-warning"
            placeholder="Search for a hero.."
            onChange={(event) => updateSearchText(event.target.value)}
            value={searchText}
          />
        </div>
        <div className="column">
          <div className="select is-rounded is-warning">
            <select
              value={heroFilter}
              onChange={(event) => updateHeroFilter(event.target.value)}>
              <option>All</option>
              {getPublishers().map((publisher, index) => {
                return <option key={index}>{publisher}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    </div>

    <div className="columns is-multiline is-mobile">
      {filterHeroes().map((hero, index) => {
        return <div
          className="column is-one-third-desktop is-half-tablet is-half-mobile"
          key={index}
        >

          <Link to={`/heroes/${hero.id}`}>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <h2 className="title is-4">{hero.name}</h2>
                  </div>
                </div>
              </div>
              <div className="card-image">
                <figure className="image is-3by4">
                  <img src={hero.images.sm} alt={hero.name} />
                </figure>
              </div>
            </div>

          </Link>



        </div>
      })}
    </div>

  </div>

}

export default Heroes