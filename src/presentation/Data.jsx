import React from 'react';
import ReactJson from 'react-json-view';

export const Data = ({data}) => {
    return (
        <section>
            <ReactJson src={data} />
        </section>
    )
}