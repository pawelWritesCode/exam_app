import React from 'react';

function Nav({ adjustNumberOfQuestions }) {

    function handleOnClick(n) {
        return function() {
            adjustNumberOfQuestions(n)
        }
    }

    return (
        <div className="nav">
            <ul>
                <button onClick={handleOnClick(10)}>Random 10</button>
                <button onClick={handleOnClick(20)}>Random 20</button>
            </ul>
        </div>
    )
}

export default Nav