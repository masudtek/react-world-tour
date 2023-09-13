import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name, flags, area,population, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    
    const passWithParams = () => handleVisitedCountry(country);

    return (
<div className={`country ${ visited && 'visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Code: {cca3}</p>
            <button onClick={ () => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags?.png)}>Add Flags</button><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ?'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;