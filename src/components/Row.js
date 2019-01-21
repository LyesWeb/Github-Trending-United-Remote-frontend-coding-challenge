import React from 'react'
import Avatar from './Avatar';
import Details from './Details';

const Row = ({repo}) => {
    return (
      <div className='row'>
        <Avatar src={repo.owner.avatar_url} name={repo.owner.login} user_url={repo.owner.html_url}/>
        <Details repo={repo}/>
      </div>
    )
}

export default Row;