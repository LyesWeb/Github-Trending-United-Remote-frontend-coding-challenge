import React, { Component } from 'react'
import spinner from '../spinner.gif'

export default class Loading extends Component {
  render() {
    return (
        <div className='spinner'>
            <img src={spinner} width='32' height='32' alt='loading' />
            <p>{this.props.desc}</p>
        </div>
    )
  }
}
