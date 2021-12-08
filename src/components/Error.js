import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div>
            <p className="error text-center ">{mensaje}</p>
        </div>
    )
}

export default Error
