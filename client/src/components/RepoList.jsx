import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h3> Repo List Component </h3>
    Showing {props.repos.length} repos...
    {props.repos.map((repo) => {
      return <Repo repo={repo} key={repo.id}></Repo>
    })}
  </div>
)

export default RepoList;
