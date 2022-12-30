import React, {useState} from 'react';
import Egzam from './../egzam/Egzam.js'
import EgzamPlaceholder from "../egzam_placeholder/EgzamPlaceholder.js";
import Nav from './../nav/Nav.js';
import Result from './../result/Result.js';
import data from "../../data/istqb.json"

function Menu() {
    const phasePending = "Pending";
    const phaseInExam = "InExam";
    const phaseCompleted = "Completed";

    const [options, setOptions] = useState({"numberOfQuestions": 0})
    const [questions, setQuestions] = useState([{question: "", answer: "", possibleAnswers: {"a": "", "b": "", "c": "", "d": ""}, explanation: ""}]);
    const [phase, setPhase] = useState(phasePending)
    const [result, setResult] = useState(0)

    function startEgzam() {
        const pickRandomQuestions = randomQuestionsSetGenerator(options.numberOfQuestions)
        setQuestions(pickRandomQuestions())
        setResult(0)
        setPhase(phaseInExam)
    }

    function adjustNumberOfQuestions(numberOfQuestions) {
        let newOptions = {
            ...options
        }
        newOptions.numberOfQuestions = numberOfQuestions
        setOptions(newOptions)
    }

    function randomQuestionsSetGenerator(n) {
        return function() {
            return data.sort(() => .5 - Math.random()).slice(0,n)
        }
    }

    function finishEgzam(egzamResult) {
        setResult(egzamResult)
        setPhase(phaseCompleted)
    }

    function renderSwitch(param) {
        switch(phase) {
            case phasePending:
                return (
                    <EgzamPlaceholder handleStartClick={startEgzam} />
                )
            case phaseInExam:
                return (
                    <Egzam
                        questions={questions}
                        finishEgzam={finishEgzam}
                    />
                )
            case phaseCompleted:
                return (
                    <Result
                        numberOfQuestions={questions.length}
                        successfullyAnsweredQuestions={result}
                        startEgzam={startEgzam}
                    />
                )
            default:
                return (
                <EgzamPlaceholder handleStartClick={startEgzam} />
            )
        }
    }

    return (
        <div className="menu">
            <Nav
                adjustNumberOfQuestions={adjustNumberOfQuestions}
                options={options}
            />

            {renderSwitch(phase)}
        </div>
    )
}

export default Menu