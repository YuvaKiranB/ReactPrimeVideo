// Write your code here
import GetSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="main">
      <div className="content">
        <img
          className="primeVideoImage"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="videosContainer">
          <div className="subContainer">
            <h1 className="actionMoviesHeading">Action Movies</h1>
            <GetSlider content={actionMovies} />
          </div>

          <div className="subContainer">
            <h1 className="comedyMoviesHeading">Comedy Movies</h1>
            <GetSlider content={comedyMovies} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
