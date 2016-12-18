import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class BlogFeed extends Component {

  render () {
    return (
      <div>
        {/* <h1>My Medium blog feed here</h1> */}
        <p>{this.props.feed}</p>
        <p>{this.props.items}</p>
      </div>
    )
  }
}

export default BlogFeed
