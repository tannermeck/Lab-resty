import React from 'react';
import './searchForm.css';

export const SearchForm = ({ search, submit, radioChange, jsonTextField }) => {
    return (
        <>
            <form onSubmit={submit}>
                <input onChange={search} placeholder="URL"/>
                    <div>
                        <input name="search" id="GET" value="GET" type="radio" onChange={radioChange}/>
                        <label htmlFor="GET" >GET
                        </label>
                        <input name="search" id="POST" value="POST" type="radio" onChange={radioChange}/>
                        <label htmlFor="POST" >POST
                        </label>
                        <input id="PUT" name="search" value="PUT" type="radio" onChange={radioChange}/>
                        <label htmlFor="PUT">PUT
                        </label>
                        <input id="PATCH" name="search" value="PATCH" type="radio" onChange={radioChange}/>
                        <label htmlFor="PATCH">PATCH
                        </label>
                        <input id="DELETE" name="search" value="DELETE" type="radio" onChange={radioChange}/>
                        <label htmlFor="DELETE">DELETE
                        </label>
                        <button>Go!</button>
                    </div>
                <textarea placeholder="Raw JSON Body" onChange={jsonTextField}/>
            </form>
        </>
        )
}