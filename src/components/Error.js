import React, { Component } from 'react'
import error from '../error.png';
export default class Error extends Component {
  render() {
    return (
      <div className='error'>
        <img src={error} alt='error' />
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
