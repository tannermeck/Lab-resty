import React from 'react';

export const SearchHistory = () => {
    const item = localStorage.getItem('STORE');
    // console.log('it', item[4]);
    // console.log('item', item.split(""))
    const array = JSON.parse(item);
    console.log(array)
    // console.log('ARR', array.split(' '))
    const object = array.map(obj => {
        return (
        <li id={obj}>{obj}</li>
        )
    })
    return <ul>{object}</ul>
}