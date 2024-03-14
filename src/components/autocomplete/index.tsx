import React from 'react';
import AutocompleteControl from "./AutocompleteControl";
import CountryStore from "../../stores/country-store";
import {observer} from "mobx-react-lite";

const country1 = new CountryStore();
const country2 = new CountryStore();
const Autocomplete = observer(() => {
    return (
        <div>
            <h1>Autocomplete-control</h1>

            <AutocompleteControl
                max={3}
                onChangeValue={country1.setCountry}
            />

            <AutocompleteControl
                max={10}
                onChangeValue={country2.setCountry}
            />

            {country1.country &&
                <div style={{marginTop: '20px', display: 'flex', alignItems: "baseline"}}>
                    <p>Выбранная страна 1:&nbsp;</p>
                    <h3>{country1.country?.name}</h3>
                </div>
            }

            {country2.country &&
                <div style={{marginTop: '20px', display: 'flex', alignItems: "baseline"}}>
                    <p>Выбранная страна 2:&nbsp;</p>
                    <h3>{country2.country?.name}</h3>
                </div>
            }
        </div>
    );
});

export default Autocomplete;