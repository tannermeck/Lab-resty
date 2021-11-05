import React from 'react';

export const SearchHistory = () => {
    const item = localStorage.getItem('STORE');
    console.log(item)
    const array = JSON.parse(item);
    console.log(array)
    const object = array.map(obj => {
        console.log(obj)
        console.log('split', obj.split(', '))
        return (
        <li id={obj}>{obj}</li>
        )
    })
    return <ul>{object}</ul>
}