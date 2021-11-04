import React from 'react';

export const SearchForm = () => {
    return (
        <>
                <form>
                    <input placeholder="URL"/>
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
                </div>
                    <button>Go!</button>
                </form>
        </>
        )
}