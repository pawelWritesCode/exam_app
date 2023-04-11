import React from 'react'

function Result({numberOfQuestions, successfullyAnsweredQuestions, startEgzam}) {
    function percentage(success, failure) {
        const perc = Math.round((successfullyAnsweredQuestions/numberOfQuestions) * 100)
        if (perc > 65) {
            return <span style={{color: "green"}}>{perc}%</span>
        }

        return <span style={{color: "red"}}>{perc}%</span>
    }

    return (
        <div>
            <p>Your egzam result</p>
            <p>{successfullyAnsweredQuestions + "/" + numberOfQuestions} ({percentage(successfullyAnsweredQuestions, numberOfQuestions)})</p>
            <button onClick={startEgzam}>Try Next</button>
        </div>
    )
}

export default Result