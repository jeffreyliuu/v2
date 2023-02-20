import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <h1>Wecome to my Gatsby site!</h1>
      <Link to="/blog">Blog</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="My boi biggie cheese"
        src="../images/BiggieCheese.webp"
      />
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage