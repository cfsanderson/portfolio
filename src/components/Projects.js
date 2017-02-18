import React, { Component } from 'react'
import styles from '../styles/screen.scss'

import D4C from '../images/D4C-example.gif'
import crabTacToe from '../images/crab-tac-toe-01.gif'
import minesweeper from '../images/minesweeper-example.gif'

class Projects extends Component {

  render () {
    return (
      <div>
        <div className='skills section-header'>
          <h1>Projects</h1>
          <div className='words'>
            <p>As part of our training at <a href='https://www.theironyard.com/' target='_blank'>The Iron Yard</a> we build a lot of simple but functional apps that reinforce programming logic and feature different key aspects of the technologies we are working with. Here are some of my favorite projects including Dash 4 Cash which was my capstone project for the Front-End Engineering course. Click to check them out on <a href='https://github.com/cfsanderson' target='_blank'>GitHub.</a></p>
          </div>
          <div className='gitHub'>
            <div className='gif-container'>
              <div className='testdiv'>
                <div className='hovereffect'>
                  <img src={crabTacToe} alt='Crab-Tac-Toe game animated GIF' width='323' height='200' />
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
                  <img src={minesweeper} alt='Minesweeper game animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='https://github.com/cfsanderson/explosion-avoider' target='_blank'>
                      <h2>Minesweeper</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='testdiv'>
                <div className='hovereffect'>
                  {/* <img src='http://i.imgur.com/SoQJh1c.gif'alt='Snowman game animated GIF' width='323' height='200' /> */}
                  <img src={D4C} alt='Dash 4 Cash project animated GIF' width='323' height='200' />
                  <div className='overlay'>
                    <a href='https://github.com/cfsanderson/dash-4-cash' target='_blank'>
                      <h2>Dash 4 Cash</h2>
                      <p><i className='fa fa-github' aria-hidden='true' /></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href='https://github.com/cfsanderson' target='_blank'>
              <img className='gitHubChart' src='http://ghchart.rshah.org/22ddf6/cfsanderson' alt="Caleb's Github chart" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
