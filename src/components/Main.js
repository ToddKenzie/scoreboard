import React from 'react'

const Main  = ({ teams, increase, decrease}) => {
    return (
        <div className='main'>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Main