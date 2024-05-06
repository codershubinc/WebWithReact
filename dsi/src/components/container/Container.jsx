import React from 'react'

function Container({children}) {
  return <div className='w-full   flex flex-col items-center mx-auto px-4'>{children}</div>;
  
}

export default Container