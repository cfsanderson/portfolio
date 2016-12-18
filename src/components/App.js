import React, { Component } from 'react'
import Header from './Header'
import BlogFeed from './BlogFeed'
import GitHubFeed from './GitHubFeed'
import Footer from './Footer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      avatar_url: '',
      bio: '',
      location: ''
    }
  }

  componentDidMount () {
    const URL = 'https://api.github.com/users/cfsanderson'
    window.fetch(URL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        location: data.location
      })
    })
  }

  render () {
    return (
      <div>
        <Header name={this.state.name} />
        <BlogFeed />
        <GitHubFeed avatar_url={this.state.avatar_url} bio={this.state.bio} />
        <Footer />
      </div>
    )
  }
}

export default App
