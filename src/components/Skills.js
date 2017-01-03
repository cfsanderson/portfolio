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
          <ul className='skill-icons'>
            <li>&#xe636;</li>
            <li>&#xe649;</li>
            <li>&#xe681;</li>
            <li>&#xe6ba;</li>
            <li>&#xe64b;</li>
          </ul>
          <div className='gitHub'>
            <p>Click the images below to check out some of my projects on GitHub.</p>
            <ul className='gifs'>
              <li><a href='https://github.com/cfsanderson/snowman'><img src='http://i.imgur.com/SoQJh1c.gif' alt='Snowman game animated GIF' width='323' height='200' /></a></li>
              <li><a href='https://github.com/cfsanderson/tic-tac-toe'><img src='http://i.imgur.com/CtWcvNu.gif' alt='Crab-tac-toe game animated GIF' width='323' height='200' /></a></li>
              <li><a href='https://github.com/cfsanderson/explosion-avoider'><img src='http://i.imgur.com/Cy2gE5y.gif' alt='Minesweeper animated GIF' width='323' height='200' /></a></li>
            </ul>
            <a href='https://github.com/cfsanderson'>
              <img className='gitHubChart' src='http://ghchart.rshah.org/22ddf6/cfsanderson' alt="Caleb's Github chart" />
            </a>
          </div>
          {/* <div className='testdiv'>
            <div className='hovereffect'>
              <img src='http://i.imgur.com/SoQJh1c.gif'alt='Snowman game animated GIF' width='323' height='200' />
              <div className='overlay'>
                <a href='https://github.com/cfsanderson/snowman' target='_blank'>
                  <h2>Snowman</h2>
                  <p><i className='fa fa-github' aria-hidden='true' /></p>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Skills
