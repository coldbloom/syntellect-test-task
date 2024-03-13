import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Counter2 from "./components/counter2";
import CounterStore2 from './stores/counter2-store'
import postsStore from "./stores/posts-store";
import AutocompleteControl from "./components/AutocompleteControl";
import {CountryInfo} from './api/apiService'
import {observer} from "mobx-react-lite";
import CountryStore from "./stores/country-store";

const counter2 = new CounterStore2();
const country1 = new CountryStore();

const App = observer(() => {
    const {getPostsAction, posts, isLoading} = postsStore;
    const country2 = new CountryStore();

    React.useEffect(() => {
        getPostsAction()
    }, [])

    console.log(country1.country?.name)

    //console.log(posts, 'posts')
    return (
        <div>
            <h1>Тестовое</h1>
            <Counter />
            <p>Втрой каунтер не инстанс</p>
            <Counter2
                increment={counter2.increment}
                decrement={counter2.decrement}
                count={counter2.count}
                total={counter2.total}
            />
            <h1>{counter2.count}</h1>
            <AutocompleteControl
                max={3}
                onChangeValue={country1.setCountry}
                dropValue={country1.dropCountry}
            />

            <div style={{marginTop: '100px'}}>
                <p>Выбранная страна = </p>
                <h1>{country1 && country1.country?.name}</h1>
            </div>
        </div>
    )
});
export default App;
