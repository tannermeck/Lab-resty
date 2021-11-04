import React, { Component } from 'react';
import { SearchForm } from '../presentation/SearchForm';

class SearchContainer extends Component {
    state = {
        urlSearch: '',
        method: '',
        jsonBody: {}
    }

    // handleSubmit = async () => {
    // }
    handleSearch = ({ target }) => {
        this.setState({urlSearch: target.value })
    }

    render() {
        console.log('search', this.state.urlSearch)
        return (
            <>
                <h1>RESTless</h1>
                <SearchForm search={this.handleSearch} />
            </>
        )
    }
}
export default SearchContainer;