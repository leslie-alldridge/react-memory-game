import React from 'react'

const Cell = ({cell, checkPairs}) => {
    return <div onClick={() => checkPairs(cell)} className="cell column">
        <img src={cell.isVisible && cell.value && cell.image}/>
        <p>
            {cell.isVisible && cell.value}</p>
    </div>
}

export default Cell