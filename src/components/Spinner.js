import React, { Component } from 'react'
import loading from './loading-icon.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img width={50} src={loading} alt='Loading' />
      </div>
    )
  }
}

export default Spinner
