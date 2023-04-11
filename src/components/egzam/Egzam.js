import React from 'react';
import { useState, useEffect, useRef } from 'react';

import Question from "../question/Question.js"
import Timer from "../timer/Timer.js"

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
    const egzamDivReference = useRef(null);

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
            let newProgress = {
                ...progress
            }
            newProgress[i] = {"answer": e.target.value}
            setProgress(newProgress)
        }
    }

    function handleFinishClick() {
        let result = 0
        for (let i = 0; i < questions.length; i++) {
            if ( questions[i].answer === progress[i].answer ) {
                result++
            }
        }

        finishEgzam(result)
    }

    function computeDeadline(questions) {
        let deadline = new Date();
        return deadline.setMinutes(deadline.getMinutes() + 1.5 * questions.length)
    }

    function handleKeyDown(e) {
        if (e.key === 'ArrowLeft') {
            handlePreviousClick()
        }

        if (e.key === 'ArrowRight') {
            handleNextClick()
        }
    }

    useEffect(() => {
        egzamDivReference.current.focus();
    }, []);

    return (
        <div className="egzam" tabIndex={0} ref={egzamDivReference} onKeyDown={handleKeyDown}>

            <h3>
                ({index + 1} of {questions.length})
            </h3>

            <Timer
                finishAction={handleFinishClick}
                deadline={computeDeadline(questions)}
            />
            <Question
                question={questions[index].question}
                answer={questions[index].answer}
                possibleAnswers={questions[index].possibleAnswers}
                explanation={questions[index].explanation}
                updateProgress={updateProgress(index)}
                pickedAnswer={progress[index].answer}
            />

            <button onClick={handlePreviousClick}>
                Previous
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <hr />
            <button onClick={handleFinishClick}>Finish</button>
        </div>
    )
}

export default Exam