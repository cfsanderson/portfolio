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
              <q>The only person who is educated is the one who has learned how to learn and change.</q><br /><span> - Carl Rogers</span>
            </blockquote>
            <p>I'm a creative, a learner, and a digital craftsman. I'd rather read a book and learn how to make something for myself than buy it off the shelf.</p>
            <p>I love a challenge and especially when I get to use my skills to create beautiful and useful things. In the past I've done that with music, film, and visual media. While I still enjoy those things, my focus has shifted to software development. Here are some of the creative tools I am currently investing in.<br /> More to come.</p>
          </div>
          <ul className='skill-icons'>
            <li>&#xe636;</li>
            <li>&#xe649;</li>
            <li>&#xe681;</li>
            <li>&#xe6ba;</li>
            <li>&#xe64b;</li>
          </ul>
          <div className='gitHub'>
            <p>As part of our training at <a href='https://www.theironyard.com/'>The Iron Yard</a> we build a lot of simple but functional apps that reinforce programming logic and feature different key aspects of the framework we are working with. Here are some of my favorite projects. Click to check them out on <a href='https://github.com/cfsanderson'>GitHub.</a></p>
            {/* <ul className='gifs'>
              <li><a href='https://github.com/cfsanderson/snowman'><img src='http://i.imgur.com/SoQJh1c.gif' alt='Snowman game animated GIF' width='323' height='200' /></a></li>
              <li><a href='https://github.com/cfsanderson/tic-tac-toe'><img src='http://i.imgur.com/CtWcvNu.gif' alt='Crab-tac-toe game animated GIF' width='323' height='200' /></a></li>
              <li><a href='https://github.com/cfsanderson/explosion-avoider'><img src='http://i.imgur.com/Cy2gE5y.gif' alt='Minesweeper animated GIF' width='323' height='200' /></a></li>
            </ul> */}
            <div className='gif-container'>
              <div className='testdiv'>
                <div className='hovereffect'>
                  <img src='http://i.imgur.com/SoQJh1c.gif'alt='Snowman game animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='https://github.com/cfsanderson/snowman' target='_blank'>
                      <h2>Snowman</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='testdiv'>
                <div className='hovereffect'>
                  <img src='http://i.imgur.com/CtWcvNu.gif' alt='Crab-Tac-Toe game animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='https://github.com/cfsanderson/tic-tac-toe' target='_blank'>
                      <h2>Crab-Tac-Toe</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='testdiv'>
                <div className='hovereffect'>
                  <img src='http://i.imgur.com/Cy2gE5y.gif' alt='Minesweeper game animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='https://github.com/cfsanderson/explosion-avoider' target='_blank'>
                      <h2>Minesweeper</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
