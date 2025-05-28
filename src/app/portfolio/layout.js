import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='text-[100px]'>Ours Works</h1>
        {children}
    </div>
  )
}

export default Layout