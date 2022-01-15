import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/movies';

import './main.css';
import './components/cards.css';

const selector = document.getElementById('actors');

selector.addEventListener('change', () => {
    ReactDOM.render(
        <Movies actor={selector.value}/>,
        document.getElementById('movies')
    );
});