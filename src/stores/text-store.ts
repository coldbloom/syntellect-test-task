import { makeAutoObservable } from "mobx";

class TextStore {
    inputValue = "";

    constructor() {
        makeAutoObservable(this);
    }

    setInputValue(value: string) {
        this.inputValue = value;
        console.log(value, ' setInputValue store')
    }
}

export default TextStore;