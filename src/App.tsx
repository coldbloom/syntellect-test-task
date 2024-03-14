import React from "react";
import "./App.css";
import {observer} from "mobx-react-lite";
import Autocomplete from "./components/autocomplete";
import Button from "./components/button";

const App = observer(() => {

    return (
        <>

            <Button />

            <Autocomplete />

            <p>Уважаемые фронтенд-инженеры, прошу вас дать обратную связь после codeReview, какие ошибки я допустил, заранее спасибо ; )</p>
            <p>мой тг: <a href="https://t.me/kostyablm">@kostyablm</a></p>

        </>
    )
});
export default App;
