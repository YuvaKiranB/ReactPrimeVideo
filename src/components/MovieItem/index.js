// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const GetMovieItem = props => {
  const {content} = props
  const {thumbnailUrl, videoUrl} = content

  const overlayStyles = {
    backgroundColor: 'transparent',
  }

  return (
    <div className="popupContainer">
      <Popup
        modal
        trigger={
          <button type="button" className="movieItemButton">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="movieItemImage"
            />
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <div className="videoContainer">
            {/* eslint-disable-next-line */}
            <button
              type="button"
              className="closeButton"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="closeIcon" />
            </button>
            <div className="videoContainer">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default GetMovieItem
