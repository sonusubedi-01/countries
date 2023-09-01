import { useEffect, useState } from 'react';
import Country from './Country';

function Countries(props) {
    const [countries, setCountries] = useState([]);
    const [paginatedCountries, setPaginatedcountries] = useState([]);
    const [displayedCountriesCount, setDisplayedCountriesCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState();
    const [filteredCountries, setFilteredCountries] = useState([]);

    const itemsPerPage = 25;

    if (searchTerm !== props.searchTerm) {
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().startsWith(props.searchTerm));
        setFilteredCountries(filteredCountries);
        setPaginatedcountries(filteredCountries.slice(0, itemsPerPage))
        setDisplayedCountriesCount(itemsPerPage);
        setSearchTerm(props.searchTerm);
    }
    useEffect(()=>{
        async function getResponse() {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data);
                setFilteredCountries(data);
                setPaginatedcountries(data.slice(0, itemsPerPage))
                setDisplayedCountriesCount(itemsPerPage);

            } catch (error) {
                console.log('Error in post data', error);
            }
        }
        getResponse();
},[]);
    
    
    // using promise
    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((data) => {
    //             setCountries(data);
    //             setFilteredCountries(data);
    //             setPaginatedcountries(data.slice(0, itemsPerPage))
    //             setDisplayedCountriesCount(itemsPerPage);
    //         })
    //         .catch(error => {
    //             console.log("Error in post data", error);
    //         })
    // }, [])


    function showMoreCountries() {
        setPaginatedcountries((previousPaginatedCountries) => [...previousPaginatedCountries, ...filteredCountries.slice(displayedCountriesCount, displayedCountriesCount + itemsPerPage)])
        setDisplayedCountriesCount((previousDisplayedCountriesCount) => previousDisplayedCountriesCount + itemsPerPage);
    }

    function truncateDescription(description) {
        const limit = 150;
        if (!description) {
            return '';
        }
        if (description.length > limit) {
            return description.slice(0, limit).concat('...');
        }

        return description;
    }


    return <>
        <div className="d-flex flex-wrap gap-3 justify-content-evenly">
            {
                paginatedCountries.map(country => <Country flagSrc={country.flags.png} key={country.name.common} name={country.name.common} shortDescription={truncateDescription(country.flags.alt)} />)
            }
        </div>
        {
            displayedCountriesCount < filteredCountries.length &&
            <div className="col-1 mx-auto mb-4">
                <button type="button" onClick={showMoreCountries} className="btn btn-success btn-lg ">Show More</button>
            </div>
        }
    </>
}
export default Countries;