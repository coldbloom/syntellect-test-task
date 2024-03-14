import React from 'react';
import s from './button.module.css'
type TButtonComp = {
    title: string,
    callback: () => void,
}
const ButtonComp:React.FC<TButtonComp> = ({title, callback}) => {
    return (
        <button onClick={() => callback()}
                className={s.button}
        >
            {title}
        </button>
    );
};

export default ButtonComp;