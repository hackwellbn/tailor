import React, { useState, useEffect } from 'react';
import './Counter.css'
const Counter = () => {
    const [clientsWorkedWith, setClientsWorkedWith] = useState(0);

    useEffect(() => {
        let timer;
        let startTime = Date.now();
        let duration = 1000; // Duration in milliseconds
        let targetCount = 80;
        let initialCount = 0;

        const updateCounter = () => {
            let currentTime = Date.now();
            let elapsedTime = currentTime - startTime;
            let progress = elapsedTime / duration;
            let newCount = Math.floor(progress * targetCount) + initialCount;
            setClientsWorkedWith(newCount);

            if (newCount >= targetCount) {
                clearInterval(timer);
            }
        };

        timer = setInterval(updateCounter, 10); // Update counter every 10 milliseconds for smoother animation

        return () => {
            clearInterval(timer); // Cleanup: Clear the interval when the component unmounts
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className='counter'>
            <div className="counter-body">
                <h1>the number of companies we have worked with</h1>
                <h3>{clientsWorkedWith + 20}+</h3>
            </div>
            <div className="counter-body">
                <h1>the number of individual clients we have worked with</h1>
                <h3> {clientsWorkedWith  + 100}+</h3>
            </div><div className="counter-body">
                <h1>the number of companies we have worked with</h1>
                <h3>{clientsWorkedWith + 40}+</h3>
            </div>
        </div>
    );
};

export default Counter;
