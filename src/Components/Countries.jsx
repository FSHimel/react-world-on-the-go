import { use, useState } from "react";
import Country from "./Country/Country";
import './Countries.css'

const Countries = ({countriesPromise}) =>{

    const[visitedCountries, setVisitedCountries] = useState([]);

    const countVisitedCountries = (country) => {
        console.log("count", country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(countries)
    return (
            <div>
                <h1>In the countries: {countries.length}</h1>
                <h3>Countries Visited: {visitedCountries.length}</h3>
                <div id="countries">
                    {
                    countries.map(country => <Country 
                        key={country.cca3.cca3} 
                        country={country}
                        countVisitedCountries={countVisitedCountries}
                        ></Country>)
                    }
                </div>
            </div>
        );
    }

export default Countries;