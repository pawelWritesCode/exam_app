import React from 'react';
// import { useState } from 'react';

function Question({question, possibleAnswers, answer, explanation, pickedAnswer, updateProgress}) {
    function formatPossibleAnswers(obj) {
        const buttons = Object.keys(obj).map(k => {
            let className = "questionButton"
            if (k === answer && pickedAnswer !== "") {
                className += " correctAnswer"
            }

            if (k === pickedAnswer) {
                className += " pickedAnswer"
            }

            return <button value={k} className={className} onClick={updateProgress}>{k}) {obj[k]}</button>
        })

        return (
            <div className="questionButtons">
                {buttons}
            </div>
        )
    }

    function format(question) {
        const lines = question.split("\n")
        return lines.map((line) => <p>{line}</p>)
    }

    //TODO: Format question so /n are formatted to real new lines
    return (
        <div>
            <div className="question">Question: {format(question)}</div>
            {formatPossibleAnswers(possibleAnswers)}
            {
                pickedAnswer !== "" ? (
                    <>
                        <p>Answer: {answer}</p>
                        <p class="explanation">Explanation: {explanation}</p>
                    </>
                ) : (
                    <p>Pick answer</p>
                )
            }
        </div>
    )
}

export default Question