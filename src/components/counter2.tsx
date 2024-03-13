import React from 'react';

type Props = {
    increment: (value: number) => void,
    decrement: (value: number) => void,
    count: number,
    total: number,
}
const Counter2 = ({ increment, decrement, count, total }: Props) => {
    console.log(count, ' из второго каунтера ')
    return (
        <div>
            <button onClick={() => increment(1)}>+</button>
            <span>{count}</span>
            <button onClick={() => decrement(1)}>-</button>
            <span>{total}</span>
        </div>
    );
};

export default Counter2;