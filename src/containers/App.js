import React, { Component } from 'react'
import Main from '../components/Main/Main'

class App extends Component {
    constructor() {
        super()
        this.state = {
            teams: [
            {id: 1, name: 'Reikland Reavers', image: '../../images/bb-human.png'},
            {id: 2, name: 'Da Deff Skwadd', image: '../../images/bb-orc.png'},
            {id: 3, name: 'Grudge Bearers', image: '../../images/bb-dwarf.png'},
            {id: 4, name: 'Darkside Cowboys', image: '../../images/bb-darkelf.png'},
            {id: 5, name: 'Khornes Killers', image: '../../images/bb-chaos.png'},
            {id: 6, name: 'Tombstone Terrors', image: '../../images/bb-undead.png'}
            ],
            scores: [ 0, 0],
            selected: [
                {id: 1},
                {id: 2}]
        }
    }
    modifyScore = (teamOption, value) => {
        this.setState({scores: this.state.scores[teamOption] + value})
    };
    _OnSelect = (teamOption, option) => {
        this.setState({selected: this.state.selected[teamOption] = option})
    }
    render() {
        return (
            <Main
                teams = {this.state.teams}
                scores = {this.state.scores}
                selected = {this.state.selected}
                modifyScore = {this.modifyScore}
                _OnSelect = {this._OnSelect} />
        )
    }
}

export default App;