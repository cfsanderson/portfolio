import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class BlogFeed extends Component {

  render () {
    return (
      <div className='blog section-header'>
        <h1>Blog</h1>
        <div>
          <blockquote className='quote' cite='https://en.wikipedia.org/wiki/Carl_Rogers'>
            <q>The only person who is educated is the one who has learned how to learn and change.</q><span> - Carl Rogers</span>
          </blockquote>
          <p>I'm a creative learner and a craftsman. I love to take on new and difficult tasks and use my skills to create beautiful and useful things. Here are some of the tools I used to create this page. More to come.</p>
        </div>
      </div>
    )
  }
}

export default BlogFeed
