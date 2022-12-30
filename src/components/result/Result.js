import React from 'react'

function Result({numberOfQuestions, successfullyAnsweredQuestions, startEgzam}) {
    return (
        <div>
            <p>Your egzam result</p>
            <p>{successfullyAnsweredQuestions + "/" + numberOfQuestions}</p>
            <button onClick={startEgzam}>Try Next</button>
        </div>
    )
}

export default Result