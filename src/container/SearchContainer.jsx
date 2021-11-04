import React, { Component } from 'react';
import { SearchForm } from '../presentation/SearchForm';

class SearchContainer extends Component {
    state = {

    }
    render() {
        return (
            <>
                <h1>RESTless</h1>
                <SearchForm />
            </>
        )
    }
}
export default SearchContainer;