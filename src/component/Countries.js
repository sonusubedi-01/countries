import { useEffect, useState } from 'react';
import Country from './Country';

function Countries() {
    const [countries, setCountries] = useState([]);
    const [paginatedCountries, setPaginatedcountries] = useState([]);
    const [displayedCountriesCount, setDisplayedCountriesCount] = useState(0);

    const itemsPerPage = 25;

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCountries(data);
                setPaginatedcountries(data.slice(0, itemsPerPage))
                setDisplayedCountriesCount(itemsPerPage);
                console.log(data);
            })
            .catch(error => {
                console.log("Error in post data", error);

            })
    }, [])




    function showMoreCountries() {
        setPaginatedcountries((previousPaginatedCountries) => [...previousPaginatedCountries, ...countries.slice(displayedCountriesCount, displayedCountriesCount + itemsPerPage)])
        setDisplayedCountriesCount((previousDisplayedCountriesCount) => previousDisplayedCountriesCount + itemsPerPage);
    }


    return <>
        <div className="d-flex flex-wrap gap-3 justify-content-evenly">
            {
                paginatedCountries.map(country => <Country flagSrc={country.flags.png} key={country.name.common} name={country.name.common} shortDescription={country.flags.alt} />)
            }
        </div>
        {
         displayedCountriesCount < countries.length &&
        <div className="col-1 mx-auto mb-4">
            <button type="button" onClick={showMoreCountries} className="btn btn-success btn-lg ">Show More</button>
        </div>
        }   
    </>
}
export default Countries;