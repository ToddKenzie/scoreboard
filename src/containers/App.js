import React, { Component } from 'react'
import Main from '../components/Main/Main'

class App extends Component {
    constructor() {
        super()
        this.state = {
            teams: [
            {id: 1, name: 'Reikland Reavers', image: '../../images/bb-human.png', score: 0},
            {id: 2, name: 'Da Deff Skwadd', image: '../../images/bb-orc.png', score: 0},
            {id: 3, name: 'Grudge Bearers', image: '../../images/bb-dwarf.png', score: 0},
            {id: 4, name: 'Darkside Cowboys', image: '../../images/bb-darkelf.png', score: 0},
            {id: 5, name: 'Khornes Killers', image: '../../images/bb-chaos.png', score: 0},
            {id: 6, name: 'Tombstone Terrors', image: '../../images/bb-undead.png', score: 0}
            ]
        }
    }
    increase = score => score + 1;
    decrease = score => score - 1;
    render() {
        return (
            <Main
                teams = {this.state.teams}
                increase = {this.increase}
                decrease = {this.decrease} />
        )
    }
}

export default App;