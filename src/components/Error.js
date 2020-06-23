import React from 'react'
import error from '../error.png';

const Error = ({desc}) => {
	return (
		<div className='error'>
			<img src={error} alt='error' />
			<p>{desc}</p>
		</div>
	)
}

export default Error;