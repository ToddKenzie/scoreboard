import React from 'react'
import Side from '../Side/Side';

const Main  = ({ teams, scores, selected, modifyScore, _OnSelect }) => {
    return (
        <div className='main'>
            <h1>Blood Bowl Match</h1>
            <section className='teams'>
                <Side
                    teams = {teams}
                    score = {scores[0]}
                    selected = {selected[0]}
                    modifyScore = {modifyScore}
                    _OnSelect = {_OnSelect} />
                <Side
                    teams = {teams}
                    score = {scores[1]}
                    selected = {selected[1]}
                    modifyScore = {modifyScore}
                    _OnSelect = {_OnSelect} />
            </section>
        </div>
    )
}

export default Main
