import React from 'react';
// import { useState } from 'react';

function Question({question, possibleAnswers, answer, explanation, isAnswered, updateProgress}) {
    function formatPossibleAnswers(obj) {

        return (
            <div className="questionButtons">
                <button value="a" className="questionButton" onClick={updateProgress}>a) {obj["a"]}</button>
                <button value="b" className="questionButton" onClick={updateProgress}>b) {obj["b"]}</button>
                <button value="c" className="questionButton" onClick={updateProgress}>c) {obj["c"]}</button>
                <button value="d" className="questionButton" onClick={updateProgress}>d) {obj["d"]}</button>
            </div>
        )
    }

    return (
        <div>
            <p>Question: {question}</p>
            {formatPossibleAnswers(possibleAnswers)}
            {
                isAnswered ? (<p>isAnswered</p>) : (<p>isNotAnswered</p>)
            }
            <p>Answer: {answer}</p>
            <p>Explanation: {explanation}</p>
        </div>
    )
}

export default Question