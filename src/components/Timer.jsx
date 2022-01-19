/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";

const Timer = ({ goToResults }) => {
    const [timer, setTimer] = useState("00:00:00");
    const timeRef = useRef(null);

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) + ":" +
                (minutes > 9 ? minutes : "0" + minutes) + ":"
                + (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the end time formula we are about
        // to code next    
        setTimer("00:01:00");

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (timeRef.current) clearInterval(timeRef.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        timeRef.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        // This is where you need to adjust if 
        // you extend to add more time
        deadline.setMinutes(deadline.getMinutes() + 1);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const delay = (duration, callback) => {
        setTimeout(() => {
          callback();
        }, duration);
      };

    return (
        <div>
            <h2>{timer} {timer === "00:00:00" ? 
            <div>
                <div>Time's Up!</div>
                <button className="button is-link is-medium is-fullwidth mt-4" onClick={goToResults}>See Results</button></div> : null}</h2>
        </div>
    );
};

export default Timer;