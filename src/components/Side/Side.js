import React from 'react'
import Score from '../Score/Score';

const Side = props => {
    const listTeams = props.teams.map((team) => 
        <option key={team.id} value={team.id}>{team.name}</option>
    )
    return (
        <article className='side'>
            <select className='side-chooser' defaultValue>
                {listTeams}
            </select>
            <Score
                teams = {props.teams}
                increase = {props.increase}
                decrease = {props.decrease} />
        </article>
    )
}

export default Side