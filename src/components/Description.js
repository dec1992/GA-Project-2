import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Description = (props) => {
  const heroName = props.hero.name

  const [comic, updateComic] = useState({})
  const [comicBookUrl, updateUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?api_key=44be91bd8aa144e2b56b0202f49e378ccc9f6ff8&format=json&query=${heroName}&limit`)
      updateComic(data)
      const { data: firstIssue } = await axios.get(`https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issue/4000-${data.results[0].first_appeared_in_issue.id}/?api_key=44be91bd8aa144e2b56b0202f49e378ccc9f6ff8&format=json`)
      updateUrl(firstIssue)
    }
    fetchData()
  }, [])

  
  if (!comicBookUrl.error) {
    return <div className="section">
      <div className="container">
        <div className="title">
          Loading ...
        </div>
        <progress className="progress is-large is-success" max="100">60%</progress>
      </div>
    </div>
  }

  return <div className="container">
    <div className="columns">
      <div className="column">
        <br></br>
        <h2 className="is-subtitle is-size-4">Description:</h2>
        <br></br>
        <p>
          {comic.results[0].deck}
        </p>
      </div>
      <div className="column">
        <br></br>
        <h2 className="is-subtitle is-size-4">{heroName}'s First Appearance:</h2>
        <br></br>
        <img src={comicBookUrl.results.image.small_url} alt={heroName} />
      </div>
    </div>
    <br></br>
  </div>
}

export default Description