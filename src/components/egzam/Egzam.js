import React from 'react';
import { useState } from 'react';

import Question from "../question/Question.js"

function Exam({questions, finishEgzam}) {
    function setInitialProgress() {
        let result = {}
        for (let i = 0; i < questions.length; i++) {
            result[i] = {"answer": "",}
        }

        return result
    }

    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(setInitialProgress())

    function handleNextClick() {
        if (index < questions.length - 1) {
            setIndex(index + 1);
        }
    }

    function handlePreviousClick() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function updateProgress(i) {
        return function (e) {
            let newProgress = progress
            newProgress[i] = {"answer": e.target.value}
            setProgress(newProgress)
        }
    }

    // function isAnswered(i) {
    //     console.log(progress[i])
    //     return progress[i]["answer"] !== ""
    // }

    return (
        <div className="egzam">
            <button onClick={handlePreviousClick}>
                Previous
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={finishEgzam}>Finish</button>
            <h3>
                ({index + 1} of {questions.length})
            </h3>

            <Question
                question={questions[index].question}
                answer={questions[index].answer}
                possibleAnswers={questions[index].possibleAnswers}
                explanation={questions[index].explanation}
                updateProgress={updateProgress(index)}
            />
        </div>
    )
}

export default Exam