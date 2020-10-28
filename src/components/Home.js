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
            totalSlides={1000}
          >
            <Slider>
              {heroes.map((hero, index) => {
                return <section key={index}>
                  <Slide index={index}>

                    <Link to={`/heroes/${hero.id}`}>
                      {hero.name}
                      <img src={hero.images.sm}></img>
                      {/* <div className="card">
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
                    </div> */}

                    </Link>



                  </Slide>
                </section>
              })}
            </Slider>
            <div className="buttons">
              <ButtonBack className="button is-light">Back</ButtonBack>
              <ButtonNext className="button is-light">Next</ButtonNext>
            </div>

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
