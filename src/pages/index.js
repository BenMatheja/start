import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
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
    </Layout>
  );
}