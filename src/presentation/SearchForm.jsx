import React from 'react';

export const SearchForm = ({ search }) => {
    return (
        <>
                <form>
                    <input onChange={search} placeholder="URL"/>
                        <div>
                            <label name="search">GET
                                <input name="search" type="radio" />
                            </label>
                            <label name="search">POST
                                <input name="search" type="radio" />
                            </label>
                            <label name="search">PUT
                                <input name="search" type="radio" />
                            </label>
                            <label name="search">PATCH
                                <input name="search" type="radio" />
                            </label>
                            <label name="search">DELETE
                                <input name="search" type="radio" />
                            </label>
                            <button>Go!</button>
                        </div>
                    <input placeholder="Raw JSON Body" />
                </form>
        </>
        )
}