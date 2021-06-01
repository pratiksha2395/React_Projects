import React from 'react'

const Follower = ({avatar_url, login, html_url }) => {
  
  return <article className="card">
    <img src={avatar_url} alt="img"/>
    <h4>{login}</h4>
    <a href={html_url} className="btn">View Profile</a>
  </article>
}

export default Follower
