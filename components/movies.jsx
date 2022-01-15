import React from 'react';
import Cards from './cards';
import { match } from './helper';

export default function Movies(props) {
    
    // Get movies-data for a query
    const movies = match(props.actor);

    // Returns array of cards from movies-data
    return (
        <React.StrictMode>
            {movies.map(data => <Cards info={data}/>)}
        </React.StrictMode>
    );
};