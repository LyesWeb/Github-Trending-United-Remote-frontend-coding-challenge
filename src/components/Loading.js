import React from 'react'
import spinner from '../spinner.gif'

const Loading = ({desc}) => {
	return (
		<div className='spinner'>
			<img src={spinner} width='32' height='32' alt='loading' />
			<p>{desc}</p>
		</div>
	)
}

export default Loading;