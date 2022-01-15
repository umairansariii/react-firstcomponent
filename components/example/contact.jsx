import React from "react";

export default function Contact(props) {
    return (
        <div className="contact-card">
            <h3>{props.info.name}</h3>
            <p>{props.info.phone}</p>
        </div>
    )
};