import React from 'react'
import React30SquareURL from '../React30Square.png'
import './Home.css'

class Home extends React.Component {
  render = () => {
    return (
      <div className="logo-wrapper">
        <div
          className="logo"
          style={{ backgroundImage: `url(${React30SquareURL})` }}
        />
      </div>
    )
  }
}

export default Home
