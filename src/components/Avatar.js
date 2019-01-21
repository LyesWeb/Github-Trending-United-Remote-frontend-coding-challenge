import React, { Component } from 'react'

export default class Avatar extends Component {
  render() {
    return (
        <div className='avatar'>
            <img src={this.props.src} className='avatarImg' alt={this.props.name} title={this.props.name}/>
        </div>
    )
  }
}
