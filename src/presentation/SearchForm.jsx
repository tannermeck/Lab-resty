import React from 'react';
import './searchForm.css';

export const SearchForm = ({ search, submit, radioChange, jsonTextField }) => {
    return (
        <>
            <form onSubmit={submit}>
                <input onChange={search} placeholder="URL"/>
                    <div>
                        <label htmlFor="GET" >GET
                            <input name="search" id="GET" value="GET" type="radio" onChange={radioChange}/>
                        </label>
                        <label htmlFor="POST" >POST
                            <input name="search" id="POST" value="POST" type="radio" onChange={radioChange}/>
                        </label>
                        <label htmlFor="PUT">PUT
                            <input id="PUT" name="search" value="PUT" type="radio" onChange={radioChange}/>
                        </label>
                        <label htmlFor="PATCH">PATCH
                            <input id="PATCH" name="search" value="PATCH" type="radio" onChange={radioChange}/>
                        </label>
                        <label htmlFor="DELETE">DELETE
                            <input id="DELETE" name="search" value="DELETE" type="radio" onChange={radioChange}/>
                        </label>
                        <button>Go!</button>
                    </div>
                <textarea placeholder="Raw JSON Body" onChange={jsonTextField}/>
            </form>
        </>
        )
}