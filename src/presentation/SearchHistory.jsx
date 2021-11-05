import React from 'react';

export const SearchHistory = () => {
    const item = localStorage.getItem('STORE');
    const array = JSON.parse(item);
    console.log("arr", array)
    const object = array.map(obj => {
        console.log('OBJ', typeof(obj))
        // console.log('split', obj.split("}"))
        return (
        <li id={obj}>{obj}</li>
        )
    })
    return <ul>{object}</ul>
}