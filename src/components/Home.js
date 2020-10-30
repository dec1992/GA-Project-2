import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import axios from 'axios'

const Home = () => {
  const [heroes, updatesHeroes] = useState([])

  useEffect(() => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(resp => {
        updatesHeroes(resp.data)
      })

  }, [])

  function shuffle() {
    const heroesCopy = [...heroes]
    const newArray = []
    for (let i = (heroes.length - 1); i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (heroesCopy.length))
      newArray.push(heroesCopy[randomIndex])
    }
    return newArray
  }

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

  return (
    <section className="hero is-medium-with-navbar is-success">
      <div className="hero-body">
        <div className="container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            interval={5000}
            isPlaying={true}
            totalSlides={1000}
            visibleSlides={2}
          >
            <nav className="level levelButton">
              <div className="level-left">
                <ButtonBack className="level-item button is-light">Back</ButtonBack>
              </div>
              <div className="level-right">
                <ButtonNext className="level-item button is-light">Next</ButtonNext>
              </div>
            </nav>
           
            <Slider>
              {shuffle().map((hero, index) => {
                return <section key={index}>
                  <Slide>
                    <Link to={`/heroes/${hero.id}`}>
                      <div className="card">
                        <div className="card-content">
                          <div>
                            <h1 className="is-title is-size-1 " >{hero.name}</h1>
                            <figure className="image is-3by4">
                              <img src={hero.images.lg}></img>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Slide>
                </section>
              })}
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </section>
  )
}

export default Home
