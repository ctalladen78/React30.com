import React from 'react'
import React30Logo from './React30Logo'
import TwitterLogo from './TwitterLogo'
import './Home.css'

class Home extends React.Component {
  render = () => {
    return (
      <div className="logos-wrapper">
        <div className="react30-logo">
          <React30Logo/>
        </div>
        <div className="twitter-logo">
          <a title="Follow React30 on Twitter" href="https://twitter.com/React30">
            <TwitterLogo/>
          </a>
        </div>
      </div>
    )
  }
}

export default Home
