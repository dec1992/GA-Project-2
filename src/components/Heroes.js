import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Heroes = () => {
  const [heroes, updatesHeroes] = useState([])
  const [heroFilter, updateHeroFilter] = useState('Select your Publisher')
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
        <progress className="progress is-large is-success" max="100">60%</progress>
      </div>
    </div>
  }
  function filterHeroes() {
    const filteredHeroes = heroes.filter(hero => {
      const name = hero.name.toLowerCase()
      const filterText = searchText.toLocaleLowerCase()
      return name.includes(filterText)
        && (heroFilter === 'Select your Publisher' || hero.biography.publisher === heroFilter)
    })
    return filteredHeroes
  }
  function getPublishers() {
    const mappedHeroes = heroes.map((hero => hero.biography.publisher))
    const publisherList = new Set(mappedHeroes)
    const arrayPublishers = Array.from(publisherList)
    return arrayPublishers
  }

  return <section className="hero is-medium-with-navbar is-success">
    <div className="hero-body">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="column">
              <input
                className="input is-rounded is-success"
                placeholder="Search your hero.."
                onChange={(event) => updateSearchText(event.target.value)}
                value={searchText}
              />
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <div className="column">
              <div className="select is-rounded is-success">
                <select
                  value={heroFilter}
                  onChange={(event) => updateHeroFilter(event.target.value)}>
                  <option>Select your Publisher</option>
                  {getPublishers().map((publisher, index) => {
                    return <option key={index}>{publisher}</option>
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-multiline is-mobile">
        {filterHeroes().map((hero, index) => {
          return <div
            className="column is-one-quarter-desktop is-half-tablet is-half-mobile"
            key={index}
          >
            <Link to={`/project-2/heroes/${hero.id}`}>
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

  </section >
}

export default Heroes