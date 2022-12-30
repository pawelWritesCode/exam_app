import React from 'react';

function Nav({options, adjustNumberOfQuestions }) {

    function handleOnClick(n) {
        return function() {
            adjustNumberOfQuestions(n)
        }
    }

    function renderButtons() {
        return [10, 20].map(item => {
            let className = ""
            if (options.numberOfQuestions === item) {
                className = "pickedOption"
            }

            return <button className={className} onClick={handleOnClick(item)}>Random {item}</button>
        })
    }

    return (
        <div className="nav">
            {renderButtons()}
        </div>
    )
}

export default Nav