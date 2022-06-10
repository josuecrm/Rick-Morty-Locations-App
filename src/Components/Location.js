import axios from "axios";
import { useEffect, useState } from "react";
import Resident from "./Resident";
import { FaSearch } from 'react-icons/fa';



const Location = () => {

    const [ location, setLocation ] = useState( {} )
    const [ id, setId ] = useState( "" )
    
    useEffect ( () => {
        const randomIdLocation = Math.floor( Math.random () * 126 ) +1;
        axios.get( `https://rickandmortyapi.com/api/location/${randomIdLocation}` )
             .then( res => setLocation(res.data) )
    }, [])


    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
             .then( res => setLocation(res.data) )
    };

    const [ page, setPage ] =  useState (1);
    const amountResidentes = 10;
    const lastIndex = page * amountResidentes;
    const firstIndex = lastIndex - amountResidentes;

    const residentsPaginated = location.residents?.slice(firstIndex,lastIndex);
    const lastPage = Math.ceil( location.residents?.length / amountResidentes );

    const numbersPages = [];
    for ( let i = 1; i <= lastPage; i++){
         numbersPages.push(i)
    }
    
    return (
        <div className="main-container">
            <div className="container">
                <div>
                    <article className="search-bar">
                        <input type="text" placeholder="Search by Location ID (1-126)" onChange={ (e) => setId( e.target.value ) }/>
                        <button className="button-search" onClick={searchLocation}> <FaSearch /> </button>
                    </article>

                    <div className="container-info-location">
                        <h1 className="name-location"> {location.name}</h1>
                        <div className="info-location">
                            <p><b>Type:</b> {location.type}</p>
                            <p><b>Dimension:</b> {location.dimension}</p>
                            <p><b>Population:</b> {location.residents?.length}</p>
                        </div>
                    </div>
                    
                    <div className="residents-container">
                        {residentsPaginated?.map( resident => (
                        <Resident urlResident={resident} key={resident}/>
                        ))}
                    </div>
                </div>

                <div className="pages">
                    {
                        numbersPages.map( number => (
                            <button
                                className={ `button-page ${ page === number ? "active" : ""}` } 
                                key={number}
                                onClick={ () => setPage(number) }
                            > {number} </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Location;