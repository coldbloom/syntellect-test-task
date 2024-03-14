import React from 'react';
import ButtonControl from "./ButtonControl";
import TextStore from "../../stores/text-store";
import {observer} from "mobx-react-lite";

const text1 = new TextStore();
const text2 = new TextStore();

const handleClick1 = () => {
    text1.setInputValue('')
}

const handleClick2 = () => {
    text1.setInputValue('Hello World!')
}

const handleClick3 = () => {
    alert(text2.inputValue)
}

const handleClick4 = () => {
    if (!isNaN(Number(text2.inputValue))) {
        alert(text2.inputValue)
    }
}
const Button = observer(() => {

    return (
        <>
            <h1>Button-control</h1>

            <ButtonControl
                value={text1.inputValue}
                onChangeChange={(value) => text1.setInputValue(value)}
                rightButtons={[
                    { title: 'Clear input', callback: handleClick1 },
                    { title: 'Hello World!', callback: handleClick2 }
                ]}
            />

            <ButtonControl
                value={text2.inputValue}
                onChangeChange={(value) => text2.setInputValue(value)}
                rightButtons={[{ title: 'Alert value', callback: handleClick3}]}
                leftButtons={[{title: 'isNumber?', callback: handleClick4}]}
            />

        </>
    );
});

export default Button;