import { useEffect, useState } from 'react';
import Country from './Country';

function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCountries(data);
                console.log(data);
            })
            .catch(error => {
                console.log("Error in post data", error);

            })
    }, [])


    return <div class="d-flex flex-wrap gap-3 justify-content-evenly">
        {
            countries.map(country => <Country flagSrc={country.flags.png} name={country.name.common} shortDescription={country.flags.alt} />)
        }
    </div>
}
export default Countries;