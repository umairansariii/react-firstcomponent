import React from "react";
import ReactDOM from "react-dom";
import Contact from './contact';

const phonebook = [
    { name: "Tobey Maguire",   phone: "202-555-0117" },
    { name: "Kirsten Dunst",   phone: "202-555-0145" },
    { name: "Andrew Garfield", phone: "202-555-0112" },
    { name: "Emma Stone",      phone: "202-555-0172" },
    { name: "Tom Holland",     phone: "202-555-0160" },
    { name: "Zendaya",         phone: "202-555-0106" },
]

ReactDOM.render(
    <div className="contact-list">
        {phonebook.map(person => <Contact info={person}/>)}
    </div>,
    document.getElementById('root')
);