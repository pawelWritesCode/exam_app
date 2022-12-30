import React, {useState, useEffect} from "react";

const Timer = ({finishAction, deadline}) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const time = deadline - Date.now();
        const h = Math.floor((time / (1000 * 60 * 60)) % 24)
        const m = Math.floor((time / 1000 / 60) % 60)
        const s = Math.floor((time / 1000) % 60)

        setHours(h);
        setMinutes(m);
        setSeconds(s);

        if (h === 0 && m === 0 && s === 0) {
            finishAction()
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <p>{hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
    )
}

export default Timer;