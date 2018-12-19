import React from 'react'
import Score from '../Score/Score';
import Dropdown from 'react-dropdown'

const Side = ({teams, score, selected, modifyScore, _OnSelect }) => {
    return (
        <article className='side'>
            <p>{teams[0].name}</p>
            <p>{score}</p>
        </article>
    )
}

export default Side