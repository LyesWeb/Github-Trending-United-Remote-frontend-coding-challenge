import React from 'react'

const Details = ({repo}) => {
    return (
        <div className='details'>
            <h3>
                <a href={repo.svn_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
            </h3>
            <p>{repo.description}</p>
            <span>{repo.stargazers_count} stars |</span>
            <span>{repo.open_issues} issues |</span>
            <span>Submited 30 days ago by : <a href={repo.owner.html_url} target='_blank' title={repo.owner.login} rel='noopener noreferrer'>{repo.owner.login}</a></span>
        </div>
    )
}

export default Details;