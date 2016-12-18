import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class GitHubFeed extends Component {

  render () {
    return (
      <div className='bio'>
        <h4>{this.props.bio}</h4>
        <img className='avatar_url' src={this.props.avatar_url} />
        <p>I'm </p>
        <img className='gitHubChart' src='http://ghchart.rshah.org/22ddf6/cfsanderson' alt="Caleb's Github chart" />
      </div>
    )
  }
}

export default GitHubFeed
