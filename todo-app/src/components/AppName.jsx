import React from 'react'

const AppName = ({todoName}) => {
  return (
    <>
      <h1 className='fw-bold py-3 text-white'>{todoName}</h1>
    </>
  )
}

export default AppName