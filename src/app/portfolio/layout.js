import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='text-[70px]/18 font-bold'>Ours Works</h1>
        {children}
    </div>
  )
}

export default Layout