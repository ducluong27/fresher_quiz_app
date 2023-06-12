import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import videoHomePage from '../../assets/video-homepage.mp4'
const HomePage = (props) => {
  return (
    <div className='homepage-container'>
        <video autoPlay muted loop>
            <source 
                src={videoHomePage}
                type="video/mp4"
            />
        </video>

        <div className='homepage-content'>
          <div className='title-one'>
            There's a better way to ask
          </div>
          <div className='title-two'>
            You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.
          </div>
          <div>
            <button>Get started - it's free</button>
          </div>
          <ul className='title-three-list'>          
            <li className='title-three-item'><FontAwesomeIcon icon={faCheck} /> No credit card required</li>
            <li className='title-three-item'><FontAwesomeIcon icon={faCheck} /> No time limit on Free plan</li>
          </ul>
        </div>
    </div>
  )
}

export default HomePage