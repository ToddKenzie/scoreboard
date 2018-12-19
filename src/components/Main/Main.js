import React from 'react'
import Side from '../Side/Side';

const Main  = ({ teams, increase, decrease}) => {
    return (
        <div className='main'>
            <h1>Blood Bowl Match</h1>
            <section className='teams'>
                <Side
                    teams = {teams}
                    increase = {increase}
                    decrease = {decrease} />
                <Side
                    teams = {teams}
                    increase = {increase}
                    decrease = {decrease} />
            </section>
        </div>
    )
}

export default Main