import {CountryInfo} from '../api/apiService'
import {makeAutoObservable} from "mobx";
class CountryStore {
    country: null | CountryInfo = null;

    constructor() {
        makeAutoObservable(this)
    }

    setCountry = (country: CountryInfo)=> {
        this.country = country;
    }

    dropCountry = ()=> {
        this.country = null
    }
}

export default CountryStore;