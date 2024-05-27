import { faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Difference.css'
const Difference = () => {
  return (
    <div className='diff'>
      <h2>what makes us different</h2>
      <div className="difference-container">
        <div className="difference-content">
          <FontAwesomeIcon icon={faVoicemail} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus praesentium placeat tempore doloremque minima debitis ratione sunt voluptates! Tempora vero quisquam optio id fuga! Facere vel obcaecati autem maiores veritatis?</p>
        </div>
        <div className="difference-content">
          <FontAwesomeIcon icon={faVoicemail} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus praesentium placeat tempore doloremque minima debitis ratione sunt voluptates! Tempora vero quisquam optio id fuga! Facere vel obcaecati autem maiores veritatis?</p>

        </div>
        <div className="difference-content">
          <FontAwesomeIcon icon={faVoicemail} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus praesentium placeat tempore doloremque minima debitis ratione sunt voluptates! Tempora vero quisquam optio id fuga! Facere vel obcaecati autem maiores veritatis?</p>
<a href="#">learn more</a>
        </div>
      </div>
    </div>
  )
}

export default Difference