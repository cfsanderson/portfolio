import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class Skills extends Component {

  render () {
    return (
      <div>
        <div className='bio'>
          <h4>{this.props.bio}</h4>
          <img className='avatar_url' src={this.props.avatar_url} />
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Sass</li>
            <li>React</li>
            <li>Adobe</li>
          </ul>
          <img className='gitHubChart' src='http://ghchart.rshah.org/22ddf6/cfsanderson' alt="Caleb's Github chart" />
        </div>
      </div>
    )
  }
}

export default Skills
