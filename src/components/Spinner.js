import React from 'react'
import loading from './loading-icon.gif'

const Spinner =()=> {
    return (
      <div className='text-center'>
        <img className='my-3' width={50} src={loading} alt='Loading' />
      </div>
    ) }
  export default Spinner
