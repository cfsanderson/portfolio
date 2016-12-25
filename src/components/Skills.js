import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class Skills extends Component {

  render () {
    return (
      <div>
        <div className='bio'>
          <p>{this.props.bio}</p>
          <img className='avatar_url' src={this.props.avatar_url} />
        </div>
        <div className='skills section-header'>
          <h1>Skills</h1>
          <div className='words'>
            <blockquote className='quote' cite='https://en.wikipedia.org/wiki/Carl_Rogers'>
              <q>The only person who is educated is the one who has learned how to learn and change.</q><span> - Carl Rogers</span>
            </blockquote>
            <p>I'm a creative learner and a craftsman. I love to take on new and difficult tasks and use my skills to create beautiful and useful things. Here are some of the tools I used to create this page. More to come.</p>
          </div>
          <ul>
            <li>&#xe636;</li>
            <li>&#xe649;</li>
            <li>&#xe681;</li>
            <li>&#xe6ba;</li>
            <li>&#xe64b;</li>
          </ul>
          <div className='gitHub'>
            <p>Check out some of my projects on GitHub.</p>
            <a href='https://github.com/cfsanderson'>
              <img className='gitHubChart' src='http://ghchart.rshah.org/22ddf6/cfsanderson' alt="Caleb's Github chart" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
