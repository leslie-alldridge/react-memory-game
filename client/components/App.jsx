import React from 'react'
import Board from './Board'

const App = props => {
    return (
        <div className="section">
            <h1 id="head" className="has-text-centered title is-1">Pet Memory Game</h1>
            <Board width={props.width / 2}/>
        </div>
    )
}

export default App
