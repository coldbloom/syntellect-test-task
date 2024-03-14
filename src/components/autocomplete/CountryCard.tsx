import React from 'react';
import {CountryInfo} from "../../api/apiService";
import s from './Autocomplete.module.css'

type TCountryCard = {
    country: CountryInfo,
    onChangeValue: (country: CountryInfo) => void,
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CountryCard: React.FC<TCountryCard> = ({country, onChangeValue, setInputValue, setOpen}) => {
    const handleCountryClick = () => {
        setOpen(false)
        onChangeValue(country)
        setInputValue(country.name)
    }
    return (
        <div
            className={s.countryCardWrapper}
            onClick={() => handleCountryClick()}
        >
            <img src={country.flag} width={35}/>
            <p>{country.name},&nbsp;</p>
            <p>{country.fullName}</p>
        </div>
    )
}

export default CountryCard;