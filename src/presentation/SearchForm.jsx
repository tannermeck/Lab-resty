import React from 'react';

export const SearchForm = ({ search, submit, radioChange, jsonTextField }) => {
    return (
        <>
                <form onSubmit={submit}>
                    <input onChange={search} placeholder="URL"/>
                        <div>
                            <label name="search">GET
                                <input name="search" value="GET" type="radio" onChange={radioChange}/>
                            </label>
                            <label name="search">POST
                                <input name="search" value="POST" type="radio" onChange={radioChange}/>
                            </label>
                            <label name="search">PUT
                                <input name="search" value="PUT" type="radio" onChange={radioChange}/>
                            </label>
                            <label name="search">PATCH
                                <input name="search" value="PATCH" type="radio" onChange={radioChange}/>
                            </label>
                            <label name="search">DELETE
                                <input name="search" value="DELETE" type="radio" onChange={radioChange}/>
                            </label>
                            <button>Go!</button>
                        </div>
                    <input placeholder="Raw JSON Body" onChange={jsonTextField}/>
                </form>
        </>
        )
}