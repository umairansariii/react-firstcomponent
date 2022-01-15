import React from 'react';

function format(time) {
    return `${Math.floor(time/60)}h ${time%60}m`
};

export default function Cards(props) {
    return (
        <div className="cards">
            <img className="poster" src={`./components/database/img/${props.info.imdb_id}.jpg`}/>
            <div className="cards-data">
                <p>{props.info.title}</p>
                <span className="rating">{props.info.rating}</span>
                <span>{format(props.info.duration)}</span>
                <span>{props.info.year}</span>
                <h4 className="imdb">{props.info.imdb}</h4>
            </div>
        </div>
    )
};