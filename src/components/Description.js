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
        <div className="divider"><span></span><span>{heroName}'s First Comic Appearance:</span><span></span></div>
        <figure className="image is-3by4">
          <img src={comicBookUrl.results.image.small_url} alt={heroName} />
        </figure>
      </div>
      <div className="column"> 
        <div className="divider"><span></span><span>Story Line</span><span></span></div>
        <p>
          {comic.results[0].deck}
        </p>
      </div>
    </div>
    <br></br>
  </div>
}

export default Description