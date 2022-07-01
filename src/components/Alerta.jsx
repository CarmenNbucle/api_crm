import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className="text-center my-2 font-bold p-1 text-red-600">
        {children}
    </div>
  )
}

export default Alerta