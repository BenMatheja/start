import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Hi! on the Quaysi.de Portal</h1>
      <p>
        Surf along
      </p>
      <ul>
        <li>
          <a href="https://git.quaysi.de">git</a>
        </li>
        <li>
          <a href="https://drone.quaysi.de">drone</a>
        </li>
        <li>
          <a href="https://pihole.quaysi.de/admin">pihole</a>
        </li>
        <li>
          <a href="https://unifi.quaysi.de">unifi</a>
        </li>
        <li>
          <a href="https://nas.quaysi.de">nas</a>
        </li>
        <li>
          <a href="https://news.ycombinator.com">hacker news</a>
        </li>
        <li>
          <a href="https://www.github.com">github</a>
        </li>
        <li>
          <a href="http://twitter.com/">twitter</a>
        </li>
        <li>
          <a href="http://twitch.tv/">twitch</a>
        </li>
      </ul>
      <Img
        className="headshot"
        fixed={data.file.childImageSharp.fixed}
        alt="headshot"
      />
    </Layout>
  );
}
export const query = graphql`
  query {
    file(relativePath: { eq: "images/unifi.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`