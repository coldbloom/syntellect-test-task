import React, { useState } from "react";
import {getCountryByName, CountryInfo} from "../../api/apiService";
import CountryCard from "./CountryCard";
import s from './Autocomplete.module.css'

type TAutocompleteControl = {
    max: number,
    onChangeValue: (country: CountryInfo) => void,
    dropValue?: () => void,
}

const countriesSettings = (countries: CountryInfo[], max: number) => {
    const uniqueCountries = Array.from(new Set(countries)); // избавляемся от дубликатов подсказок
    return uniqueCountries.slice(0, max) // возвращам максимальное кол-ва подсказок
}

const AutocompleteControl: React.FC<TAutocompleteControl> = ({max, onChangeValue}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);
    const [countriesData, setCountries] = React.useState<CountryInfo[]>([])
    const [open, setOpen] = React.useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpen(true);
        const value = event.target.value;
        setInputValue(value);

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        const newTimer = setTimeout(() => {
            getCountryByName(value).then(countries =>
                setCountries(countriesSettings(countries, max))
            );
        }, 300);

        setDebounceTimer(newTimer);
    };

    return (
        <div className={s.mainWrapper}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите наименование страны"
                className={s.input}
            />
            {
                (countriesData.length !== 0 && open) &&
                <div className={s.dropDown}>
                    {
                        countriesData.map(country =>
                            <CountryCard
                                key={country.fullName}
                                country={country}
                                onChangeValue={onChangeValue}
                                setInputValue={setInputValue}
                                setOpen={setOpen}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default AutocompleteControl;