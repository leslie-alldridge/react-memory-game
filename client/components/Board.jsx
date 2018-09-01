import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            board: createBoard(4),
            selectedCells: [], //state with every cell selected
            correctCells: [] //if it's correct, hold in here
        }
        console.log(this.state.board)
        this.checkPairs = this
            .checkPairs
            .bind(this);

    }

    checkPairs(cell) {
        cell.isVisible = true; //reveal cell , hello!

        const {selectedCells, correctCells} = this.state; //defining selected and correct so we can manipulate below

        if (selectedCells.length === 0) { // card chosen
            console.log('first card chosen');
            console.log(cell); //sanity checks

            this.setState({selectedCells: [cell]}) //save to the state what cell they clicked on (cell is an object)

        } else if (selectedCells.length === 1) { // card number two
            console.log('second card');
            console.log(cell.value);
            console.log(selectedCells[0].value);
            //sanity checks
            if (selectedCells[0].value == cell.value) {
                // celebrate below
                console.log('match found&#$Q*()&*(@$&$*(@&');
                console.log(correctCells.length);

                if (correctCells.length == 14) {
                    alert('you won, what a beast!! New board loading...')

                    setTimeout(() => {
                        this.setState({
                            board: createBoard(4), selectedCells: [], //resetting state to original
                            correctCells: []
                        })
                    }, 2600)
                }
                // Add selected cards the correct state array and leave their visibility
                this.setState({
                    correctCells: correctCells.concat([selectedCells[0], cell]),
                    selectedCells: []
                });
            } else {

                // no match, slight timeout so you can read what the second card is manually set
                // visible to false and clear state
                this.setState({
                    selectedCells: [selectedCells[0], cell]
                });
                setTimeout(() => {
                    selectedCells[0].isVisible = false,
                    cell.isVisible = false
                    this.setState({selectedCells: []})
                }, 1500);
            }
        }
    }
    render() {
        const width = this.props.width
        const board = this.state.board
        const rowHeight = width / board.length

        return <div
            style={{
            width: width,
            height: width
        }}
            className="column board has-text-centered">

            {board.map((row, rid) => {
                // render a row (of cells) on the board
                return <div
                    key={'row' + rid}
                    className="row columns"
                    style={{
                    height: rowHeight
                }}>
                    {row.map(cell => {
                        // render each cell within a row, using the Cell.jsx component
                        return <Cell key={cell.id} cell={cell} checkPairs={this.checkPairs}/>
                    })}
                </div>
            })}
        </div>
    }
}

export default Board
