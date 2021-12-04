import React from 'react';
import ReactJson from 'react-json-view';
import './data.css';

export const Data = ({data}) => {
    return (
        <section>
            <ReactJson src={data} style={{ 'background-color': 'white'}} />
        </section>
    )
}