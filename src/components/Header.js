import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class Header extends Component {

  render () {
    return (
      <div>
        <header className='top'>
          <h1>{this.props.name}</h1>
          <h2>Front End Developer</h2>
          <button><a className='resumeLink' href=''>VIEW RÉSUMÉ</a></button>
          {/* with modal link to my resume https://www.linkedin.com/in/calebsanderson */}
          {/* <div className='bio'>
            <h4>{this.props.bio}</h4>
            <img className='avatar_url' src={this.props.avatar_url} />
          </div> */}
        </header>
      </div>
    )
  }
}

export default Header
