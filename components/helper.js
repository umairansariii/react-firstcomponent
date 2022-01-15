import * as data from './database/movies.json';

/* Info: match() returns movies-data of a specific actor */

function match(name) {
    // Get all actors name from movies-data
    const actors = Object.keys(data['default']);

    // Iterates over each actor from array
    for(let i = 0; i < actors.length; i++) {

        // Get the firstname from actors array
        const firstname = actors[i].split(' ')[0].toLowerCase();

        // Compares the name, if found returns the movies-data
        if (firstname == name) {
            return data['default'][actors[i]]
        };
    };
    // Otherwise, returns null
    return null
};

// Exports all helper functions
export { match };