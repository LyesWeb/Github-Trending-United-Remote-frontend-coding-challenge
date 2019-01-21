import React, { Component } from 'react'

export default class Avatar extends Component {
  render() {
    return (
        <div className='avatar'>
            <a href={this.props.user_url} target='_blank' rel='noopener noreferrer'>
                <img src={this.props.src} className='avatarImg' alt={this.props.name} title={this.props.name}/>
            </a>
        </div>
    )
  }
}
