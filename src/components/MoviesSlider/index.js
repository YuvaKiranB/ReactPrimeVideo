// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import GetMovieItem from '../MovieItem'

const GetSlider = props => {
  const {content} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {content.map(eachItem => (
          <GetMovieItem key={eachItem.id} content={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default GetSlider
