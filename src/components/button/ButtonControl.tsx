import React from 'react';
import s from './button.module.css'
import a from './../autocomplete/Autocomplete.module.css'
import ButtonComp from "./buttonComp";
import { observer } from 'mobx-react-lite';

type TButton = {
    title: string,
    callback: () => void
}

type TButtonControl = {
    value: string,
    onChangeChange: (value: string) => void,
    leftButtons?: TButton[],
    rightButtons?: TButton[],
}

const ButtonControl: React.FC<TButtonControl> = observer(({value, onChangeChange, leftButtons, rightButtons}) => {

    return (
        <div className={s.wrapper}>
            {leftButtons && <div className={s.buttonsWrapper}>
                {
                    leftButtons.map((button, idx) =>
                        <ButtonComp
                            key={`${idx}-${button.title}`}
                            title={button.title}
                            callback={button.callback}
                        />
                    )
                }
            </div>}

            <input
                type="text"
                value={value}
                onChange={e => onChangeChange(e.target.value)}
                className={a.input}
            />

            {rightButtons && <>
                {
                    rightButtons. map((button, idx) =>
                        <ButtonComp
                            key={`${idx}-${button.title}`}
                            title={button.title}
                            callback={button.callback}
                        />
                    )
                }
            </>}
        </div>
    );
});

export default ButtonControl;