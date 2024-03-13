import React, { useState } from "react";
import {getCountryByName, CountryInfo} from "../api/apiService";

type TAutocompleteControl = {
    max: number,
    onChangeValue: (country: CountryInfo) => void,
    dropValue: () => void,
}

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
            className='countryCard'
            onClick={() => handleCountryClick()}
        >
            <div style={{width: '35px', height: 'fit-content'}}>
                <img src={country.flag} width={35}/>
            </div>
            <p>{country.name},&nbsp;</p>
            <p>{country.fullName}</p>
        </div>
    )
}

const AutocompleteControl: React.FC<TAutocompleteControl> = ({max, onChangeValue, dropValue}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);
    const [countriesData, setCountries] = React.useState<CountryInfo[]>([])
    const [open, setOpen] = React.useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpen(true)
        const value = event.target.value;
        setInputValue(value);

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        const newTimer = setTimeout(() => {
            console.log(value);
            getCountryByName(value).then(countries => setCountries(countries.slice(0, max)))
        }, 300); // 1000 миллисекунд (1 секунда)

        setDebounceTimer(newTimer);
    };

    return (
        <div style={{position: 'absolute'}}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <div className='select-box'>
                {
                    (countriesData && open) &&
                    countriesData.map(country =>
                        <CountryCard
                            country={country}
                            onChangeValue={onChangeValue}
                            setInputValue={setInputValue}
                            setOpen={setOpen}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default AutocompleteControl;