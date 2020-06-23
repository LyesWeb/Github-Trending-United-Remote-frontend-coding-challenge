import React from 'react'

const Avatar = ({name, src, userUrl}) => {
	return (
		<div className='avatar'>
			<a href={userUrl} target='_blank' rel='noopener noreferrer'>
				<img src={src} className='avatarImg' alt={name} title={name} />
			</a>
		</div>
	)
}

export default Avatar;