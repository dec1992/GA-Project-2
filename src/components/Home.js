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


  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            interval={5000}
            isPlaying={true}
            totalSlides={1000}
          >
            <div className="buttons">
              <ButtonBack className="button is-light">Back</ButtonBack>
              <ButtonNext className="button is-light">Next</ButtonNext>
            </div>
            <Slider>
              {heroes.map((hero, index) => {
                return <section key={index}>
                  <Slide>

                    <Link to={`/heroes/${hero.id}`}>


                      <div className="card">
                        <div className="card-content">
                          <div className="columns is-mobile">
                            <div className="column">
                              <h1 className="is-title is-size-1">{hero.name}</h1>
                              <br></br>
                              <h2 className="is-subtitle is-size-4">Appearance:</h2>
                              <br></br>
                              <p>Gender: {hero.appearance.gender}</p>
                              <p>Race: {hero.appearance.race}</p>
                              <p>Height: {hero.appearance.height[1]}</p>
                              <p>Weight: {hero.appearance.weight[1]}</p>
                              <br></br>
                              <br></br>
                              <br></br>
                              <div className="button is-warning is-large">See More</div>
                            </div>
                            <div className="column">
                              <img src={hero.images.lg}></img>
                            </div>
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


  // <div className="hero is-warning is-fullheight-with-navbar">
  //   <div className="hero-body">
  //     <div className="container has-text-centered">
  //       <h1 className="title">
  //       Super Search
  //       </h1>
  //       <h2 className="subtitle">
  //        Find and compare your favourite heroes!
  //       </h2>
  //       <div className="buttons is-centered">
  //         <Link className="button is-light" to="/heroes">Search</Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default Home
