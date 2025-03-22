import React from 'react'

const DataError = ({error}) => {
  return (
      <div>
           <p className="text-center text-red-500 text-lg mt-10">
           Danger alert! Error: {error}
            </p>
    </div>
  )
}

export default DataError