import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class BlogFeed extends Component {

  render () {
    return (
      <div>
        <div className='blog section-header'>
          <h1>Blog</h1>
          <div>
            <blockquote className='quote' cite='https://en.wikipedia.org/wiki/Carl_Rogers'>
              <q>The only person who is educated is the one who has learned how to learn and change.</q><span> - Carl Rogers</span>
            </blockquote>
            <p>I'm a creative learner and a craftsman. I love to take on new and difficult tasks and use my skills to create beautiful and useful things. Here are some of the tools I used to create this page. More to come.</p>
          </div>
        </div>
        <div className='blogposts'>
          <div>
            <article>
              <h1>I’m Headed to The Iron Yard</h1>
              <time>November 14, 2016</time>
              <p>That title would have meant something very different 50 years ago. It brings up images of grease smudged faces queued up to punch a time clock. Today it means that I’m starting an immersive program or “bootcamp” for software development with an emphasis in Front-end Engineering (HTML, CSS, Javascript, and React) at a school called The Iron Yard in Tampa, FL (downtown St. Petersburg actually).</p>
              <a className='keep-reading' href='https://medium.com/@cfsanderson/script-src-https-gist-github-com-cfsanderson-db861b186bfbb72e98f467ed20415e40-js-script-9329d14bfd58#.cc6nodbfl' target='_blank'>keep reading on <i className='fa fa-medium' aria-hidden='true' /></a>
            </article>
          </div>
          <div>
            <article>
              <h1>FizzBuzzed: Why Javascript?</h1>
              <time>November 15, 2016</time>
              <p>Today is the first day of week 2 in my 12 week cohort at The Iron Yard. Last week was spent learning HTML and CSS which I’d had enough exposure to that I could recognize some of the syntax, but writing functional code was a struggle. I knew the pace of the course would be fast but I wasn’t expecting a panic attack on day 2.</p>
              <a className='keep-reading' href='https://medium.com/@cfsanderson/fizzbuzzed-why-javascript-43ad273aa989#.aeag0p9rj' target='_blank'>KEEP READING</a>
            </article>
          </div>
          <div>
            <article>
              <h1>React: Looking Forward</h1>
              <time>December 6, 2016</time>
              <p>Today was the first day of my 4th week in the Front-End Engineering program at The Iron Yard. So far we have covered the basics of HTML, CSS, Sass, and Javascript. Today we started looking at React. The combination of these tools will be the bulk of what we will work on for the rest of the program. They say the course is “immersive”</p>
              <a className='keep-reading' href='https://medium.com/@cfsanderson/react-looking-forward-e1aba7829556#.3i7evdtne' target='_blank'>KEEP READING</a>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogFeed
