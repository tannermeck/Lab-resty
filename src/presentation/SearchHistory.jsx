import React from 'react';
import { Search } from './Search';
import './searchHistory.css';

export const SearchHistory = () => {
    const item = localStorage.getItem('STORE');
    const array = JSON.parse(item);
    const object = array.map(obj => {
        return (
        <li key={obj.url}>
            <Search 
                verb={obj.method}
                link={obj.url}/>
        </li>
        )
    })
    return <ul>{object}</ul>
}
