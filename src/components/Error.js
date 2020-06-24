import React from 'react'
import error from '../error.png';

const Error = ({desc, refresh}) => {
	return (
		<div className='error'>
			<img src={error} alt='error' />
			<p>{desc}</p>
			<button onClick={refresh} className="refreshBtn">Refresh</button>
		</div>
	)
}

export default Error;