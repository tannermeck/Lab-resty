import React from 'react';
import './search.css';

export const Search = ({ verb, link }) => {
    return (
        <>
            <p>{verb}</p>
            <p>{link}</p>
        </>
    )
}