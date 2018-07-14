import React from 'react';

const Repo = (props) => (
  <div className="outerRepo">
    <a href={props.repo.html_url} target="_blank">
      <div className="repo">
        <div className="name">{props.repo.name}</div>
        <div className="owner">{props.repo.owner.login}</div>
        <div className="stats"> Forks: {props.repo.forks} Watchers: {props.repo.watchers} Stargazers: {props.repo.stargazers_count}</div>
        <div className="description">{props.repo.description}</div>
      </div>
    </a>
  </div>
)

export default Repo;
