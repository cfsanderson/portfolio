import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class Header extends Component {

  render () {
    return (
      <div>
        <header className='top'>
          <h1>{this.props.name}</h1>
          <img className='avatar_url' src={this.props.avatar_url} />
          <h4>{this.props.bio}</h4>
          {/* with modal link to my resume */}
        </header>
      </div>
    )
  }
}

export default Header
