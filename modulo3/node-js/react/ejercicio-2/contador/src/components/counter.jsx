import React, { useState } from 'react';
const Counter = ({ onCountChange }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count +1;
        setCount(newCount);
        onCountChange(newCount);
    };
    const decrement = () => {
        const newCount = Math.max(0, count -1);
        setCount(newCount);
        onCountChange(newCount);
    };
    const reset = () => {
        setCount(0);
        onCountChange(0);
    };

    return (
        <div className="calculator-container">
            <div className="counter-screen">{count}</div>
            <div className="buttons">
                <button onClick={increment}>Increase ➕</button>
                <button onClick={decrement}>Decrease ➖</button>
                <button onClick={reset}>Reset 🔁 </button>
            </div>
        </div>
    );
};
export default Counter;