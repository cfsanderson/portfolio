import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class Header extends Component {

  render () {
    return (
      <div>
        <header className='top'>
          <h1>{this.props.name}</h1>
          <h3>Front End Developer</h3>
          <button>Download my resume here.</button>
          {/* with modal link to my resume */}
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
