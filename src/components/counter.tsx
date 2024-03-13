import React from 'react';
import CounterStore from "../stores/counter-store";
import {observer} from 'mobx-react-lite'

const Counter = observer(() => {
    const {count, increment, decrement, total} = CounterStore;
    return (
        <div>
            <button onClick={() => increment(1)}>+</button>
            <span>{count}</span>
            <button onClick={() => decrement(1)}>-</button>
            <span>{total}</span>
        </div>
    );
});

export default Counter;