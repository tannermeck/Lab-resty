import React, { Component } from 'react';
import { SearchForm } from '../presentation/SearchForm';
import { FetchApi } from '../services/FetchApi';

class SearchContainer extends Component {
    state = {
        urlSearch: '',
        method: '',
        jsonBody: {},
        data: []
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const retrieveData = await FetchApi(this.state.urlSearch)
        this.setState({data: retrieveData})
    }

    handleSearch = ({ target }) => {
        this.setState({ urlSearch: target.value })
    }

    render() {
        console.log('data', this.state.data)
        return (
            <>
                <h1>RESTless</h1>
                <SearchForm search={this.handleSearch} submit={this.handleSubmit}/>
            </>
        )
    }
}
export default SearchContainer;