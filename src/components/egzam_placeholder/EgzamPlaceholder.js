import React from 'react'

function EgzamPlaceholder({handleStartClick}) {
    return (
        <div>
            <p>Click on me when you are read</p>
            <button onClick={handleStartClick}>start</button>
        </div>
    )
}

export default EgzamPlaceholder