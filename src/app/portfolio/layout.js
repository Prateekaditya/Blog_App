import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='text-[45px]/15 md:text-[70px]/18 font-bold'>Ours Works</h1>
        {children}
    </div>
  )
}

export default Layout